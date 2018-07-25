"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_angular_1 = require("nativescript-angular");
var core_1 = require("@angular/core");
var confirm_booking_component_1 = require("~/page/confirm-booking/confirm-booking.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var routers = [
    {
        path: '',
        component: confirm_booking_component_1.ConfirmBookingComponent,
    },
];
var ConfirmBookingModule = /** @class */ (function () {
    function ConfirmBookingModule() {
    }
    ConfirmBookingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                confirm_booking_component_1.ConfirmBookingComponent
            ],
            exports: [],
        })
    ], ConfirmBookingModule);
    return ConfirmBookingModule;
}());
exports.ConfirmBookingModule = ConfirmBookingModule;
