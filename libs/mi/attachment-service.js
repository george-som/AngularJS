(function(ng) {
    ng.module("mi.repair.web")
        .service("mi.repair.web.attachmentService", ["mi.repair.web.EventAggregator",
            function(eventAggregator) {

                var attachments = [
                    {
                        filename: "front-bumper.jpg",
                        imageUrl: "resources/attachments/front-bumper.jpg",
                        size: "1.2MB",
                        modifiedDate: "01/05/2013 09:30 pm",
                        path: "C:/Images/6025-0001"
                    },{
                        filename: "front-left-panel.jpg",
                        imageUrl: "resources/attachments/front-left-panel.jpg",
                        size: "1.1MB",
                        modifiedDate: "01/05/2013 09:32 pm",
                        path: "C:/Images/6025-0002"
                    },{
                        filename: "front-right-panel.jpg",
                        imageUrl: "resources/attachments/front-right-panel.jpg",
                        size: "1.7MB",
                        modifiedDate: "01/05/2013 09:33 pm",
                        path: "C:/Images/6025-0003"
                    },{
                        filename: "rear-bumper.jpg",
                        imageUrl: "resources/attachments/rear-bumper.jpg",
                        size: "2.1MB",
                        modifiedDate: "01/05/2013 09:33 pm",
                        path: "C:/Images/6025-0004"
                    },{
                        filename: "rear-left-panel.jpg",
                        imageUrl: "resources/attachments/rear-left-panel.jpg",
                        size: "0.25MB",
                        modifiedDate: "01/05/2013 09:35 pm",
                        path: "C:/Images/6025-0005"
                    },{
                        filename: "rear-right-panel.jpg",
                        imageUrl: "resources/attachments/rear-right-panel.jpg",
                        size: "2.2MB",
                        modifiedDate: "01/05/2013 09:38 pm",
                        path: "C:/Images/6025-0006"
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