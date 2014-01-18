(function(ng) {

    'use strict';
    ng
        .module("mi.repair.web")
        .service("mi.repair.web.EventAggregator", ['$rootScope', function($rootScope) {

            function subscribe(eventName, callback) {
                console.log("Subscribing to " + eventName);

                $rootScope.$on(eventName, function(event, args){
                    callback(event, args);
                });
            }

            function publish(eventName, eventArgs) {
                console.log("publishing " + eventName);;

                $rootScope.$broadcast(eventName, eventArgs);
            }

            return {
                subscribe: subscribe,
                publish: publish
            };
        }]);
}(angular))