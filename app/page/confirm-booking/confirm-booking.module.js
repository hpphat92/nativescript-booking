"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var nativescript_angular_1 = require("nativescript-angular");
var core_1 = require("@angular/core");
var confirm_booking_component_1 = require("~/page/confirm-booking/confirm-booking.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var routers = [
    {
        path: '',
        component: confirm_booking_component_1.ConfirmBookingComponent,
    },
];
var ConfirmBookingModule = /** @class */ (function () {
    function ConfirmBookingModule() {
    }
    ConfirmBookingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                confirm_booking_component_1.ConfirmBookingComponent
            ],
            exports: [],
        })
    ], ConfirmBookingModule);
    return ConfirmBookingModule;
}());
exports.ConfirmBookingModule = ConfirmBookingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1ib29raW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm0tYm9va2luZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkRBQWdFO0FBQ2hFLHNDQUF5QztBQUN6Qyw4RkFBMkY7QUFDM0YsZ0ZBQThFO0FBQzlFLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYsb0RBQXFFO0FBRXJFLElBQU0sT0FBTyxHQUFXO0lBQ3BCO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsbURBQXVCO0tBQ3JDO0NBQ0osQ0FBQztBQWdCRjtJQUFBO0lBQ0EsQ0FBQztJQURZLG9CQUFvQjtRQWRoQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixzQ0FBNEI7Z0JBQzVCLHNDQUE0QjtnQkFDNUIsK0JBQXVCO2dCQUN2QiwrQ0FBd0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2FBQzdDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG1EQUF1QjthQUMxQjtZQUNELE9BQU8sRUFBRSxFQUNSO1NBQ0osQ0FBQztPQUNXLG9CQUFvQixDQUNoQztJQUFELDJCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maXJtQm9va2luZ0NvbXBvbmVudCB9IGZyb20gJ34vcGFnZS9jb25maXJtLWJvb2tpbmcvY29uZmlybS1ib29raW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5cbmNvbnN0IHJvdXRlcnM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IENvbmZpcm1Cb29raW5nQ29tcG9uZW50LFxuICAgIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcnMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29uZmlybUJvb2tpbmdDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtQm9va2luZ01vZHVsZSB7XG59Il19