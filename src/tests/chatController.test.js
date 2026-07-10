import { buildMessages } from "../utils/buildMessages.js";

describe("Chat Controller",()=>{

test("builds messages",()=>{

const messages=buildMessages(

"Prompt",

[],

"Hi"

);

expect(messages.length).toBe(2);

});

});