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
var platform_1 = require("platform");
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
        var fn = this.bookingService.bookingDetailProperty(this.searchCriteria.id, this.searchCriteria.arrivalDate, this.searchCriteria.departureDate, this.searchCriteria.numberOfPAX);
        if (platform_1.isAndroid) {
            fn = this.bookingService.bookingDetailProperty(this.searchCriteria.id, moment(this.searchCriteria.arrivalDate, 'YYYY-MM-DD').format(app_constant_1.default.typeFormat.date), moment(this.searchCriteria.departureDate, 'YYYY-MM-DD').format(app_constant_1.default.typeFormat.date), this.searchCriteria.numberOfPAX);
        }
        return fn.map(function (resp) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWwtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdGVsLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsK0JBQWlDO0FBQ2pDLCtDQUF5QztBQUN6QyxpQ0FBK0I7QUFDL0Isb0NBQThDO0FBQzlDLDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFDckQsMkVBQTREO0FBQzVELG9EQUE4QztBQUM5QyxxQ0FBNEM7QUFPNUM7SUFhSSw4QkFBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLGdCQUFrQztRQUp0RCxpQkFZQztRQVptQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFmL0MsVUFBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFaEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFHckIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBTzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUVoQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxD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Q0FBQztJQUNwQyxDQUFDO0lBRU0sMkNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSx3Q0FBUyxHQUFoQjtRQUNJLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUEzR1Esb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7aURBYzZCLHVCQUFjO1lBQ2IsZUFBTTtZQUNFLG9CQUFjO1lBQ2pCLHNCQUFXO1lBQ04sdUNBQWdCO09BakI3QyxvQkFBb0IsQ0E0R2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTVHRCxJQTRHQztBQTVHWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBBcHBDb25zdGFudCBmcm9tICd+L2FwcC5jb25zdGFudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBCb29raW5nU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL2FwaSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuaW1wb3J0IHsgRmlsZVBob3RvdmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1maWxlLXBob3Rvdmlldyc7XG5pbXBvcnQgUGFnZVNlcnZpY2UgZnJvbSAnfi9wYWdlL3BhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvdGVsLWRldGFpbC1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvdGVsLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEhvdGVsRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb247XG4gICAgcHVibGljIHRpbWVzID0gXy50aW1lcztcbiAgICBwdWJsaWMgc2VhcmNoQ3JpdGVyaWE7XG4gICAgcHVibGljIGhvdGVsOiBhbnkgPSB7fTtcbiAgICBwdWJsaWMgcm9vbUxpc3QgPSBbXTtcbiAgICBwdWJsaWMgdG90YWxSYXRlcyA9IDA7XG4gICAgcHVibGljIHRvdGFsUHJpY2UgPSAwO1xuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4ID0gMDtcbiAgICBwdWJsaWMgZmlsZVBob3RvVmlldztcbiAgICBwdWJsaWMgY3VycmVudFNlbGVjdGVkUGhvdG87XG4gICAgcHVibGljIG51bWJlck9mU2VsZWN0QW1vdW50cyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJvb2tpbmdTZXJ2aWNlOiBCb29raW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYSA9IGUgfHwge307XG4gICAgICAgICAgICB0aGlzLmdldEhvdGVsRGV0YWlsKCkuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldyA9IG5ldyBGaWxlUGhvdG92aWV3KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEhvdGVsRGV0YWlsKCkge1xuICAgICAgICBsZXQgZm4gPSB0aGlzLmJvb2tpbmdTZXJ2aWNlLmJvb2tpbmdEZXRhaWxQcm9wZXJ0eSh0aGlzLnNlYXJjaENyaXRlcmlhLmlkLFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYS5hcnJpdmFsRGF0ZSxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQ3JpdGVyaWEuZGVwYXJ0dXJlRGF0ZSxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQ3JpdGVyaWEubnVtYmVyT2ZQQVgpO1xuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICBmbiA9IHRoaXMuYm9va2luZ1NlcnZpY2UuYm9va2luZ0RldGFpbFByb3BlcnR5KHRoaXMuc2VhcmNoQ3JpdGVyaWEuaWQsXG4gICAgICAgICAgICAgICAgbW9tZW50KHRoaXMuc2VhcmNoQ3JpdGVyaWEuYXJyaXZhbERhdGUsICdZWVlZLU1NLUREJykuZm9ybWF0KEFwcENvbnN0YW50LnR5cGVGb3JtYXQuZGF0ZSksXG4gICAgICAgICAgICAgICAgbW9tZW50KHRoaXMuc2VhcmNoQ3JpdGVyaWEuZGVwYXJ0dXJlRGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoQXBwQ29uc3RhbnQudHlwZUZvcm1hdC5kYXRlKSxcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaENyaXRlcmlhLm51bWJlck9mUEFYKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm4ubWFwKChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG90ZWwgPSByZXNwLmRhdGE7XG4gICAgICAgICAgICB0aGlzLnRvdGFsUmF0ZXMgPSB0aGlzLmhvdGVsLnJvb21zLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICsgYi5yYXRlVHlwZXMubGVuZ3RoXG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIHRoaXMucm9vbUxpc3QgPSBfLmZsYXR0ZW4oXy5tYXAodGhpcy5ob3RlbC5yb29tcywgKHJvb20pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8ubWFwKHJvb20ucmF0ZVR5cGVzLCAocmF0ZVR5cGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRlVHlwZSwgbnVtUm93U3BhbjogIWkgPyByb29tLnJhdGVUeXBlcy5sZW5ndGggOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gJiYgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgaWYgKGdsb2JhbC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAoZ2xvYmFsIGFzIGFueSkuZ2MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjaG9pY2VSb29tKHJvb20sIHJvb21JdGVtKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdDaG9pY2UgQW1vdW50JyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdTZWxlY3QgaG93IG1hbnkgcm9vbXMgeW91IG5lZWQnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBhY3Rpb25zOiBfLnRpbWVzKDIxLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9IC0gJCR7KHZhbHVlICogcm9vbS5yYXRlKS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudG9Mb3dlckNhc2UoKSAhPT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50U2VsZWN0ZWQgPSArcmVzdWx0LnNwbGl0KCctJylbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIHJvb21JdGVtLnRleHQgPSBhbW91bnRTZWxlY3RlZCArICcgcm9vbShzKSc7XG4gICAgICAgICAgICAgICAgcm9vbS5hbW91bnRTZWxlY3RlZCA9IGFtb3VudFNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG90YWxQcmljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVG90YWxQcmljZSgpIHtcbiAgICAgICAgdGhpcy50b3RhbFByaWNlID0gXy5yZWR1Y2UodGhpcy5ob3RlbC5yb29tcywgKG0sIHJvb20pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtICsgXy5yZWR1Y2Uocm9vbS5yYXRlVHlwZXMsIChhLCBiKSA9PiBhICsgKGIuYW1vdW50U2VsZWN0ZWQgfHwgMCkgKiBiLnJhdGUsIDApO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlld1Bob3RvKGltZ1VybCkge1xuICAgICAgICAvLyBEaXNwbGF5IHRoZSBwaG90b1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcuc2hvdyhpbWdVcmwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb0Jvb2tpbmdUYWIoKSB7XG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XG4gICAgfVxuXG4gICAgcHVibGljIGJvb2tSb29tcygpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY29uZmlybS1ib29raW5nJ10pO1xuICAgIH1cbn0iXX0=