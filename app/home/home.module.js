"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var home_component_1 = require("~/home/home.component");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var routers = [
    {
        path: '',
        component: home_component_1.HomeComponent
    }
];
var HomeModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function HomeModule() {
    }
    HomeModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUISideDrawerModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                home_component_1.HomeComponent
            ],
            exports: []
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
