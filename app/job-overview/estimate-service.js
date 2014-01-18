(function(ng){
    ng.module("mi.repair.web")
        .service("mi.repair.web.estimateService", function() {
           console.log("mi.repair.web.estimateService instantiated");

            var test = function(controllerName) {
                console.log("Test called from: " + controllerName);
            };

            return {
                test: test,
                attachedEstimate: undefined,
                getEstimates: getExistingEstimates
            };
        });

    function getExistingEstimates(){
        var existingEstimates = [
            {
                customer: {
                    firstName: "Owens",
                    lastName: "Vicki"
                },
                vehicle: {
                    year: 2012,
                    make: "Toyota",
                    model: "Camry"
                },
                amount: 806.28,
                modifiedDate: "Today, 8:02 am",
                system: "CCC",
                id: "12345A"
            },
            {
                customer: {
                    firstName: "Bill",
                    lastName: "Johnson"
                },
                vehicle: {
                    year: 2008,
                    make: "Acura",
                    model: "TSX"
                },
                amount: 1705.24,
                modifiedDate: "Today, 7:45 am",
                system: "CCC",
                id: "12345B"
            },{
                customer: {
                    firstName: "James",
                    lastName: "McMillian"
                },
                vehicle: {
                    year: 2010,
                    make: "Honda",
                    model: "Accord"
                },
                amount: 2507.98,
                modifiedDate: "Yesterday, 5:21 pm",
                system: "Mitchell",
                id: "12345C"
            },{
                customer: {
                    firstName: "Sarah",
                    lastName: "Smith"
                },
                vehicle: {
                    year: 2013,
                    make: "Ford",
                    model: "Mustang"
                },
                amount: 789.54,
                modifiedDate: "Yesterday, 11:47 am",
                system: "Mitchell",
                id: "12345D"
            },{
                customer: {
                    firstName: "Jill",
                    lastName: "Gilligan"
                },
                vehicle: {
                    year: 2009,
                    make: "BMW",
                    model: "M3"
                },
                amount: 321.08,
                modifiedDate: "Yesterday, 9:32 am",
                system: "CCC",
                id: "12345E"
            },{
                customer: {
                    firstName: "Sammi",
                    lastName: "Harrod"
                },
                vehicle: {
                    year: 2012,
                    make: "Lexus",
                    model: "IS 250"
                },
                amount: 1204.67,
                modifiedDate: "Fri Dec 6, 10:45 am",
                system: "Mitchell",
                id: "12345F"
            }];

        return existingEstimates;
    }
}(angular))
