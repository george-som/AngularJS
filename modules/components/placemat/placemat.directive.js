(function(ng) {
    'use strict';

    ng.module("mi.repair.web")
        .directive('placemat', function() {

            return {
                restrict: 'AE',
                templateUrl: "modules/components/placemat/placemat.html",
                transclude: true
            }
        });
}(angular))