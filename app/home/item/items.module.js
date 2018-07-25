"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var items_component_1 = require("~/home/item/items.component");
var item_detail_component_1 = require("~/home/item/item-detail.component");
var item_service_1 = require("~/home/item/item.service");
var ItemsModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function ItemsModule() {
    }
    ItemsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [],
            declarations: [
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent
            ],
            providers: [
                item_service_1.ItemService
            ],
            exports: [
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], ItemsModule);
    return ItemsModule;
}());
exports.ItemsModule = ItemsModule;
