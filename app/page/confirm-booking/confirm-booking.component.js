"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
require("rxjs/add/operator/map");
var api_1 = require("~/shared/api");
var page_service_1 = require("~/page/page.service");
var ConfirmBookingComponent = /** @class */ (function () {
    function ConfirmBookingComponent(route, router, bookingService, pageService, routerExtensions) {
        this.route = route;
        this.router = router;
        this.bookingService = bookingService;
        this.pageService = pageService;
        this.routerExtensions = routerExtensions;
        console.log(this.pageService.selectedBookingInfo);
    }
    ConfirmBookingComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ConfirmBookingComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'confirm-booking-component',
            moduleId: module.id,
            templateUrl: './confirm-booking.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            api_1.BookingService,
            page_service_1.default,
            nativescript_angular_1.RouterExtensions])
    ], ConfirmBookingComponent);
    return ConfirmBookingComponent;
}());
exports.ConfirmBookingComponent = ConfirmBookingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1ib29raW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm0tYm9va2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9GO0FBQ3BGLDBDQUF5RDtBQUN6RCw2REFBeUU7QUFHekUsaUNBQStCO0FBQy9CLG9DQUE4QztBQUM5QyxvREFBOEM7QUFROUM7SUFFSSxpQ0FBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLGdCQUFrQztRQUpsQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLHdDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBYlEsdUJBQXVCO1FBTG5DLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsa0NBQWtDO1NBQ2xELENBQUM7aURBRzZCLHVCQUFjO1lBQ2IsZUFBTTtZQUNFLG9CQUFjO1lBQ2pCLHNCQUFXO1lBQ04sdUNBQWdCO09BTjdDLHVCQUF1QixDQWNuQztJQUFELDhCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEFwcENvbnN0YW50IGZyb20gJ34vYXBwLmNvbnN0YW50JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IEJvb2tpbmdTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvYXBpJztcbmltcG9ydCBQYWdlU2VydmljZSBmcm9tICd+L3BhZ2UvcGFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZpbGVQaG90b3ZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtZmlsZS1waG90b3ZpZXcnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbmZpcm0tYm9va2luZy1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tYm9va2luZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1Cb29raW5nQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBib29raW5nU2VydmljZTogQm9va2luZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYWdlU2VydmljZS5zZWxlY3RlZEJvb2tpbmdJbmZvKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxufSJdfQ==