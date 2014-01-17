/*
describe("app-shell Test Suite", function() {

    beforeEach(function() {
        module("mi.repair.web");
        module("modules/shell/shell.html");
    });

    describe("app-shell Controller Test", function() {

        var scope,
            elem,
            directive,
            compiled,
            html;

        var $httpBackend;

        beforeEach(function() {
           html = '<div app-shell></div>';

            inject(function($compile, $rootScope, $injector) {

                $httpBackend = $injector.get("$httpBackend");
                $httpBackend.whenGET("modules/shell/shell.html").passThrough();

                scope = $rootScope.$new();

                elem = angular.element(html);
                console.log("Compile");
                compiled = $compile(elem);

                compiled(scope);

                scope.$digest();
            })
        });

        it("should be shown", function() {
            console.log("be true");

            expect(5 + 5).toBe(10);
        });
    })



});
*/
