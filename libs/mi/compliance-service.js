(function(ng) {
    ng.module("mi.repair.web")
        .service("mi.repair.web.complianceService", ['mi.repair.web.EventAggregator',
            function(eventAggregator) {

                var complianceReports = [
                    {
                        filename: "6025-0001.com.xml",
                        size: "1.2kb",
                        modifiedDate: "01/05/2013 09:30 pm",
                        path: "C:/ComplianceReports/6025-0001"
                    },{
                        filename: "6025-0002.com.xml",
                        size: "1.5kb",
                        modifiedDate: "01/08/2013 09:24 pm",
                        path: "C:/ComplianceReports/6025-0002"
                    },{
                        filename: "6025-0003.com.xml",
                        size: "1.0kb",
                        modifiedDate: "01/08/2013 09:12 pm",
                        path: "C:/ComplianceReports/6025-0003"
                    },{
                        filename: "6025-0004.com.xml",
                        size: "1.0kb",
                        modifiedDate: "01/22/2013 09:53 pm",
                        path: "C:/ComplianceReports/6025-0004"
                    },{
                        filename: "6025-0005.com.xml",
                        size: "1.0kb",
                        modifiedDate: "01/11/2013 09:23 pm",
                        path: "C:/ComplianceReports/6025-0005"
                    },{
                        filename: "6025-0006.com.xml",
                        size: "1.0kb",
                        modifiedDate: "01/16/2013 09:11 pm",
                        path: "C:/ComplianceReports/6025-0006"
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