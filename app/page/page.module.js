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
var angular_2 = require("nativescript-ui-listview/angular");
var confirm_booking_component_1 = require("~/page/confirm-booking/confirm-booking.component");
var page_service_1 = require("~/page/page.service");
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
    },
    {
        path: 'confirm-booking',
        component: confirm_booking_component_1.ConfirmBookingComponent,
    }
];
var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                angular_2.NativeScriptUIListViewModule,
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                page_component_1.PageComponent,
                search_main_component_1.SearchMainComponent,
                search_result_component_1.SearchResultComponent,
                hotel_detail_component_1.HotelDetailComponent,
                confirm_booking_component_1.ConfirmBookingComponent
            ],
            exports: [
                page_component_1.PageComponent,
            ],
            providers: [page_service_1.default]
        })
    ], PageModule);
    return PageModule;
}());
exports.PageModule = PageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBeUM7QUFDekMsd0RBQXNEO0FBRXRELDZEQUFnRTtBQUNoRSw0REFBZ0Y7QUFDaEYsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSxrRkFBK0U7QUFDL0Usd0ZBQXFGO0FBQ3JGLHFGQUFrRjtBQUNsRiw0REFBZ0Y7QUFDaEYsOEZBQTJGO0FBQzNGLG9EQUE4QztBQUU5QyxJQUFNLE9BQU8sR0FBVztJQUNwQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDJDQUFtQjtLQUNqQztJQUNEO1FBQ0ksSUFBSSxFQUFFLGVBQWU7UUFDckIsU0FBUyxFQUFFLCtDQUFxQjtLQUNuQztJQUNEO1FBQ0ksSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLDZDQUFvQjtLQUNsQztJQUNEO1FBQ0ksSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixTQUFTLEVBQUUsbURBQXVCO0tBQ3JDO0NBQ0osQ0FBQztBQXNCRjtJQUFBO0lBQ0EsQ0FBQztJQURZLFVBQVU7UUFwQnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxzQ0FBNEI7Z0JBQzVCLHdDQUFrQjtnQkFDbEIsc0NBQTRCO2dCQUM1QiwrQkFBdUI7Z0JBQ3ZCLCtDQUF3QixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDN0M7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7Z0JBQ2IsMkNBQW1CO2dCQUNuQiwrQ0FBcUI7Z0JBQ3JCLDZDQUFvQjtnQkFDcEIsbURBQXVCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhCQUFhO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFLENBQUMsc0JBQVcsQ0FBQztTQUMzQixDQUFDO09BQ1csVUFBVSxDQUN0QjtJQUFELGlCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJ34vcGFnZS9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hNYWluQ29tcG9uZW50IH0gZnJvbSAnfi9wYWdlL3NlYXJjaC1tYWluL3NlYXJjaC1tYWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRDb21wb25lbnQgfSBmcm9tICd+L3BhZ2Uvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb3RlbERldGFpbENvbXBvbmVudCB9IGZyb20gJ34vcGFnZS9ob3RlbC1kZXRhaWwvaG90ZWwtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29uZmlybUJvb2tpbmdDb21wb25lbnQgfSBmcm9tICd+L3BhZ2UvY29uZmlybS1ib29raW5nL2NvbmZpcm0tYm9va2luZy5jb21wb25lbnQnO1xuaW1wb3J0IFBhZ2VTZXJ2aWNlIGZyb20gJ34vcGFnZS9wYWdlLnNlcnZpY2UnO1xuXG5jb25zdCByb3V0ZXJzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBTZWFyY2hNYWluQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgIGNvbXBvbmVudDogU2VhcmNoUmVzdWx0Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnaG90ZWwtZGV0YWlsJyxcbiAgICAgICAgY29tcG9uZW50OiBIb3RlbERldGFpbENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ2NvbmZpcm0tYm9va2luZycsXG4gICAgICAgIGNvbXBvbmVudDogQ29uZmlybUJvb2tpbmdDb21wb25lbnQsXG4gICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXJzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBhZ2VDb21wb25lbnQsXG4gICAgICAgIFNlYXJjaE1haW5Db21wb25lbnQsXG4gICAgICAgIFNlYXJjaFJlc3VsdENvbXBvbmVudCxcbiAgICAgICAgSG90ZWxEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIENvbmZpcm1Cb29raW5nQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFBhZ2VDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtQYWdlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7XG59Il19