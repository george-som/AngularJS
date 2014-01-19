(function(ng) {
    "use strict";

    ng.module("mi.repair.web")
        .controller("mi.repair.web.AddComplianceCtrl", ['$scope', 'mi.repair.web.complianceService', 'mi.repair.web.EventAggregator',
            function($scope, complianceService, eventAggregator) {

                var complianceReports = complianceService.getComplianceReports();
                console.log("compliance");
                console.log(complianceReports);

                var viewModel = {
                    complianceReports: complianceReports,
                    addReport: function(report) {
                        complianceService.addComplianceReport(report);
                        eventAggregator.publish("onHideModalEvent");
                    }
                };

                $scope.addComplianceViewModel = viewModel;

            }]);

}(angular))