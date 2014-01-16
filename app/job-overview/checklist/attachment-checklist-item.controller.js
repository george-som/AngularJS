(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.AttachmentChecklistItemCtrl", ['$rootScope', '$scope',
            function($rootScope, $scope) {

                var states = {
                    "default" : {
                        heading: "Photos & Attachments",
                        subHeading: "Required: Minimum of 18 photos of the damage area.",
                        actions: [
                            {
                                text: "Add Attachments",
                                action: function() {
                                    var args = { templateurl: "app/job-overview/checklist/add-attachments-box.html" }
                                    $rootScope.$broadcast("show-modal", args);
                                }
                            }]
                    },
                    "completed" : {
                        heading: "Radioactive Baker",
                        subHeading: "All required ingredients are ready"
                    }
                };

                $scope.checklistItemViewModel = {
                    currentState: undefined,
                    states: states
                };

                $scope.checklistItemViewModel.currentState = states["default"];
            }]);

}(angular))