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
                // Instantly save to MongoDB Atlas
                await Lead.create({
                    whatsappNumber: extractedNumber[0]
                });
                console.log("🎯 Lead Saved to MongoDB:", extractedNumber[0]);
            } catch (dbError) {
                console.error("Database Error:", dbError);
            }
        }

        // ==========================================
        // PERSON A: THE AI BRAIN
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