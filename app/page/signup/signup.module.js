"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signup_component_1 = require("~/page/signup/signup.component");
var SignupModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function SignupModule() {
    }
    SignupModule = __decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsbUVBQWlFO0FBYWpFO0lBSEE7O01BRUU7SUFDRjtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFYeEIsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGtDQUFlO2FBQ2xCO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICd+L3BhZ2Uvc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTaWdudXBDb21wb25lbnQsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFNpZ251cENvbXBvbmVudFxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBTaWdudXBNb2R1bGUgeyB9Il19