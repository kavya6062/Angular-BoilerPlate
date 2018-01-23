System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomerList;
    return {
        setters:[],
        execute: function() {
            CustomerList = (function () {
                function CustomerList() {
                }
                CustomerList.prototype.getCustomers = function () {
                    return ["Chai", "Gow", "Pin", "Chand", "Suru"];
                };
                return CustomerList;
            }());
            exports_1("CustomerList", CustomerList);
        }
    }
});
//# sourceMappingURL=app.CustomerList.service.js.map