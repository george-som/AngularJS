(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.ComplianceChecklistItemCtrl", ['$rootScope', '$scope',
            function($rootScope, $scope) {

                var states = {
                    "default" : {
                        heading: "Compliance",
                        subHeading: "Required: Compliance report attached with the estimate.",
                        actions: [
                            {
                                text: "Attach Compliance Report",
                                action: function() {
                                    var args = { templateurl: "app/job-overview/checklist/compliance/attach-compliance-box.html" }
                                    $rootScope.$broadcast("show-modal", args);
                                }
                            }]
                    },
                    "completed" : {
                        heading: "Compliance",
                        subHeading: "Compliance report attached with the estimate, but not yet submitted for review.",
                        actions: [
                            {
                                text: "Attach Compliance Report",
                                action: function() {
                                    var args = { templateurl: "app/job-overview/checklist/compliance/attach-compliance-box.html" }
                                    $rootScope.$broadcast("show-modal", args);
                                }
                            }]
                    }
                };

                $scope.checklistItemViewModel = {
                    currentState: undefined,
                    states: states
                };

                $scope.checklistItemViewModel.currentState = states["completed"];
            }]);

}(angular))
