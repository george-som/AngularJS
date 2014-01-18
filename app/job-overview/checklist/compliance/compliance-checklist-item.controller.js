(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.ComplianceChecklistItemCtrl", ['$scope', 'mi.repair.web.EventAggregator',
            function($scope, eventAggregator) {

                var viewModel = { };

                viewModel.states = getViewModelStates();
                viewModel.currentState = viewModel.states["default"];

                $scope.checklistItemViewModel = viewModel;

                function getViewModelStates() {
                    return {
                        "default" : {
                            heading: "Compliance",
                            subHeading: "Required: Compliance report attached with the estimate.",
                            actions: [
                                {
                                    text: "Attach Compliance Report",
                                    action: function() {
                                        var args = { templateUrl: "app/job-overview/checklist/compliance/attach-compliance-box.html" }
                                        eventAggregator.publish("onShowModalEvent", args);
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
                                        var args = { templateUrl: "app/job-overview/checklist/compliance/attach-compliance-box.html" }
                                        eventAggregator.publish("onShowModalEvent", args);
                                    }
                                }]
                        }
                    };
                }
            }]);

}(angular))
