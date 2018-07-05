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
var routers = [
    {
        path: '',
        component: search_main_component_1.SearchMainComponent,
    },
    {
        path: 'search-result',
        component: search_result_component_1.SearchResultComponent,
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
                search_result_component_1.SearchResultComponent
            ],
            exports: [
                page_component_1.PageComponent,
            ]
        })
    ], PageModule);
    return PageModule;
}());
exports.PageModule = PageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBeUM7QUFDekMsd0RBQXNEO0FBRXRELDZEQUFnRTtBQUNoRSw0REFBZ0Y7QUFDaEYsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSxrRkFBK0U7QUFDL0Usd0ZBQXFGO0FBRXJGLElBQU0sT0FBTyxHQUFXO0lBQ3BCO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsMkNBQW1CO0tBQ2pDO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsZUFBZTtRQUNyQixTQUFTLEVBQUUsK0NBQXFCO0tBQ25DO0NBQ0osQ0FBQztBQWtCRjtJQUFBO0lBQ0EsQ0FBQztJQURZLFVBQVU7UUFoQnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHNDQUE0QjtnQkFDNUIsK0JBQXVCO2dCQUN2QiwrQ0FBd0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2FBQzdDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2dCQUNiLDJDQUFtQjtnQkFDbkIsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhCQUFhO2FBQ2hCO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FDdEI7SUFBRCxpQkFBQztDQUFBLEFBREQsSUFDQztBQURZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICd+L3BhZ2UvcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoTWFpbkNvbXBvbmVudCB9IGZyb20gJ34vcGFnZS9zZWFyY2gtbWFpbi9zZWFyY2gtbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0Q29tcG9uZW50IH0gZnJvbSAnfi9wYWdlL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXJzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBTZWFyY2hNYWluQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgIGNvbXBvbmVudDogU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVycylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQYWdlQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hNYWluQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hSZXN1bHRDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUGFnZUNvbXBvbmVudCxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUge1xufSJdfQ==