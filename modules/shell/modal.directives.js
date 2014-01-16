(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .directive('modal', function () {

            return {
                restrict: 'AE',
                templateUrl: 'modules/shell/modal.html',
                scope: {
                    show: '='
                },
                transclude: true,
                replace: true,
                link: function($scope, element, attrs) {
                    $scope.dialogStyle = {};
                    if (attrs.width)
                        $scope.dialogStyle.width = attrs.width;
                    if (attrs.height)
                        $scope.dialogStyle.height = attrs.height;
                    $scope.hideModal = function() {
                        $scope.show = false;
                    };
                }
            };
        });
}(angular))