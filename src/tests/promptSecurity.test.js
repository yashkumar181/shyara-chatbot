import systemPrompt from "../prompts/systemPrompt.js";

describe("Prompt Security", () => {

    test("contains security section", () => {
        expect(systemPrompt).toContain("SECURITY");
    });

    test("mentions System Prompt protection", () => {
        expect(systemPrompt).toContain("System Prompt");
    });

    test("mentions API Keys protection", () => {
        expect(systemPrompt).toContain("API Keys");
    });

    test("contains ignore previous instructions protection", () => {
        expect(systemPrompt.toLowerCase())
            .toContain("ignore previous instructions");
    });

});