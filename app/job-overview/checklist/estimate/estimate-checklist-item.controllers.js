(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        //.controller("IngredientChecklistItemConfigCtrl", ['$rootScope', '$scope',
        .controller("mi.repair.web.EstimateChecklistItemConfigCtrl", ['$rootScope', '$scope',
            function($rootScope, $scope) {

                var states = {
                    "default" : {
                        heading: "Estimate",
                        subHeading: "Required: Original estimate with print image.",
                        actions: [
                            {
                                text: "Add Estimate",
                                action: function() {
                                    console.log("Add Estimate clicked");

                                    var args = { templateurl: "app/job-overview/checklist/estimate/add-estimate-box.html" }
                                    $rootScope.$broadcast("show-modal", args);
                                }
                            },
                            {
                                text: "Write Estimate",
                                action: function() {
                                    console.log("Write Estimate clicked");

                                    var args = { templateurl: "app/job-overview/checklist/estimate/write-estimate-box.html" }
                                    $rootScope.$broadcast("show-modal", args);
                                }
                            }
                        ]
                    },
                    "completed" : {
                        heading: "Estimate",
                        subHeading: "Estimate attached but not yet submitted for review."
                    },
                    "approved" : {
                        heading: "Estimate",
                        subHeading: "Your estimate has been reviewed and approved by the carrier."
                    }
                };

                $scope.checklistItemViewModel = {
                    currentState: undefined,
                    states: states
                };

                $scope.checklistItemViewModel.currentState = states["default"];
            }]);
}(angular))
