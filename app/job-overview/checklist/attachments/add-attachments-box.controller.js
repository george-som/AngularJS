(function(ng) {
    ng
        .module("mi.repair.web")
        .controller("mi.repair.web.AddAttachmentsCtrl", ["$scope", "mi.repair.web.EventAggregator",
            function($scope, eventAggregator) {

                $scope.addAttachmentViewModel = {
                    publish: function() {

                        var args = "Published Args";
                        eventAggregator.publish("onItemAttachedEvent", args);
                    }
                }
            }]);
}(angular))