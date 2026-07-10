import { buildMessages } from "../utils/buildMessages.js";

describe("buildMessages()", () => {

    test("should create messages in correct order", () => {

        const systemPrompt = "System Prompt";

        const chatHistory = [
            {
                role: "user",
                content: "Hello"
            },
            {
                role: "assistant",
                content: "Hi!"
            }
        ];

        const userMessage = "Lite plan kya hai?";

        const messages = buildMessages(
            systemPrompt,
            chatHistory,
            userMessage
        );

        expect(messages).toEqual([
            {
                role: "system",
                content: "System Prompt"
            },
            {
                role: "user",
                content: "Hello"
            },
            {
                role: "assistant",
                content: "Hi!"
            },
            {
                role: "user",
                content: "Lite plan kya hai?"
            }
        ]);

    });
    test("should keep only the last 10 chat history messages", () => {

    const history = [];

    for (let i = 1; i <= 15; i++) {
        history.push({
            role: "user",
            content: `Message ${i}`
        });
    }

    const messages = buildMessages(
        "System Prompt",
        history,
        "Latest Question"
    );

    // Total messages:
    // 1 System + 10 History + 1 User = 12
    expect(messages.length).toBe(12);

    // First history message should now be Message 6
    expect(messages[1].content).toBe("Message 6");

    // Last history message should be Message 15
    expect(messages[10].content).toBe("Message 15");

    // Final message should be latest user message
    expect(messages[11].content).toBe("Latest Question");

    });
});