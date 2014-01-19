(function(ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller('mi.repair.web.EstimatePlacematCtrl', ['$scope', 'mi.repair.web.EventAggregator',
            function($scope, eventAggregator) {
                var viewModel = {
                    templateUrl: "app/job-overview/placemat/estimate-placemat.html",
                    title: "Estimate",
                    attachedFiles: [],
                    addEstimate: addEstimate
                };

                $scope.placematViewModel = viewModel;


                eventAggregator.subscribe("onEstimateAddedEvent", function(event, estimate) {
                    console.log("received onEstimateAddedEvent from placemat");
                    console.log(estimate);

                    viewModel.attachedEstimate = estimate;
                    viewModel.shouldDisplayDetail = true;

                    var attachedFile = {
                        filename: estimate.fileInfo.filename,
                        size: estimate.fileInfo.size
                    };
                    viewModel.attachedFiles.push(attachedFile);

                    console.log("attached file");
                    console.log(attachedFile);
                });

                eventAggregator.subscribe("onComplianceAddedEvent", function(event, report) {

                    var attachedFile = {
                        filename: report.filename,
                        size: report.size
                    };
                    viewModel.attachedFiles.push(attachedFile);
                })

                function addEstimate() {
                    var args = { templateUrl: "app/job-overview/checklist/estimate/add-estimate-box.html" }
                    eventAggregator.publish("onShowModalEvent", args);
                }

            }]);
}(angular))