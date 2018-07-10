"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var moment = require("moment");
var app_constant_1 = require("~/app.constant");
require("rxjs/add/operator/map");
var api_1 = require("~/shared/api");
var _ = require("lodash");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var HotelDetailComponent = /** @class */ (function () {
    function HotelDetailComponent(route, router, bookingService, routerExtensions) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.bookingService = bookingService;
        this.routerExtensions = routerExtensions;
        this.hotel = {};
        this.roomList = [];
        this.totalRates = 0;
        this.numberOfSelectAmounts = [];
        this.listRoomValue = ['1 Room', '2 Rooms', '3 Rooms'];
        this.subscription = this.route.queryParams.subscribe(function (e) {
            _this.searchCriteria = e || {};
            _this.getHotelDetail().subscribe(function () {
            });
        });
    }
    HotelDetailComponent.prototype.ngOnInit = function () {
    };
    HotelDetailComponent.prototype.getHotelDetail = function () {
        var _this = this;
        return this.bookingService.bookingDetailProperty(this.searchCriteria.id, moment(+this.searchCriteria.arrivalDate).format(app_constant_1.default.typeFormat.date), moment(+this.searchCriteria.departureDate).format(app_constant_1.default.typeFormat.date), this.searchCriteria.numberOfPAX)
            .map(function (resp) {
            _this.hotel = resp.data;
            _this.totalRates = _this.hotel.rooms.reduce(function (a, b) {
                return a + b.rateTypes.length;
            }, 0);
            _this.roomList = _.flatten(_.map(_this.hotel.rooms, function (room) {
                return _.map(room.rateTypes, function (rateType, i) {
                    return {
                        room: room,
                        rateType: rateType, numRowSpan: !i ? room.rateTypes.length : 0,
                    };
                });
            }));
        });
    };
    HotelDetailComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    HotelDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription && this.subscription.unsubscribe();
    };
    HotelDetailComponent.prototype.showPhoto = function (photo) {
        this.currentSelectedPhoto = photo;
    };
    HotelDetailComponent.prototype.choiceRoom = function (room) {
        var options = {
            title: "Race selection",
            message: "Choose your race",
            cancelButtonText: "Cancel",
            actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
        };
        dialogs_1.action(options).then(function (result) {
            console.log(result);
        });
    };
    HotelDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'hotel-detail-component',
            moduleId: module.id,
            templateUrl: './hotel-detail.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            api_1.BookingService,
            nativescript_angular_1.RouterExtensions])
    ], HotelDetailComponent);
    return HotelDetailComponent;
}());
exports.HotelDetailComponent = HotelDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWwtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdGVsLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9GO0FBQ3BGLDBDQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsK0JBQWlDO0FBQ2pDLCtDQUF5QztBQUN6QyxpQ0FBK0I7QUFDL0Isb0NBQThDO0FBQzlDLDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFPckQ7SUFVSSw4QkFBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGNBQThCLEVBQzlCLGdCQUFrQztRQUh0RCxpQkFVQztRQVZtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFWL0MsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUVmLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMzQixrQkFBYSxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQU1wRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFFaEMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVNLDZDQUFjLEdBQXJCO1FBQUEsaUJBc0JDO1FBckJHLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFDdEIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQzVFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUM5RSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FDbEM7YUFDSSxHQUFHLENBQUMsVUFBQyxJQUFTO1lBQ1gsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUE7WUFDakMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ04sS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBQyxJQUFJO2dCQUMvQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JDLE1BQU0sQ0FBQzt3QkFDSCxJQUFJLE1BQUE7d0JBQ0osUUFBUSxVQUFBLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdkQsQ0FBQTtnQkFDTCxDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFTSxxQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVNLHdDQUFTLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRU0seUNBQVUsR0FBakIsVUFBa0IsSUFBSTtRQUNsQixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUM7U0FDdkQsQ0FBQztRQUVGLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhFUSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQztpREFXNkIsdUJBQWM7WUFDYixlQUFNO1lBQ0Usb0JBQWM7WUFDWix1Q0FBZ0I7T0FiN0Msb0JBQW9CLENBeUVoQztJQUFELDJCQUFDO0NBQUEsQUF6RUQsSUF5RUM7QUF6RVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBBcHBDb25zdGFudCBmcm9tICd+L2FwcC5jb25zdGFudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBCb29raW5nU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL2FwaSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvdGVsLWRldGFpbC1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvdGVsLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEhvdGVsRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb247XG4gICAgcHVibGljIHNlYXJjaENyaXRlcmlhO1xuICAgIHB1YmxpYyBob3RlbDogYW55ID0ge307XG4gICAgcHVibGljIHJvb21MaXN0ID0gW107XG4gICAgcHVibGljIHRvdGFsUmF0ZXMgPSAwO1xuICAgIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRQaG90bztcbiAgICBwdWJsaWMgbnVtYmVyT2ZTZWxlY3RBbW91bnRzID0gW107XG4gICAgcHVibGljIGxpc3RSb29tVmFsdWUgPSBbJzEgUm9vbScsICcyIFJvb21zJywgJzMgUm9vbXMnXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBib29raW5nU2VydmljZTogQm9va2luZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQ3JpdGVyaWEgPSBlIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5nZXRIb3RlbERldGFpbCgpLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEhvdGVsRGV0YWlsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib29raW5nU2VydmljZS5ib29raW5nRGV0YWlsUHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLnNlYXJjaENyaXRlcmlhLmlkLFxuICAgICAgICAgICAgbW9tZW50KCt0aGlzLnNlYXJjaENyaXRlcmlhLmFycml2YWxEYXRlKS5mb3JtYXQoQXBwQ29uc3RhbnQudHlwZUZvcm1hdC5kYXRlKSxcbiAgICAgICAgICAgIG1vbWVudCgrdGhpcy5zZWFyY2hDcml0ZXJpYS5kZXBhcnR1cmVEYXRlKS5mb3JtYXQoQXBwQ29uc3RhbnQudHlwZUZvcm1hdC5kYXRlKSxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQ3JpdGVyaWEubnVtYmVyT2ZQQVhcbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3RlbCA9IHJlc3AuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUmF0ZXMgPSB0aGlzLmhvdGVsLnJvb21zLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSArIGIucmF0ZVR5cGVzLmxlbmd0aFxuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIHRoaXMucm9vbUxpc3QgPSBfLmZsYXR0ZW4oXy5tYXAodGhpcy5ob3RlbC5yb29tcywgKHJvb20pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfLm1hcChyb29tLnJhdGVUeXBlcywgKHJhdGVUeXBlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZVR5cGUsIG51bVJvd1NwYW46ICFpID8gcm9vbS5yYXRlVHlwZXMubGVuZ3RoIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gJiYgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1Bob3RvKHBob3RvKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkUGhvdG8gPSBwaG90bztcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hvaWNlUm9vbShyb29tKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiUmFjZSBzZWxlY3Rpb25cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgcmFjZVwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcIkh1bWFuXCIsIFwiRWxmXCIsIFwiRHdhcmZcIiwgXCJPcmNcIiwgXCJVbmljb3JuXCJdXG4gICAgICAgIH07XG5cbiAgICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==