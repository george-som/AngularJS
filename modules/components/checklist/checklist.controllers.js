(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.ChecklistCtrl", ['$scope',
        function ($scope) {

            var states = {
                "default" : {
                    buttonText: "Not Ready",
                    buttonClass: "btn-default"
                },
                "completed": {
                    buttonText: "Finish",
                    buttonClass: "btn-success"
                }
            };

            $scope.checklistViewModel = {
                currentState: undefined,
                states: states
            };

            $scope.checklistViewModel.currentState = states["default"];
        }
    ]);
}(angular))
