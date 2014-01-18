(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.AttachmentChecklistItemCtrl", ['$scope', 'mi.repair.web.EventAggregator',
            function($scope, eventAggregator) {

                var viewModel = { }

                viewModel.states = getViewModelStates();

                // This should be set only on initialization and events
                viewModel.currentState = viewModel.states["completed"]

                eventAggregator.subscribe("onItemAttachedEvent", function(event, args){

                    viewModel.attachedItem = {
                        text: args
                    }
                });

                $scope.checklistItemViewModel = viewModel;

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
