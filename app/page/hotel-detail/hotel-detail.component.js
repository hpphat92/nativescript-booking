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
var nativescript_file_photoview_1 = require("nativescript-file-photoview");
var page_service_1 = require("~/page/page.service");
var HotelDetailComponent = /** @class */ (function () {
    function HotelDetailComponent(route, router, bookingService, pageService, routerExtensions) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.bookingService = bookingService;
        this.pageService = pageService;
        this.routerExtensions = routerExtensions;
        this.times = _.times;
        this.hotel = {};
        this.roomList = [];
        this.totalRates = 0;
        this.totalPrice = 0;
        this.tabSelectedIndex = 0;
        this.numberOfSelectAmounts = [];
        this.subscription = this.route.queryParams.subscribe(function (e) {
            _this.searchCriteria = e || {};
            _this.getHotelDetail().subscribe(function () {
            });
        });
        this.filePhotoView = new nativescript_file_photoview_1.FilePhotoview();
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
        if (global.android) {
            global.gc();
        }
    };
    HotelDetailComponent.prototype.choiceRoom = function (room, roomItem) {
        var _this = this;
        var options = {
            title: 'Choice Amount',
            message: 'Select how many rooms you need',
            cancelButtonText: 'Cancel',
            actions: _.times(21, function (value) {
                return value + " - $" + (value * room.rate).toFixed(2);
            })
        };
        dialogs_1.action(options).then(function (result) {
            if (result.toLowerCase() !== 'cancel') {
                var amountSelected = +result.split('-')[0].trim();
                roomItem.text = amountSelected + ' room(s)';
                room.amountSelected = amountSelected;
                _this.updateTotalPrice();
            }
        });
    };
    HotelDetailComponent.prototype.updateTotalPrice = function () {
        this.totalPrice = _.reduce(this.hotel.rooms, function (m, room) {
            return m + _.reduce(room.rateTypes, function (a, b) { return a + (b.amountSelected || 0) * b.rate; }, 0);
        }, 0);
    };
    HotelDetailComponent.prototype.viewPhoto = function (imgUrl) {
        // Display the photo
        this.filePhotoView.show(imgUrl);
    };
    HotelDetailComponent.prototype.goBookingTab = function () {
        this.tabSelectedIndex = 2;
    };
    HotelDetailComponent.prototype.bookRooms = function () {
        debugger;
        this.router.navigate(['confirm-booking']);
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
            page_service_1.default,
            nativescript_angular_1.RouterExtensions])
    ], HotelDetailComponent);
    return HotelDetailComponent;
}());
exports.HotelDetailComponent = HotelDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWwtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdGVsLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsK0JBQWlDO0FBQ2pDLCtDQUF5QztBQUN6QyxpQ0FBK0I7QUFDL0Isb0NBQThDO0FBQzlDLDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFDckQsMkVBQTREO0FBQzVELG9EQUE4QztBQU85QztJQWFJLDhCQUFvQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSnRELGlCQVlDO1FBWm1CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWYvQyxVQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVoQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUdyQiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFPOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBRWhDLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJ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RUFBRSwrQkFBK0I7U0FDL0MsQ0FBQztpREFjNkIsdUJBQWM7WUFDYixlQUFNO1lBQ0Usb0JBQWM7WUFDakIsc0JBQVc7WUFDTix1Q0FBZ0I7T0FqQjdDLG9CQUFvQixDQXdHaEM7SUFBRCwyQkFBQztDQUFBLEFBeEdELElBd0dDO0FBeEdZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEFwcENvbnN0YW50IGZyb20gJ34vYXBwLmNvbnN0YW50JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IEJvb2tpbmdTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvYXBpJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBGaWxlUGhvdG92aWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZpbGUtcGhvdG92aWV3JztcbmltcG9ydCBQYWdlU2VydmljZSBmcm9tICd+L3BhZ2UvcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob3RlbC1kZXRhaWwtY29tcG9uZW50JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob3RlbC1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIb3RlbERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9uO1xuICAgIHB1YmxpYyB0aW1lcyA9IF8udGltZXM7XG4gICAgcHVibGljIHNlYXJjaENyaXRlcmlhO1xuICAgIHB1YmxpYyBob3RlbDogYW55ID0ge307XG4gICAgcHVibGljIHJvb21MaXN0ID0gW107XG4gICAgcHVibGljIHRvdGFsUmF0ZXMgPSAwO1xuICAgIHB1YmxpYyB0b3RhbFByaWNlID0gMDtcbiAgICBwdWJsaWMgdGFiU2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgcHVibGljIGZpbGVQaG90b1ZpZXc7XG4gICAgcHVibGljIGN1cnJlbnRTZWxlY3RlZFBob3RvO1xuICAgIHB1YmxpYyBudW1iZXJPZlNlbGVjdEFtb3VudHMgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBib29raW5nU2VydmljZTogQm9va2luZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQ3JpdGVyaWEgPSBlIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5nZXRIb3RlbERldGFpbCgpLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcgPSBuZXcgRmlsZVBob3RvdmlldygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIb3RlbERldGFpbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9va2luZ1NlcnZpY2UuYm9va2luZ0RldGFpbFByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYS5pZCxcbiAgICAgICAgICAgIG1vbWVudCgrdGhpcy5zZWFyY2hDcml0ZXJpYS5hcnJpdmFsRGF0ZSkuZm9ybWF0KEFwcENvbnN0YW50LnR5cGVGb3JtYXQuZGF0ZSksXG4gICAgICAgICAgICBtb21lbnQoK3RoaXMuc2VhcmNoQ3JpdGVyaWEuZGVwYXJ0dXJlRGF0ZSkuZm9ybWF0KEFwcENvbnN0YW50LnR5cGVGb3JtYXQuZGF0ZSksXG4gICAgICAgICAgICB0aGlzLnNlYXJjaENyaXRlcmlhLm51bWJlck9mUEFYXG4gICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoKHJlc3A6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaG90ZWwgPSByZXNwLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFJhdGVzID0gdGhpcy5ob3RlbC5yb29tcy5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKyBiLnJhdGVUeXBlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb21MaXN0ID0gXy5mbGF0dGVuKF8ubWFwKHRoaXMuaG90ZWwucm9vbXMsIChyb29tKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5tYXAocm9vbS5yYXRlVHlwZXMsIChyYXRlVHlwZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVUeXBlLCBudW1Sb3dTcGFuOiAhaSA/IHJvb20ucmF0ZVR5cGVzLmxlbmd0aCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uICYmIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmIChnbG9iYWwuYW5kcm9pZCkge1xuICAgICAgICAgICAgKGdsb2JhbCBhcyBhbnkpLmdjKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2hvaWNlUm9vbShyb29tLCByb29tSXRlbSkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ2hvaWNlIEFtb3VudCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnU2VsZWN0IGhvdyBtYW55IHJvb21zIHlvdSBuZWVkJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgYWN0aW9uczogXy50aW1lcygyMSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfSAtICQkeyh2YWx1ZSAqIHJvb20ucmF0ZSkudG9GaXhlZCgyKX1gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcblxuICAgICAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnRvTG93ZXJDYXNlKCkgIT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudFNlbGVjdGVkID0gK3Jlc3VsdC5zcGxpdCgnLScpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICByb29tSXRlbS50ZXh0ID0gYW1vdW50U2VsZWN0ZWQgKyAnIHJvb20ocyknO1xuICAgICAgICAgICAgICAgIHJvb20uYW1vdW50U2VsZWN0ZWQgPSBhbW91bnRTZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRvdGFsUHJpY2UoKSB7XG4gICAgICAgIHRoaXMudG90YWxQcmljZSA9IF8ucmVkdWNlKHRoaXMuaG90ZWwucm9vbXMsIChtLCByb29tKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbSArIF8ucmVkdWNlKHJvb20ucmF0ZVR5cGVzLCAoYSwgYikgPT4gYSArIChiLmFtb3VudFNlbGVjdGVkIHx8IDApICogYi5yYXRlLCAwKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpZXdQaG90byhpbWdVcmwpIHtcbiAgICAgICAgLy8gRGlzcGxheSB0aGUgcGhvdG9cbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LnNob3coaW1nVXJsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29Cb29raW5nVGFiKCkge1xuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBib29rUm9vbXMoKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NvbmZpcm0tYm9va2luZyddKTtcbiAgICB9XG59Il19