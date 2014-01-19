(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.ChecklistItemCtrl", ['$scope', 'mi.repair.web.EventAggregator',
            function($scope, eventAggregator) {

                eventAggregator.publish("onChecklistItemRegistrationEvent");
            }
        ]);
}(angular))
