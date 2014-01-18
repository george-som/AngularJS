(function(ng){
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.ModalCtrl", ['$scope', 'mi.repair.web.EventAggregator', function($scope, eventAggregator) {

            var viewModel = {
                modalShown: false,
                templateUrl: undefined
            };

            eventAggregator.subscribe("onShowModalEvent", function(event, args){

                viewModel.modalShown = true;
                viewModel.templateUrl = args.templateUrl;
            });

            eventAggregator.subscribe("onHideModalEvent", function(event, args){

                viewModel.modalShown = false;
                viewModel.templateUrl = undefined;
            });

            $scope.modalViewModel = viewModel;
        }]);
}(angular))