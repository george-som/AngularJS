(function(ng) {
    ng.module("mi.repair.web")
        .service("mi.repair.web.attachmentService", ["mi.repair.web.EventAggregator",
            function(eventAggregator) {

                var attachments = [
                    {
                        filename: "front-bumper.jpg",
                        size: "1.2MB",
                        modifiedDate: "01/05/2013 09:30 pm",
                        path: "C:/Images/Job12345"
                    },{
                        filename: "front-left-panel.jpg",
                        size: "1.1MB",
                        modifiedDate: "01/05/2013 09:32 pm",
                        path: "C:/Images/Job12345"
                    },{
                        filename: "front-right-panel.jpg",
                        size: "1.7MB",
                        modifiedDate: "01/05/2013 09:33 pm",
                        path: "C:/Images/Job12345"
                    },{
                        filename: "front-right-panel.jpg",
                        size: "2.1MB",
                        modifiedDate: "01/05/2013 09:33 pm",
                        path: "C:/Images/Job12345"
                    },{
                        filename: "rear-bumper.jpg",
                        size: "0.25MB",
                        modifiedDate: "01/05/2013 09:35 pm",
                        path: "C:/Images/Job12345"
                    },{
                        filename: "rear-right-panel.jpg",
                        size: "2.2MB",
                        modifiedDate: "01/05/2013 09:38 pm",
                        path: "C:/Images/Job12345"
                    }
                ];

                return {
                    addAttachment: addAttachment,
                    getAttachments: getAttachments
                };

                function getAttachments() {

                    return attachments;
                }

                function addAttachment(attachment) {
                    attachment.hasBeenAdded = true;

                    eventAggregator.publish("onAttachmentAdded", attachment);
                }
            }]);
}(angular))