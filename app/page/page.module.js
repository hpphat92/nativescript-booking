"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_component_1 = require("~/page/page.component");
var nativescript_angular_1 = require("nativescript-angular");
var angular_1 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var search_main_component_1 = require("~/page/search-main/search-main.component");
var routers = [
    {
        path: '',
        component: search_main_component_1.SearchMainComponent,
    }
];
var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                page_component_1.PageComponent,
                search_main_component_1.SearchMainComponent
            ],
            exports: [
                page_component_1.PageComponent,
            ]
        })
    ], PageModule);
    return PageModule;
}());
exports.PageModule = PageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6Qyx3REFBc0Q7QUFFdEQsNkRBQWdFO0FBQ2hFLDREQUFnRjtBQUNoRixvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLGtGQUErRTtBQUUvRSxJQUFNLE9BQU8sR0FBVztJQUNwQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDJDQUFtQjtLQUNqQztDQUNKLENBQUM7QUFpQkY7SUFBQTtJQUNBLENBQUM7SUFEWSxVQUFVO1FBZnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHNDQUE0QjtnQkFDNUIsK0JBQXVCO2dCQUN2QiwrQ0FBd0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2FBQzdDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2dCQUNiLDJDQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4QkFBYTthQUNoQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQ3RCO0lBQUQsaUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnfi9wYWdlL3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaE1haW5Db21wb25lbnQgfSBmcm9tICd+L3BhZ2Uvc2VhcmNoLW1haW4vc2VhcmNoLW1haW4uY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVyczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogU2VhcmNoTWFpbkNvbXBvbmVudCxcbiAgICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcnMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUGFnZUNvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoTWFpbkNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBQYWdlQ29tcG9uZW50LFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7XG59Il19