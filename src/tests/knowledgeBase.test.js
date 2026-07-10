import knowledgeBase from "../data/knowledgeBase.js";

describe("Knowledge Base", () => {

    test("Lite Plan Exists", () => {
        expect(knowledgeBase.plans.lite.price)
            .toBe("₹499/month per restaurant");
    });

    test("Plus Plan Exists", () => {
        expect(knowledgeBase.plans.plus.price)
            .toBe("₹2,999/month per restaurant");
    });

    test("Permanent QR Exists", () => {
        expect(knowledgeBase.qr.permanent)
            .toBe(true);
    });

});