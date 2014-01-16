(function(ng){
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.ModalCtrl", ['$scope', function($scope) {
            var viewModel = {
                modalShown: false,
                templateUrl: undefined
            };

            $scope.$on("show-modal", function(event, args) {
                console.log("show-modal event");

                viewModel.modalShown = true;
                viewModel.templateUrl = args.templateurl;
            });

            $scope.$on("hide-modal", function(event, args) {
               console.log("hide-modal event");

                viewModel.modalShown = false;
                viewModel.templateUrl = undefined;
            });

            $scope.modalViewModel = viewModel;
        }]);
}(angular))