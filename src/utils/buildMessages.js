export const buildMessages = (
    systemPrompt,
    chatHistory = [],
    userMessage
) => {
    const recentHistory = chatHistory.slice(-6);
    
    const minifiedPrompt = systemPrompt.replace(/\s+/g, ' ').trim();

    return [
        {
            role: "system",
            content: minifiedPrompt
        },
        ...recentHistory,
        {
            role: "user",
            content: userMessage
        }
    ];
};