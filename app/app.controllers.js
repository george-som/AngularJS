(function(ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.AppCtrl", [
        '$scope', function ($scope) {

            $scope.appViewModel = {
                appConfig: {
                    appName: "Project Cupcake - AngularJS Demo"
                }
            };
        }
    ]);
}(angular))