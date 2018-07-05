"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
var http_1 = require("nativescript-angular/http");
var app_constant_1 = require("~/app.constant");
var api_1 = require("~/shared/api");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLDhEQUFvRjtBQUVwRiwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxrREFBbUU7QUFDbkUsK0NBQXlDO0FBQ3pDLG9DQUFtRTtBQUVuRSxJQUFJLE1BQU0sR0FBRztJQUNULFFBQVEsRUFBRSxjQUFNLE9BQUEsc0JBQVcsQ0FBQyxNQUFNLEVBQWxCLENBQWtCO0lBQ2xDLE9BQU8sRUFBRSxjQUFNLE9BQUEsc0JBQVcsQ0FBQyxNQUFNLEVBQWxCLENBQWtCO0NBQ3BDLENBQUM7QUFnQ0Y7SUFIQTs7TUFFRTtJQUNGO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUE5QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsd0NBQThCO2dCQUM5Qiw2QkFBc0I7Z0JBQ3RCLDhCQUFnQjtnQkFDaEIsZUFBUyxDQUFDLE9BQU8sQ0FBQztvQkFDZCxNQUFNLENBQUMsSUFBSSxtQkFBYSxDQUFDO3dCQUNyQixPQUFPLEVBQUUsRUFBRTtxQkFDZCxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDO2FBR0w7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxlQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUMzQztZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgQXBwQ29uc3RhbnQgZnJvbSAnfi9hcHAuY29uc3RhbnQnO1xuaW1wb3J0IHsgQXBpTW9kdWxlLCBDb25maWd1cmF0aW9uLCBCQVNFX1BBVEggfSBmcm9tICd+L3NoYXJlZC9hcGknO1xuXG5sZXQgZG9tYWluID0ge1xuICAgIHRvU3RyaW5nOiAoKSA9PiBBcHBDb25zdGFudC5kb21haW4sXG4gICAgdmFsdWVvZjogKCkgPT4gQXBwQ29uc3RhbnQuZG9tYWluLFxufTtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBBcGlNb2R1bGUuZm9yUm9vdCgoKTogQ29uZmlndXJhdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbmZpZ3VyYXRpb24oe1xuICAgICAgICAgICAgICAgIGFwaUtleXM6IHt9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICAvLyBQYWdlTW9kdWxlLFxuICAgICAgICAvLyBIb21lTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogQkFTRV9QQVRILCB1c2VWYWx1ZTogZG9tYWluIH0sXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiJdfQ==