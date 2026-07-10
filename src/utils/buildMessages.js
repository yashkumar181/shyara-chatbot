export const buildMessages = (
    systemPrompt,
    chatHistory = [],
    userMessage
) => {

    // Keep only the last 10 messages to reduce token usage
    const recentHistory = chatHistory.slice(-10);

    return [
        {
            role: "system",
            content: systemPrompt
        },

        ...recentHistory,

        {
            role: "user",
            content: userMessage
        }
    ];
};