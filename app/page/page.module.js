"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var page_component_1 = require("~/page/page.component");
var nativescript_angular_1 = require("nativescript-angular");
var angular_1 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_2 = require("nativescript-ui-listview/angular");
var page_service_1 = require("~/page/page.service");
var routers = [
    {
        path: '',
        loadChildren: './page/search-main/search-main.module#SearchMainModule'
    },
    {
        path: 'search-result',
        loadChildren: './page/search-result/search-result.module#SearchResultModule'
    },
    {
        path: 'hotel-detail',
        loadChildren: './page/hotel-detail/hotel-detail.module#HotelDetailModule'
    },
    {
        path: 'confirm-booking',
        loadChildren: './page/confirm-booking/confirm-booking.module#ConfirmBookingModule'
    },
    {
        path: 'booking-detail/:id',
        loadChildren: './page/booking-detail/booking-detail.module#BookingDetailModule'
    },
    {
        path: 'review-booking',
        loadChildren: './page/review-booking/review-booking.module#ReviewBookingModule'
    },
];
var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                angular_2.NativeScriptUIListViewModule,
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers),
            ],
            declarations: [
                page_component_1.PageComponent,
            ],
            exports: [
                page_component_1.PageComponent,
            ],
            providers: [
                page_service_1.default,
            ]
        })
    ], PageModule);
    return PageModule;
}());
exports.PageModule = PageModule;
