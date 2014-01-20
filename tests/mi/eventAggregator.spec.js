describe("mi.repair.web.EventAggregator.spec", function() {
    beforeEach(module("mi.repair.web"));

    var scope,
        sut;

    beforeEach(inject(['$rootScope', 'mi.repair.web.EventAggregator',
        function($rootScope, eventAggregator) {
        scope = $rootScope.$new();
        sut = eventAggregator;
    }]))

    it("should", function() {

    })


})