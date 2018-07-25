"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var signup_component_1 = require("~/page/signup/signup.component");
var SignupModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function SignupModule() {
    }
    SignupModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                signup_component_1.SignupComponent,
            ],
            exports: [
                signup_component_1.SignupComponent
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], SignupModule);
    return SignupModule;
}());
exports.SignupModule = SignupModule;
