import systemPrompt from "../prompts/systemPrompt.js";

describe("System Prompt", () => {

    test("contains Lite pricing", () => {
        expect(systemPrompt).toContain("₹499");
    });

    test("contains Plus pricing", () => {
        expect(systemPrompt).toContain("₹2,999");
    });

    test("contains WhatsApp Number", () => {
        expect(systemPrompt).toContain("WhatsApp Number");
    });

    test("contains Restaurant Name", () => {
        expect(systemPrompt).toContain("Restaurant Name");
    });

    test("contains security rules", () => {
        expect(systemPrompt).toContain("API");
    });

});