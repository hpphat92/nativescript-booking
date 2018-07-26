"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_angular_1 = require("nativescript-angular");
var core_1 = require("@angular/core");
var search_result_component_1 = require("~/page/search-result/search-result.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var routers = [
    {
        path: '',
        component: search_result_component_1.SearchResultComponent,
    },
];
var SearchResultModule = /** @class */ (function () {
    function SearchResultModule() {
    }
    SearchResultModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                search_result_component_1.SearchResultComponent
            ],
            exports: [],
        })
    ], SearchResultModule);
    return SearchResultModule;
}());
exports.SearchResultModule = SearchResultModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtcmVzdWx0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw2REFBZ0U7QUFDaEUsc0NBQXlDO0FBQ3pDLHdGQUFxRjtBQUNyRixnRkFBOEU7QUFDOUUsNERBQWdGO0FBQ2hGLDREQUFnRjtBQUNoRixvREFBcUU7QUFFckUsSUFBTSxPQUFPLEdBQVc7SUFDcEI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSwrQ0FBcUI7S0FDbkM7Q0FDSixDQUFDO0FBZ0JGO0lBQUE7SUFDQSxDQUFDO0lBRFksa0JBQWtCO1FBZDlCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHNDQUE0QjtnQkFDNUIsc0NBQTRCO2dCQUM1QiwrQkFBdUI7Z0JBQ3ZCLCtDQUF3QixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDN0M7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFLEVBQ1I7U0FDSixDQUFDO09BQ1csa0JBQWtCLENBQzlCO0lBQUQseUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdENvbXBvbmVudCB9IGZyb20gJ34vcGFnZS9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcblxuY29uc3Qgcm91dGVyczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcnMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2VhcmNoUmVzdWx0Q29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0TW9kdWxlIHtcbn0iXX0=