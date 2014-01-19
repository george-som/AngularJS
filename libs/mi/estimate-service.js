(function(ng){
    ng.module("mi.repair.web")
        .service("mi.repair.web.estimateService", ['mi.repair.web.EventAggregator',
            function(eventAggregator) {

                var existingEstimates = [
                    {
                        customer: {
                            firstName: "Vicki",
                            lastName: "Owens"
                        },
                        estimator: {
                            firstName: "Sean",
                            lastName: "Edwards"
                        },
                        vehicle: {
                            year: 2012,
                            make: "Toyota",
                            model: "Camry"
                        },
                        costDetail: {
                            parts: 333,
                            labor: 288,
                            misc: 147,
                            tax: 38,
                            total: 806
                        },
                        amount: 806.28,
                        modifiedDate: "Today, 8:02 am",
                        system: "CCC",
                        id: "6025-0001",
                        fileInfo: {
                            filename: "6025-0001.bms",
                            size: "55kb",
                            modifiedDate: "01/05/2013 09:30 pm",
                            path: "C:/Estimates/6025-0001"
                        }
                    },
                    {
                        customer: {
                            firstName: "Bill",
                            lastName: "Johnson"
                        },
                        estimator: {
                            firstName: "Miles",
                            lastName: "Davis"
                        },
                        vehicle: {
                            year: 2008,
                            make: "Acura",
                            model: "TSX"
                        },
                        costDetail: {
                            parts: 333,
                            labor: 288,
                            misc: 147,
                            tax: 38,
                            total: 806
                        },
                        amount: 1705.24,
                        modifiedDate: "Today, 7:45 am",
                        system: "CCC",
                        id: "6025-0002",
                        fileInfo: {
                            filename: "6025-0002.bms",
                            size: "96kb",
                            modifiedDate: "01/05/2013 09:32 pm",
                            path: "C:/Estimates/6025-0002"
                        }
                    },{
                        customer: {
                            firstName: "James",
                            lastName: "McMillian"
                        },
                        estimator: {
                            firstName: "John",
                            lastName: "Coltrane"
                        },
                        vehicle: {
                            year: 2010,
                            make: "Honda",
                            model: "Accord"
                        },
                        costDetail: {
                            parts: 333,
                            labor: 288,
                            misc: 147,
                            tax: 38,
                            total: 806
                        },
                        amount: 2507.98,
                        modifiedDate: "Yesterday, 5:21 pm",
                        system: "Mitchell",
                        id: "6025-0003",
                        fileInfo: {
                            filename: "6025-0003",
                            size: "35kb",
                            modifiedDate: "01/05/2013 09:33 pm",
                            path: "C:/Estimates/6025-0003"
                        }
                    },{
                        customer: {
                            firstName: "Sarah",
                            lastName: "Smith"
                        },
                        estimator: {
                            firstName: "George",
                            lastName: "Benson"
                        },
                        vehicle: {
                            year: 2013,
                            make: "Ford",
                            model: "Mustang"
                        },
                        costDetail: {
                            parts: 333,
                            labor: 288,
                            misc: 147,
                            tax: 38,
                            total: 806
                        },
                        amount: 789.54,
                        modifiedDate: "Yesterday, 11:47 am",
                        system: "Mitchell",
                        id: "6025-0004",
                        fileInfo: {
                            filename: "6025-0004.bms",
                            size: "87kb",
                            modifiedDate: "01/05/2013 09:33 pm",
                            path: "C:/Estimates/6025-0004"
                        }
                    },{
                        customer: {
                            firstName: "Jill",
                            lastName: "Gilligan"
                        },
                        estimator: {
                            firstName: "Sean",
                            lastName: "Edwards"
                        },
                        vehicle: {
                            year: 2009,
                            make: "BMW",
                            model: "M3"
                        },
                        costDetail: {
                            parts: 333,
                            labor: 288,
                            misc: 147,
                            tax: 38,
                            total: 806
                        },
                        amount: 321.08,
                        modifiedDate: "Yesterday, 9:32 am",
                        system: "CCC",
                        id: "6025-0005",
                        fileInfo: {
                            filename: "6025-0006.bms",
                            size: "50kb",
                            modifiedDate: "01/05/2013 09:35 pm",
                            path: "C:/Estimates/6025-0005"
                        }
                    },{
                        customer: {
                            firstName: "Sammi",
                            lastName: "Harrod"
                        },
                        estimator: {
                            firstName: "Sean",
                            lastName: "Edwards"
                        },
                        vehicle: {
                            year: 2012,
                            make: "Lexus",
                            model: "IS 250"
                        },
                        costDetail: {
                            parts: 333,
                            labor: 288,
                            misc: 147,
                            tax: 38,
                            total: 806
                        },
                        amount: 1204.67,
                        modifiedDate: "Fri Dec 6, 10:45 am",
                        system: "Mitchell",
                        id: "6025-0006",
                        fileInfo: {
                            filename: "6025-0006.bms",
                            size: "100kb",
                            modifiedDate: "01/05/2013 09:38 pm",
                            path: "C:/Estimates/6025-0006"
                        }
                    }];

            return {
                getEstimates: getExistingEstimates,
                addEstimate: addEstimate
            };

            function getExistingEstimates(){

                return existingEstimates;
            }

            function addEstimate(estimate) {

                estimate.hasBeenAdded = true;

                eventAggregator.publish("onEstimateAddedEvent", estimate);
            }
        }]);


}(angular))
