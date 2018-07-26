"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_angular_1 = require("nativescript-angular");
var core_1 = require("@angular/core");
var hotel_detail_component_1 = require("~/page/hotel-detail/hotel-detail.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var routers = [
    {
        path: '',
        component: hotel_detail_component_1.HotelDetailComponent,
    },
];
var HotelDetailModule = /** @class */ (function () {
    function HotelDetailModule() {
    }
    HotelDetailModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                hotel_detail_component_1.HotelDetailComponent
            ],
            exports: [],
        })
    ], HotelDetailModule);
    return HotelDetailModule;
}());
exports.HotelDetailModule = HotelDetailModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWwtZGV0YWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdGVsLWRldGFpbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkRBQWdFO0FBQ2hFLHNDQUF5QztBQUN6QyxxRkFBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYsb0RBQXFFO0FBRXJFLElBQU0sT0FBTyxHQUFXO0lBQ3BCO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsNkNBQW9CO0tBQ2xDO0NBQ0osQ0FBQztBQWdCRjtJQUFBO0lBQ0EsQ0FBQztJQURZLGlCQUFpQjtRQWQ3QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixzQ0FBNEI7Z0JBQzVCLHNDQUE0QjtnQkFDNUIsK0JBQXVCO2dCQUN2QiwrQ0FBd0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2FBQzdDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDZDQUFvQjthQUN2QjtZQUNELE9BQU8sRUFBRSxFQUNSO1NBQ0osQ0FBQztPQUNXLGlCQUFpQixDQUM3QjtJQUFELHdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3RlbERldGFpbENvbXBvbmVudCB9IGZyb20gJ34vcGFnZS9ob3RlbC1kZXRhaWwvaG90ZWwtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5cbmNvbnN0IHJvdXRlcnM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEhvdGVsRGV0YWlsQ29tcG9uZW50LFxuICAgIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcnMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG90ZWxEZXRhaWxDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBIb3RlbERldGFpbE1vZHVsZSB7XG59Il19