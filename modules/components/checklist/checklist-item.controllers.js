(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("ChecklistItemCtrl", ['$scope',
            function($scope) {
                console.log("ChecklistItemCtrl");
            }
        ])
        .controller("RadioactivityChecklistItemConfigCtrl", ['$scope',
        function($scope) {
            console.log("RadioactivityChecklistItemConfigCtrl");

            var states = {
                "default" : {
                    heading: "Radioactivity",
                    subHeading: "Non-radioactive.  These cupcakes are boring."
                },
                "completed" : {
                    heading: "Radioactivity",
                    subHeading: "Radioactive! Eat up..."
                }
            };

            $scope.checklistItemViewModel = {
                currentState: undefined,
                states: states
            };

            $scope.checklistItemViewModel.currentState = states["completed"];
        }]);

}(angular))