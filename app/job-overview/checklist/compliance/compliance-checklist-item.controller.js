(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.ComplianceChecklistItemCtrl", ['$scope', 'mi.repair.web.EventAggregator',
            function($scope, eventAggregator) {

                var viewModel = { };

                viewModel.states = getViewModelStates();
                viewModel.currentState = viewModel.states["default"];

                viewModel.attachedItems = [];
                eventAggregator.subscribe("onComplianceAddedEvent", function(event, report) {
                    console.log("Compliance received");
                    console.log(report);

                    // This should be swapped out for a custom template
                    report.displayText = "Filename: " + report.filename + " Size: " + report.size;

                    viewModel.attachedItems.push(report);
                    viewModel.currentState = viewModel.states["completed"];

                    eventAggregator.publish("onChecklistCompletionEvent");
                });

                $scope.checklistItemViewModel = viewModel;

                function getViewModelStates() {
                    return {
                        "default" : {
                            heading: "Compliance",
                            subHeading: "Required: Compliance report attached with the estimate.",
                            imageUrl: "resources/add-attachment-small.png",
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
                            heading: "✔ Compliance",
                            subHeading: "Compliance report attached with the estimate, but not yet submitted for review.",
                        }
                    };
                }
            }]);

}(angular))
