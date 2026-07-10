import { jest } from "@jest/globals";

jest.unstable_mockModule("groq-sdk", () => ({
    default: class {
        chat = {
            completions: {
                create: async () => ({
                    choices: [
                        {
                            message: {
                                content: "Mock Response"
                            }
                        }
                    ]
                })
            }
        };
    }
}));

const { generateResponse } = await import("../services/groqService.js");

describe("Groq Service", () => {

    test("returns mocked response", async () => {

        const reply = await generateResponse([]);

        expect(reply).toBe("Mock Response");

    });

});