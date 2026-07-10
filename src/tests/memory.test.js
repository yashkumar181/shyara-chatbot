import { buildMessages } from "../utils/buildMessages.js";

describe("Conversation Memory", () => {

    test("Last message is user message", () => {

        const messages = buildMessages(
            "Prompt",
            [],
            "Hello"
        );

        expect(messages[messages.length-1].content)
            .toBe("Hello");

    });

});