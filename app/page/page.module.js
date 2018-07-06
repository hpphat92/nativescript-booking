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
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                page_component_1.PageComponent,
                search_main_component_1.SearchMainComponent,
                search_result_component_1.SearchResultComponent,
                hotel_detail_component_1.HotelDetailComponent
            ],
            exports: [
                page_component_1.PageComponent,
            ]
        })
    ], PageModule);
    return PageModule;
}());
exports.PageModule = PageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBeUM7QUFDekMsd0RBQXNEO0FBRXRELDZEQUFnRTtBQUNoRSw0REFBZ0Y7QUFDaEYsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSxrRkFBK0U7QUFDL0Usd0ZBQXFGO0FBQ3JGLHFGQUFrRjtBQUVsRixJQUFNLE9BQU8sR0FBVztJQUNwQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDJDQUFtQjtLQUNqQztJQUNEO1FBQ0ksSUFBSSxFQUFFLGVBQWU7UUFDckIsU0FBUyxFQUFFLCtDQUFxQjtLQUNuQztJQUNEO1FBQ0ksSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLDZDQUFvQjtLQUNsQztDQUNKLENBQUM7QUFtQkY7SUFBQTtJQUNBLENBQUM7SUFEWSxVQUFVO1FBakJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixzQ0FBNEI7Z0JBQzVCLCtCQUF1QjtnQkFDdkIsK0NBQXdCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUM3QztZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTtnQkFDYiwyQ0FBbUI7Z0JBQ25CLCtDQUFxQjtnQkFDckIsNkNBQW9CO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhCQUFhO2FBQ2hCO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FDdEI7SUFBRCxpQkFBQztDQUFBLEFBREQsSUFDQztBQURZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICd+L3BhZ2UvcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoTWFpbkNvbXBvbmVudCB9IGZyb20gJ34vcGFnZS9zZWFyY2gtbWFpbi9zZWFyY2gtbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0Q29tcG9uZW50IH0gZnJvbSAnfi9wYWdlL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG90ZWxEZXRhaWxDb21wb25lbnQgfSBmcm9tICd+L3BhZ2UvaG90ZWwtZGV0YWlsL2hvdGVsLWRldGFpbC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXJzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBTZWFyY2hNYWluQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgIGNvbXBvbmVudDogU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnaG90ZWwtZGV0YWlsJyxcbiAgICAgICAgY29tcG9uZW50OiBIb3RlbERldGFpbENvbXBvbmVudCxcbiAgICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcnMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUGFnZUNvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoTWFpbkNvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgICAgICBIb3RlbERldGFpbENvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBQYWdlQ29tcG9uZW50LFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7XG59Il19