import Groq from 'groq-sdk';
import { Lead } from '../models/Lead.js';
import dotenv from 'dotenv';

dotenv.config();

// Person A's AI Client
const groq = new Groq(); 

// Person A's System Prompt (The BiteX Rulebook)
const systemPrompt = `
You are a helpful, conversational sales assistant for BiteX by Shyara, a permanent QR menu system for modern Indian restaurants. 
Your goal is to answer user questions accurately, keep responses concise (under 3 sentences), and gently encourage them to book a demo. 
You understand both English and conversational Hinglish.

Knowledge Base:
- Digital QR menu. 15-minute setup. No app installs required for customers.
- Print QRs once. They never change.
- BiteX-Lite (₹499/mo per restaurant): Menu browsing, dietary filters, waiter cart, real-time sold-out toggles, staff invites. Limits: 20 tables, 100 items.
- BiteX-Plus (₹2,999/mo per restaurant): Everything in Lite + direct table ordering, payment from table, kitchen display queue, revenue analytics.
- Supports multiple outlets (billed separately). Grace period for failed payments included.

Rules:
1. Never invent features or pricing.
2. Keep the tone friendly, approachable, and professional.
3. If a user asks to buy or wants a demo, ask for their WhatsApp number and restaurant name.
`;

export const handleChat = async (req, res) => {
    try {
        const { userMessage, chatHistory } = req.body;

        // ==========================================
        // PERSON B'S CODE: THE LEAD CAPTURE TRAP
        // ==========================================
        const phoneRegex = /\b\d{10}\b/; 
        const extractedNumber = userMessage.match(phoneRegex);

        if (extractedNumber) {
            try {
                // Instantly save to MongoDB Atlas
                await Lead.create({ whatsappNumber: extractedNumber[0] });
                console.log(`🎯 New lead saved to DB: ${extractedNumber[0]}`);
            } catch (dbError) {
                console.error("Failed to save lead to MongoDB:", dbError);
            }
        }

        // ==========================================
        // PERSON A'S CODE: CALLING THE AI
        // ==========================================
        const messages = [
            { role: 'system', content: systemPrompt },
            ...(chatHistory || []),
            { role: 'user', content: userMessage }
        ];

        const chatCompletion = await groq.chat.completions.create({
            messages: messages,
            model: 'llama-3.1-8b-instant', 
            max_tokens: 150,
        });

        const botReply = chatCompletion.choices[0]?.message?.content || "Sorry, I'm having trouble connecting.";
        
        res.json({ reply: botReply });

    } catch (error) {
        console.error("Chat API Error:", error);
        res.status(500).json({ error: "Server processing failed." });
    }
};