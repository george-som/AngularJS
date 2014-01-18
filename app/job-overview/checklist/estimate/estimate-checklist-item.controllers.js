(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.EstimateChecklistItemConfigCtrl", ['$rootScope', '$scope', 'mi.repair.web.estimateService',
            function($rootScope, $scope, estimateService) {

                estimateService.test("mi.repair.web.EstimateChecklistItemConfigCtrl");

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

                $rootScope.$on("estimate-added", function(event, args) {
                    console.log("Estimate Added")

                    $scope.checklistItemViewModel.attachedItem = {
                        text: "Estimate-ID: " + args.id + "  Total: " + args.amount
                    };
                    $scope.checklistItemViewModel.currentState = states["completed"];
                })
            }]);
}(angular))
