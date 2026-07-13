import { Lead } from "../models/Lead.js";
import systemPrompt from "../prompts/systemPrompt.js";
import { buildMessages } from "../utils/buildMessages.js";
import { generateResponse } from "../services/groqService.js";

export const handleChat = async (req, res) => {
    try {
        const { userMessage, chatHistory } = req.body;
        if (!userMessage) {
            return res.status(400).json({
                error: "User message is required."
            });
        }

        // ==========================================
        // PERSON B: THE LEAD CAPTURE TRAP
        // ==========================================
        const phoneRegex = /\b\d{10}\b/;
        const extractedNumber = userMessage.match(phoneRegex);

        if (extractedNumber) {
            try {
                const extractionPrompt = `
                Extract the owner's name, restaurant name, and email address from this user message.
                User Message: "${userMessage}"
                If they are not mentioned, return null for them.
                Return ONLY valid JSON with no markdown, formatting, or extra text.
                Format exactly like this: {"ownerName": "Name", "restaurantName": "Name", "email": "email@example.com"}
                `;

                // ROUTING UPDATE: Use the 8B model just for this extraction task
                const extractionReply = await generateResponse(
                    [{ role: "user", content: extractionPrompt }], 
                    "llama-3.1-8b-instant" 
                );
                
                const cleanedJson = extractionReply.replace(/```json|```/g, '').trim();
                let extractedData = {};
                
                try {
                    extractedData = JSON.parse(cleanedJson);
                } catch (parseError) {
                    console.error("  Failed to parse AI extraction JSON");
                }

                await Lead.create({
                    whatsappNumber: extractedNumber[0],
                    ownerName: extractedData.ownerName || "Not Provided",
                    restaurantName: extractedData.restaurantName || "Pending Verification",
                    email: extractedData.email || "Not Provided"
                });
                
                console.log("  Lead Saved to MongoDB:", extractedNumber[0], extractedData.ownerName, extractedData.email);
            } catch (dbError) {
                console.error("Database Error:", dbError);
            }
        }

        // ==========================================
        // PERSON A: THE AI BRAIN (Uses default 70B)
        // ==========================================
        const messages = buildMessages(
            systemPrompt,
            chatHistory,
            userMessage
        );
        const botReply = await generateResponse(messages);

        return res.json({
            reply: botReply
        });
    } catch (error) {
        console.error("Chat Controller Error:", error);
        return res.status(500).json({
            success: false,
            reply: "Sorry, something went wrong. Please try again later."
        });
    }
};