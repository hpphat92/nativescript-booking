"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
var http_1 = require("nativescript-angular/http");
var app_constant_1 = require("~/app.constant");
var api_1 = require("~/shared/api");
var nativescript_angular_1 = require("nativescript-angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var domain = {
    toString: function () { return app_constant_1.default.domain; },
    valueof: function () { return app_constant_1.default.domain; },
};
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUISideDrawerModule,
                http_1.NativeScriptHttpModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                app_routing_1.AppRoutingModule,
                api_1.ApiModule.forRoot(function () {
                    return new api_1.Configuration({
                        apiKeys: {},
                    });
                }),
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            providers: [
                { provide: api_1.BASE_PATH, useValue: domain },
                nativescript_barcodescanner_1.BarcodeScanner,
                { provide: core_1.NgModuleFactoryLoader, useClass: nativescript_angular_1.NSModuleFactoryLoader }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
