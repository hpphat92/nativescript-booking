"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_angular_1 = require("nativescript-angular");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var review_booking_component_1 = require("~/page/review-booking/review-booking.component");
var routers = [
    {
        path: '',
        component: review_booking_component_1.ReviewBookingComponent,
    },
];
var ReviewBookingModule = /** @class */ (function () {
    function ReviewBookingModule() {
    }
    ReviewBookingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                review_booking_component_1.ReviewBookingComponent
            ],
            exports: [],
        })
    ], ReviewBookingModule);
    return ReviewBookingModule;
}());
exports.ReviewBookingModule = ReviewBookingModule;
