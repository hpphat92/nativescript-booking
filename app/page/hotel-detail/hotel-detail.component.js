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
        return this.bookingService.bookingDetailProperty(this.searchCriteria.id, moment(this.searchCriteria.arrivalDate, 'YYYY-MM-DD').format(app_constant_1.default.typeFormat.date), moment(this.searchCriteria.departureDate, 'YYYY-MM-DD').format(app_constant_1.default.typeFormat.date), this.searchCriteria.numberOfPAX)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWwtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdGVsLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsK0JBQWlDO0FBQ2pDLCtDQUF5QztBQUN6QyxpQ0FBK0I7QUFDL0Isb0NBQThDO0FBQzlDLDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFDckQsMkVBQTREO0FBQzVELG9EQUE4QztBQVE5QztJQWFJLDhCQUFvQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSnRELGlCQVlDO1FBWm1CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWYvQyxVQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVoQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUdyQiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFPOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBRWhDLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJ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QUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7aURBYzZCLHVCQUFjO1lBQ2IsZUFBTTtZQUNFLG9CQUFjO1lBQ2pCLHNCQUFXO1lBQ04sdUNBQWdCO09BakI3QyxvQkFBb0IsQ0F1R2hDO0lBQUQsMkJBQUM7Q0FBQSxBQXZHRCxJQXVHQztBQXZHWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBBcHBDb25zdGFudCBmcm9tICd+L2FwcC5jb25zdGFudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBCb29raW5nU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL2FwaSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuaW1wb3J0IHsgRmlsZVBob3RvdmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1maWxlLXBob3Rvdmlldyc7XG5pbXBvcnQgUGFnZVNlcnZpY2UgZnJvbSAnfi9wYWdlL3BhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvdGVsLWRldGFpbC1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvdGVsLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEhvdGVsRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb247XG4gICAgcHVibGljIHRpbWVzID0gXy50aW1lcztcbiAgICBwdWJsaWMgc2VhcmNoQ3JpdGVyaWE7XG4gICAgcHVibGljIGhvdGVsOiBhbnkgPSB7fTtcbiAgICBwdWJsaWMgcm9vbUxpc3QgPSBbXTtcbiAgICBwdWJsaWMgdG90YWxSYXRlcyA9IDA7XG4gICAgcHVibGljIHRvdGFsUHJpY2UgPSAwO1xuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4ID0gMDtcbiAgICBwdWJsaWMgZmlsZVBob3RvVmlldztcbiAgICBwdWJsaWMgY3VycmVudFNlbGVjdGVkUGhvdG87XG4gICAgcHVibGljIG51bWJlck9mU2VsZWN0QW1vdW50cyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJvb2tpbmdTZXJ2aWNlOiBCb29raW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYSA9IGUgfHwge307XG4gICAgICAgICAgICB0aGlzLmdldEhvdGVsRGV0YWlsKCkuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldyA9IG5ldyBGaWxlUGhvdG92aWV3KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEhvdGVsRGV0YWlsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib29raW5nU2VydmljZS5ib29raW5nRGV0YWlsUHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLnNlYXJjaENyaXRlcmlhLmlkLFxuICAgICAgICAgICAgbW9tZW50KHRoaXMuc2VhcmNoQ3JpdGVyaWEuYXJyaXZhbERhdGUsICdZWVlZLU1NLUREJykuZm9ybWF0KEFwcENvbnN0YW50LnR5cGVGb3JtYXQuZGF0ZSksXG4gICAgICAgICAgICBtb21lbnQodGhpcy5zZWFyY2hDcml0ZXJpYS5kZXBhcnR1cmVEYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdChBcHBDb25zdGFudC50eXBlRm9ybWF0LmRhdGUpLFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYS5udW1iZXJPZlBBWClcbiAgICAgICAgICAgIC5tYXAoKHJlc3A6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaG90ZWwgPSByZXNwLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFJhdGVzID0gdGhpcy5ob3RlbC5yb29tcy5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKyBiLnJhdGVUeXBlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb21MaXN0ID0gXy5mbGF0dGVuKF8ubWFwKHRoaXMuaG90ZWwucm9vbXMsIChyb29tKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5tYXAocm9vbS5yYXRlVHlwZXMsIChyYXRlVHlwZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVUeXBlLCBudW1Sb3dTcGFuOiAhaSA/IHJvb20ucmF0ZVR5cGVzLmxlbmd0aCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uICYmIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmIChnbG9iYWwuYW5kcm9pZCkge1xuICAgICAgICAgICAgKGdsb2JhbCBhcyBhbnkpLmdjKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2hvaWNlUm9vbShyb29tLCByb29tSXRlbSkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ2hvaWNlIEFtb3VudCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnU2VsZWN0IGhvdyBtYW55IHJvb21zIHlvdSBuZWVkJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgYWN0aW9uczogXy50aW1lcygyMSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfSAtICQkeyh2YWx1ZSAqIHJvb20ucmF0ZSkudG9GaXhlZCgyKX1gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcblxuICAgICAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnRvTG93ZXJDYXNlKCkgIT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudFNlbGVjdGVkID0gK3Jlc3VsdC5zcGxpdCgnLScpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICByb29tSXRlbS50ZXh0ID0gYW1vdW50U2VsZWN0ZWQgKyAnIHJvb20ocyknO1xuICAgICAgICAgICAgICAgIHJvb20uYW1vdW50U2VsZWN0ZWQgPSBhbW91bnRTZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRvdGFsUHJpY2UoKSB7XG4gICAgICAgIHRoaXMudG90YWxQcmljZSA9IF8ucmVkdWNlKHRoaXMuaG90ZWwucm9vbXMsIChtLCByb29tKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbSArIF8ucmVkdWNlKHJvb20ucmF0ZVR5cGVzLCAoYSwgYikgPT4gYSArIChiLmFtb3VudFNlbGVjdGVkIHx8IDApICogYi5yYXRlLCAwKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHZpZXdQaG90byhpbWdVcmwpIHtcbiAgICAgICAgLy8gRGlzcGxheSB0aGUgcGhvdG9cbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LnNob3coaW1nVXJsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29Cb29raW5nVGFiKCkge1xuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBib29rUm9vbXMoKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2NvbmZpcm0tYm9va2luZyddKTtcbiAgICB9XG59Il19