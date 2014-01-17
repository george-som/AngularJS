describe("Modules Test Suite", function() {

    beforeEach(module("mi.repair.web"));

    describe("Shell Tests", function() {

        var _scope;
        var _sut;

        beforeEach(inject(function($rootScope, $controller) {
            _scope = $rootScope.$new();
            _sut = $controller('mi.repair.web.ShellCtrl', { $scope: _scope });
        }));

        it("should be shown", function() {
            console.log("be true");

            var sut = angular.directive
            expect(5 + 5).toBe(10);
        });
    })
})
