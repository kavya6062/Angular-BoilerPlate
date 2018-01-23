System.register(['angular2/core', './app.ProductsList.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_ProductsList_service_1;
    var Products;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_ProductsList_service_1_1) {
                app_ProductsList_service_1 = app_ProductsList_service_1_1;
            }],
        execute: function() {
            Products = (function () {
                function Products(productList) {
                    this.products = productList.getProducts();
                }
                Products = __decorate([
                    core_1.Component({
                        selector: "products",
                        template: "<div>\n                <div>\n                     <p>Product Names</p>\n                </div>\n                <div>\n                    <ul >\n                        <li *ngFor=\"#product of products\" >\n                            {{product}}\n                        </li>\n                    </ul>\n                </div>\n            </div>",
                        providers: [app_ProductsList_service_1.ProductList]
                    }), 
                    __metadata('design:paramtypes', [app_ProductsList_service_1.ProductList])
                ], Products);
                return Products;
            }());
            exports_1("Products", Products);
        }
    }
});
//# sourceMappingURL=app.Products.js.map