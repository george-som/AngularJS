(function(ng) {
    ng
        .module("mi.repair.web")
        .controller("mi.repair.web.AddAttachmentsCtrl", ["$scope", "mi.repair.web.attachmentService", "mi.repair.web.EventAggregator",
            function($scope, attachmentService, eventAggregator) {

                var viewModel = {};
                viewModel.attachments = attachmentService.getAttachments();

                viewModel.okCommand = function() {

                    eventAggregator.publish("onHideModalEvent", null);
                };

                viewModel.addAttachment = function(attachment) {
                    attachmentService.addAttachment(attachment);
                }

                $scope.addAttachmentViewModel = viewModel;
            }]);
}(angular))