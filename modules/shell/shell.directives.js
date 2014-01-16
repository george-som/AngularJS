(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .directive('appShell', function () {

        return {
            restrict: 'AE',
            templateUrl: "modules/shell/shell.html",
            controller: "ShellCtrl"
        };
    });
}(angular))