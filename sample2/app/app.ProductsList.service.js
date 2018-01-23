System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProductList;
    return {
        setters:[],
        execute: function() {
            ProductList = (function () {
                function ProductList() {
                }
                ProductList.prototype.getProducts = function () {
                    return ["Apple", "Samsung", "OnePlus"];
                };
                return ProductList;
            }());
            exports_1("ProductList", ProductList);
        }
    }
});
//# sourceMappingURL=app.ProductsList.service.js.map