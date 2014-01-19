(function(ng) {
    ng.module("mi.repair.web")
        .service("mi.repair.web.complianceService", ['mi.repair.web.EventAggregator',
            function(eventAggregator) {

                var complianceReports = [
                    {
                        filename: "6025-0001.compliance.xml",
                        size: "1.2kb",
                        modifiedDate: "01/05/2013 09:30 pm",
                        path: "C:/ComplianceReports/Job001"
                    },{
                        filename: "6025-0002.compliance.xml",
                        size: "1.5kb",
                        modifiedDate: "01/05/2013 09:32 pm",
                        path: "C:/ComplianceReports/Job002"
                    },{
                        filename: "6025-0003.compliance.xml",
                        size: "1.0kb",
                        modifiedDate: "01/05/2013 09:33 pm",
                        path: "C:/ComplianceReports/Job003"
                    }];

                return {
                    getComplianceReports : getComplianceReports,
                    addComplianceReport : addComplianceReport
                };

                function getComplianceReports() {

                    return complianceReports;
                }

                function addComplianceReport(complianceReport) {
                    complianceReport.hasBeenAdded = true;

                    eventAggregator.publish("onComplianceAddedEvent", complianceReport);
                }
            }])
}(angular))