(function(ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.AddEstimateCtrl", ['$scope', 'mi.repair.web.estimateService', 'mi.repair.web.EventAggregator',
            function ($scope, estimateService, eventAggregator) {

                var viewModel = {
                    existingEstimates: estimateService.getEstimates(),
                    addEstimate: function(estimate) {
                        console.log(estimate);

                        estimateService.addEstimate(estimate);
                        eventAggregator.publish("onHideModalEvent");
                    }
                };

                $scope.addEstimateViewModel = viewModel;
            }
        ]);
}(angular))
