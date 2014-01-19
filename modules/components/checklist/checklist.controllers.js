(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.ChecklistCtrl", ['$scope','mi.repair.web.EventAggregator',
            function ($scope, eventAggregator) {



                var viewModel = {
                    listItemCount: 0,
                    completedListItemCount: 0,
                    states: getViewModelStates(),
                    isChecklistCompleted: false
                }

                viewModel.currentState = viewModel.states["default"];


                eventAggregator.subscribe("onChecklistItemRegistrationEvent", function() {
                    console.log("Received: onChecklistItemRegistrationEvent");

                    viewModel.listItemCount++;

                    setCurrentViewModelState();
                });

                eventAggregator.subscribe("onChecklistCompletionEvent", function() {
                    console.log("Received: onChecklistCompletionEvent");

                    viewModel.completedListItemCount++;

                    console.log("Completed count: " + viewModel.completedListItemCount);

                    setCurrentViewModelState();
                });

                $scope.checklistViewModel = viewModel;

                function setCurrentViewModelState() {

                    viewModel.badgeCount = viewModel.listItemCount - viewModel.completedListItemCount;

                    if(viewModel.listItemCount == viewModel.completedListItemCount) {
                        viewModel.currentState = viewModel.states["completed"];
                        viewModel.currentState.isEnabled = true;
                        viewModel.isChecklistCompleted = true;
                    }
                }

                function getViewModelStates() {

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

                    return states
                }
            }
    ]);
}(angular))
