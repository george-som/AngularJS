(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .directive('checklist', function () {

        var link = function(scope, element, attrs){

            var checklistConfig = {
                title: attrs.clTitle
            };

            scope.checklistConfig = checklistConfig;
        };

        var compile = function(element, attrs, transclude) {

            return link;

        };

        return {
            restrict: 'AE',
            templateUrl: "modules/components/checklist/checklist.html",
            transclude: true,
            controller: "mi.repair.web.ChecklistCtrl",
            compile: compile
        };
    });


}(angular))
