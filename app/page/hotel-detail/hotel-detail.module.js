"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_angular_1 = require("nativescript-angular");
var core_1 = require("@angular/core");
var hotel_detail_component_1 = require("~/page/hotel-detail/hotel-detail.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var routers = [
    {
        path: '',
        component: hotel_detail_component_1.HotelDetailComponent,
    },
];
var HotelDetailModule = /** @class */ (function () {
    function HotelDetailModule() {
    }
    HotelDetailModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                hotel_detail_component_1.HotelDetailComponent
            ],
            exports: [],
        })
    ], HotelDetailModule);
    return HotelDetailModule;
}());
exports.HotelDetailModule = HotelDetailModule;
