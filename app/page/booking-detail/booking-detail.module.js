"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var booking_detail_component_1 = require("~/page/booking-detail/booking-detail.component");
var nativescript_angular_1 = require("nativescript-angular");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var routers = [
    {
        path: '',
        component: booking_detail_component_1.BookingDetailComponent,
    },
];
var BookingDetailModule = /** @class */ (function () {
    function BookingDetailModule() {
    }
    BookingDetailModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                booking_detail_component_1.BookingDetailComponent
            ],
            exports: [],
        })
    ], BookingDetailModule);
    return BookingDetailModule;
}());
exports.BookingDetailModule = BookingDetailModule;
