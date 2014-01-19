(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.AttachmentChecklistItemCtrl", ['$scope', 'mi.repair.web.EventAggregator',
            function($scope, eventAggregator) {

                var viewModel = { }

                viewModel.states = getViewModelStates();

                // This should be set only on initialization and events
                viewModel.currentState = viewModel.states["default"];

                viewModel.attachedItems = [];
                eventAggregator.subscribe("onAttachmentAdded", function(event, attachment) {
                    console.log("attachment received");
                    console.log(attachment);

                    // This could be swapped out for a template
                    attachment.displayText = "Filename: " + attachment.filename + " Size: " + attachment.size;

                    viewModel.attachedItems.push(attachment);

                    setViewModelState();
                })

                $scope.checklistItemViewModel = viewModel;

                var alreadyCompleted = false;

                function setViewModelState() {

                    if(isChecklistItemCompleted() && !alreadyCompleted) {
                        alreadyCompleted = true;

                        viewModel.currentState = viewModel.states["completed"];
                        eventAggregator.publish("onChecklistCompletionEvent");

                        // This can probably be swapped out for a template
                        viewModel.currentState.subHeading = viewModel.attachedItems.length + " photos of the damage area attached but not yet submitted for review";
                    }
                }

                function isChecklistItemCompleted() {
                    var minimumRequiredAttachmentCount = 3;

                    return viewModel.attachedItems.length >= minimumRequiredAttachmentCount;
                }

                function getViewModelStates() {
                    return {
                        "default" : {
                            heading: "Photos & Attachments",
                            subHeading: "Required: Minimum of 1 photo of the damage area.",
                            actions: [
                                {
                                    text: "Add Attachments",
                                    action: function() {
                                        var args = { templateUrl: "app/job-overview/checklist/attachments/add-attachments-box.html" }
                                        eventAggregator.publish("onShowModalEvent", args);
                                    }
                                }]
                        },
                        "completed" : {
                            heading: "Photos & Attachments",
                            subHeading: "1 photos of the damage area attached but not yet submitted for review",
                            actions: [
                                {
                                    text: "Add Attachments",
                                    action: function() {
                                        var args = { templateUrl: "app/job-overview/checklist/attachments/add-attachments-box.html" }
                                        eventAggregator.publish("onShowModalEvent", args);
                                    }
                                }]
                        }
                    };
                }

            }]);

}(angular))
