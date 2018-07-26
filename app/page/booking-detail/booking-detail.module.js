"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var booking_detail_component_1 = require("~/page/booking-detail/booking-detail.component");
var nativescript_angular_1 = require("nativescript-angular");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var forms_1 = require("nativescript-angular/forms");
var routers = [
    {
        path: '',
        component: booking_detail_component_1.BookingDetailComponent,
    },
];
var BookingDetailModule = /** @class */ (function () {
    function BookingDetailModule() {
    }
    BookingDetailModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(routers)
            ],
            declarations: [
                booking_detail_component_1.BookingDetailComponent
            ],
            exports: [],
        })
    ], BookingDetailModule);
    return BookingDetailModule;
}());
exports.BookingDetailModule = BookingDetailModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy1kZXRhaWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9va2luZy1kZXRhaWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJGQUF3RjtBQUN4Riw2REFBZ0U7QUFDaEUsc0NBQXlDO0FBQ3pDLGdGQUE4RTtBQUM5RSw0REFBZ0Y7QUFDaEYsNERBQWdGO0FBQ2hGLG9EQUFxRTtBQUVyRSxJQUFNLE9BQU8sR0FBVztJQUNwQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGlEQUFzQjtLQUNwQztDQUNKLENBQUM7QUFnQkY7SUFBQTtJQUNBLENBQUM7SUFEWSxtQkFBbUI7UUFkL0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLCtCQUF1QjtnQkFDdkIsK0NBQXdCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUM3QztZQUNELFlBQVksRUFBRTtnQkFDVixpREFBc0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsRUFDUjtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FDL0I7SUFBRCwwQkFBQztDQUFBLEFBREQsSUFDQztBQURZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCb29raW5nRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnfi9wYWdlL2Jvb2tpbmctZGV0YWlsL2Jvb2tpbmctZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCByb3V0ZXJzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBCb29raW5nRGV0YWlsQ29tcG9uZW50LFxuICAgIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcnMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQm9va2luZ0RldGFpbENvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdEZXRhaWxNb2R1bGUge1xufSJdfQ==