(function(ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.AddEstimateCtrl", ['$rootScope', '$scope', 'mi.repair.web.estimateService',
            function ($rootScope, $scope, estimateService) {

                estimateService.test("mi.repair.web.AddEstimateCtrl");

                $scope.addEstimateViewModel = {
                    existingEstimates : estimateService.getEstimates(),
                    addEstimate: function(estimate) {
                        console.log(estimate);

                        $rootScope.$broadcast("estimate-added", estimate);
                        $rootScope.$broadcast("hide-modal", null);
                    }
                };
            }
        ]);
}(angular))
