import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export const generateResponse = async (messages) => {

    try {

        const completion = await groq.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages,

            temperature: 0.3,

            max_tokens: 200,

            frequency_penalty: 0.3,

        });

        return (
            completion.choices[0]?.message?.content ||
            "Sorry, I couldn't generate a response."
        );

    } catch (error) {

        console.error("Groq API Error:", error.message);

        return "Sorry, I'm unable to process your request right now. Please try again in a few moments.";

    }

};