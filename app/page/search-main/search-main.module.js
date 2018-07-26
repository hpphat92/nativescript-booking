"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_angular_1 = require("nativescript-angular");
var core_1 = require("@angular/core");
var search_main_component_1 = require("~/page/search-main/search-main.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var routers = [
    {
        path: '',
        component: search_main_component_1.SearchMainComponent,
    },
];
var SearchMainModule = /** @class */ (function () {
    function SearchMainModule() {
    }
    SearchMainModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                search_main_component_1.SearchMainComponent
            ],
            exports: [],
        })
    ], SearchMainModule);
    return SearchMainModule;
}());
exports.SearchMainModule = SearchMainModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1haW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLW1haW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZEQUFnRTtBQUNoRSxzQ0FBeUM7QUFDekMsa0ZBQStFO0FBQy9FLGdGQUE4RTtBQUM5RSw0REFBZ0Y7QUFDaEYsNERBQWdGO0FBQ2hGLG9EQUFxRTtBQUVyRSxJQUFNLE9BQU8sR0FBVztJQUNwQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDJDQUFtQjtLQUNqQztDQUNKLENBQUM7QUFnQkY7SUFBQTtJQUNBLENBQUM7SUFEWSxnQkFBZ0I7UUFkNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLCtCQUF1QjtnQkFDdkIsK0NBQXdCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUM3QztZQUNELFlBQVksRUFBRTtnQkFDViwyQ0FBbUI7YUFDdEI7WUFDRCxPQUFPLEVBQUUsRUFDUjtTQUNKLENBQUM7T0FDVyxnQkFBZ0IsQ0FDNUI7SUFBRCx1QkFBQztDQUFBLEFBREQsSUFDQztBQURZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoTWFpbkNvbXBvbmVudCB9IGZyb20gJ34vcGFnZS9zZWFyY2gtbWFpbi9zZWFyY2gtbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCByb3V0ZXJzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBTZWFyY2hNYWluQ29tcG9uZW50LFxuICAgIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcnMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2VhcmNoTWFpbkNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaE1haW5Nb2R1bGUge1xufSJdfQ==