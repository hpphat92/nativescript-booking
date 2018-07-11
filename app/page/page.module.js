"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var page_component_1 = require("~/page/page.component");
var nativescript_angular_1 = require("nativescript-angular");
var angular_1 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var search_main_component_1 = require("~/page/search-main/search-main.component");
var search_result_component_1 = require("~/page/search-result/search-result.component");
var hotel_detail_component_1 = require("~/page/hotel-detail/hotel-detail.component");
var angular_2 = require("nativescript-ui-listview/angular");
var routers = [
    {
        path: '',
        component: search_main_component_1.SearchMainComponent,
    },
    {
        path: 'search-result',
        component: search_result_component_1.SearchResultComponent,
    },
    {
        path: 'hotel-detail',
        component: hotel_detail_component_1.HotelDetailComponent,
    }
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
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                page_component_1.PageComponent,
                search_main_component_1.SearchMainComponent,
                search_result_component_1.SearchResultComponent,
                hotel_detail_component_1.HotelDetailComponent,
            ],
            exports: [
                page_component_1.PageComponent,
            ]
        })
    ], PageModule);
    return PageModule;
}());
exports.PageModule = PageModule;
