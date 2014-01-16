
describe("app-shell Test Suite", function() {

    beforeEach(module('mi.repair.web'));

    it("should be shown", function() {
        console.log("be true");

        expect(5 + 5).toBe(10);
    });

})