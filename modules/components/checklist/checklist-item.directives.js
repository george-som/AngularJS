(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .directive('checklistItem', function() {

            var link = function(scope, element, attrs) {
                console.log("linking of checklist-item directive");
            };

            return {
                restrict: "AE",
                templateUrl: "modules/components/checklist/checklist-item.html",
                controller: "mi.repair.web.ChecklistItemCtrl",
                link: link
            };
        });
}(angular))
