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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtGO0FBQ2xGLGdGQUE4RTtBQUM5RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLDJFQUE2RDtBQUM3RCw4REFBb0Y7QUFFcEYsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0Usa0RBQW1FO0FBQ25FLCtDQUF5QztBQUN6QyxvQ0FBbUU7QUFDbkUsNkRBQTZEO0FBQzdELDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYsb0RBQXFFO0FBRXJFLElBQUksTUFBTSxHQUFHO0lBQ1QsUUFBUSxFQUFFLGNBQU0sT0FBQSxzQkFBVyxDQUFDLE1BQU0sRUFBbEIsQ0FBa0I7SUFDbEMsT0FBTyxFQUFFLGNBQU0sT0FBQSxzQkFBVyxDQUFDLE1BQU0sRUFBbEIsQ0FBa0I7Q0FDcEMsQ0FBQztBQXFDRjtJQUhBOztNQUVFO0lBQ0Y7SUFDQSxDQUFDO0lBRFksU0FBUztRQW5DckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQix3Q0FBOEI7Z0JBQzlCLDZCQUFzQjtnQkFDdEIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLCtCQUF1QjtnQkFDdkIsOEJBQWdCO2dCQUNoQixlQUFTLENBQUMsT0FBTyxDQUFDO29CQUNkLE1BQU0sQ0FBQyxJQUFJLG1CQUFhLENBQUM7d0JBQ3JCLE9BQU8sRUFBRSxFQUFFO3FCQUNkLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUM7YUFHTDtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLGVBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUN4Qyw0Q0FBYztnQkFDZCxFQUFFLE9BQU8sRUFBRSw0QkFBcUIsRUFBRSxRQUFRLEVBQUUsNENBQXFCLEVBQUU7YUFDdEU7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgQXBwQ29uc3RhbnQgZnJvbSAnfi9hcHAuY29uc3RhbnQnO1xuaW1wb3J0IHsgQXBpTW9kdWxlLCBDb25maWd1cmF0aW9uLCBCQVNFX1BBVEggfSBmcm9tICd+L3NoYXJlZC9hcGknO1xuaW1wb3J0IHsgTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcblxubGV0IGRvbWFpbiA9IHtcbiAgICB0b1N0cmluZzogKCkgPT4gQXBwQ29uc3RhbnQuZG9tYWluLFxuICAgIHZhbHVlb2Y6ICgpID0+IEFwcENvbnN0YW50LmRvbWFpbixcbn07XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEFwaU1vZHVsZS5mb3JSb290KCgpOiBDb25maWd1cmF0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZmlndXJhdGlvbih7XG4gICAgICAgICAgICAgICAgYXBpS2V5czoge30sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIFBhZ2VNb2R1bGUsXG4gICAgICAgIC8vIEhvbWVNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBCQVNFX1BBVEgsIHVzZVZhbHVlOiBkb21haW4gfSxcbiAgICAgICAgQmFyY29kZVNjYW5uZXIsXG4gICAgICAgIHsgcHJvdmlkZTogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCB1c2VDbGFzczogTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH1cbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19