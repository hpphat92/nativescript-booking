"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var page_component_1 = require("~/page/page.component");
var nativescript_angular_1 = require("nativescript-angular");
var angular_1 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_2 = require("nativescript-ui-listview/angular");
var page_service_1 = require("~/page/page.service");
var routers = [
    {
        path: '',
        loadChildren: './page/search-main/search-main.module#SearchMainModule'
    },
    {
        path: 'search-result',
        loadChildren: './page/search-result/search-result.module#SearchResultModule'
    },
    {
        path: 'hotel-detail',
        loadChildren: './page/hotel-detail/hotel-detail.module#HotelDetailModule'
    },
    {
        path: 'confirm-booking',
        loadChildren: './page/confirm-booking/confirm-booking.module#ConfirmBookingModule'
    },
    {
        path: 'booking-detail/:id',
        loadChildren: './page/booking-detail/booking-detail.module#BookingDetailModule'
    },
    {
        path: 'review-booking',
        loadChildren: './page/review-booking/review-booking.module#ReviewBookingModule'
    },
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
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers),
            ],
            declarations: [
                page_component_1.PageComponent,
            ],
            exports: [
                page_component_1.PageComponent,
            ],
            providers: [
                page_service_1.default,
            ]
        })
    ], PageModule);
    return PageModule;
}());
exports.PageModule = PageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBZ0U7QUFDaEUsd0RBQXNEO0FBQ3RELDZEQUF1RjtBQUN2Riw0REFBZ0Y7QUFDaEYsb0RBQXFFO0FBQ3JFLGdGQUE4RTtBQUM5RSw0REFBZ0Y7QUFDaEYsb0RBQThDO0FBSTlDLElBQU0sT0FBTyxHQUFXO0lBQ3BCO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixZQUFZLEVBQUUsd0RBQXdEO0tBQ3pFO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsZUFBZTtRQUNyQixZQUFZLEVBQUUsOERBQThEO0tBQy9FO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsY0FBYztRQUNwQixZQUFZLEVBQUUsMkRBQTJEO0tBRTVFO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLFlBQVksRUFBRSxvRUFBb0U7S0FDckY7SUFDRDtRQUNJLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsWUFBWSxFQUFFLGlFQUFpRTtLQUNsRjtJQUNEO1FBQ0ksSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixZQUFZLEVBQUUsaUVBQWlFO0tBQ2xGO0NBQ0osQ0FBQztBQW9CRjtJQUFBO0lBQ0EsQ0FBQztJQURZLFVBQVU7UUFsQnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxzQ0FBNEI7Z0JBQzVCLHdDQUFrQjtnQkFDbEIsc0NBQTRCO2dCQUM1QiwrQkFBdUI7Z0JBQ3ZCLCtDQUF3QixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDN0M7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOEJBQWE7YUFDaEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asc0JBQVc7YUFDZDtTQUNKLENBQUM7T0FDVyxVQUFVLENBQ3RCO0lBQUQsaUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICd+L3BhZ2UvcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhcic7XG5pbXBvcnQgUGFnZVNlcnZpY2UgZnJvbSAnfi9wYWdlL3BhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmV2aWV3Qm9va2luZ01vZHVsZSB9IGZyb20gJ34vcGFnZS9yZXZpZXctYm9va2luZy9yZXZpZXctYm9va2luZy5tb2R1bGUnO1xuXG5jb25zdCByb3V0ZXJzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnLi9wYWdlL3NlYXJjaC1tYWluL3NlYXJjaC1tYWluLm1vZHVsZSNTZWFyY2hNYWluTW9kdWxlJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJy4vcGFnZS9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQubW9kdWxlI1NlYXJjaFJlc3VsdE1vZHVsZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ2hvdGVsLWRldGFpbCcsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJy4vcGFnZS9ob3RlbC1kZXRhaWwvaG90ZWwtZGV0YWlsLm1vZHVsZSNIb3RlbERldGFpbE1vZHVsZSdcblxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnY29uZmlybS1ib29raW5nJyxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnLi9wYWdlL2NvbmZpcm0tYm9va2luZy9jb25maXJtLWJvb2tpbmcubW9kdWxlI0NvbmZpcm1Cb29raW5nTW9kdWxlJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnYm9va2luZy1kZXRhaWwvOmlkJyxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnLi9wYWdlL2Jvb2tpbmctZGV0YWlsL2Jvb2tpbmctZGV0YWlsLm1vZHVsZSNCb29raW5nRGV0YWlsTW9kdWxlJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAncmV2aWV3LWJvb2tpbmcnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICcuL3BhZ2UvcmV2aWV3LWJvb2tpbmcvcmV2aWV3LWJvb2tpbmcubW9kdWxlI1Jldmlld0Jvb2tpbmdNb2R1bGUnXG4gICAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVycyksXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUGFnZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUGFnZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQYWdlU2VydmljZSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUge1xufSJdfQ==