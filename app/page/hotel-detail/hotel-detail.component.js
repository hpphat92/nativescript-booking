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
var page_service_1 = require("~/page/page.service");
require("nativescript-photoviewer");
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
        this.filePhotoView = new PhotoViewer();
        this.filePhotoView.fontFamily = 'Avenir-Roman';
        this.filePhotoView.titleFontSize = 20;
        this.filePhotoView.summaryFontSize = 16;
        this.filePhotoView.creditFontSize = 14;
        this.filePhotoView.paletteType = 'LIGHT_MUTED'; // Android only
        this.filePhotoView.showAlbum = true; // Android only (true = shows album first, false = shows fullscreen gallery directly)
        this.filePhotoView.startIndex = 0; // start index for the fullscreen gallery
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
    HotelDetailComponent.prototype.viewPhoto = function (idx) {
        // Display the photo
        this.filePhotoView.photoViewer = idx;
        this.filePhotoView.showViewer(this.hotel.images);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWwtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdGVsLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsK0JBQWlDO0FBQ2pDLCtDQUF5QztBQUN6QyxpQ0FBK0I7QUFDL0Isb0NBQThDO0FBQzlDLDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFFckQsb0RBQThDO0FBRTlDLG9DQUFrQztBQVNsQztJQWFJLDhCQUFvQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSnRELGlCQW1CQztRQW5CbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBZi9DLFVBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRWhCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBR3JCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQU85QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFFaEMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILElB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SUFFTSx3Q0FBUyxHQUFoQixVQUFpQixHQUFHO1FBQ2hCLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sMkNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSx3Q0FBUyxHQUFoQjtRQUNJLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUE5R1Esb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7aURBYzZCLHVCQUFjO1lBQ2IsZUFBTTtZQUNFLG9CQUFjO1lBQ2pCLHNCQUFXO1lBQ04sdUNBQWdCO09BakI3QyxvQkFBb0IsQ0ErR2hDO0lBQUQsMkJBQUM7Q0FBQSxBQS9HRCxJQStHQztBQS9HWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBBcHBDb25zdGFudCBmcm9tICd+L2FwcC5jb25zdGFudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBCb29raW5nU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL2FwaSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuaW1wb3J0IHsgRmlsZVBob3RvdmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1maWxlLXBob3Rvdmlldyc7XG5pbXBvcnQgUGFnZVNlcnZpY2UgZnJvbSAnfi9wYWdlL3BhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0ICduYXRpdmVzY3JpcHQtcGhvdG92aWV3ZXInO1xuXG5kZWNsYXJlIHZhciBQaG90b1ZpZXdlcjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvdGVsLWRldGFpbC1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvdGVsLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEhvdGVsRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb247XG4gICAgcHVibGljIHRpbWVzID0gXy50aW1lcztcbiAgICBwdWJsaWMgc2VhcmNoQ3JpdGVyaWE7XG4gICAgcHVibGljIGhvdGVsOiBhbnkgPSB7fTtcbiAgICBwdWJsaWMgcm9vbUxpc3QgPSBbXTtcbiAgICBwdWJsaWMgdG90YWxSYXRlcyA9IDA7XG4gICAgcHVibGljIHRvdGFsUHJpY2UgPSAwO1xuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4ID0gMDtcbiAgICBwdWJsaWMgZmlsZVBob3RvVmlldztcbiAgICBwdWJsaWMgY3VycmVudFNlbGVjdGVkUGhvdG87XG4gICAgcHVibGljIG51bWJlck9mU2VsZWN0QW1vdW50cyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJvb2tpbmdTZXJ2aWNlOiBCb29raW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYSA9IGUgfHwge307XG4gICAgICAgICAgICB0aGlzLmdldEhvdGVsRGV0YWlsKCkuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldyA9IG5ldyBQaG90b1ZpZXdlcigpO1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcuZm9udEZhbWlseSA9ICdBdmVuaXItUm9tYW4nO1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcudGl0bGVGb250U2l6ZSA9IDIwO1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcuc3VtbWFyeUZvbnRTaXplID0gMTY7XG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldy5jcmVkaXRGb250U2l6ZSA9IDE0O1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcucGFsZXR0ZVR5cGUgPSAnTElHSFRfTVVURUQnOyAvLyBBbmRyb2lkIG9ubHlcbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LnNob3dBbGJ1bSA9IHRydWU7IC8vIEFuZHJvaWQgb25seSAodHJ1ZSA9IHNob3dzIGFsYnVtIGZpcnN0LCBmYWxzZSA9IHNob3dzIGZ1bGxzY3JlZW4gZ2FsbGVyeSBkaXJlY3RseSlcbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LnN0YXJ0SW5kZXggPSAwOyAvLyBzdGFydCBpbmRleCBmb3IgdGhlIGZ1bGxzY3JlZW4gZ2FsbGVyeVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIb3RlbERldGFpbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9va2luZ1NlcnZpY2UuYm9va2luZ0RldGFpbFByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYS5pZCxcbiAgICAgICAgICAgIG1vbWVudCh0aGlzLnNlYXJjaENyaXRlcmlhLmFycml2YWxEYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdChBcHBDb25zdGFudC50eXBlRm9ybWF0LmRhdGUpLFxuICAgICAgICAgICAgbW9tZW50KHRoaXMuc2VhcmNoQ3JpdGVyaWEuZGVwYXJ0dXJlRGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoQXBwQ29uc3RhbnQudHlwZUZvcm1hdC5kYXRlKSxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQ3JpdGVyaWEubnVtYmVyT2ZQQVgpXG4gICAgICAgICAgICAubWFwKChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdGVsID0gcmVzcC5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxSYXRlcyA9IHRoaXMuaG90ZWwucm9vbXMucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgYi5yYXRlVHlwZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb29tTGlzdCA9IF8uZmxhdHRlbihfLm1hcCh0aGlzLmhvdGVsLnJvb21zLCAocm9vbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8ubWFwKHJvb20ucmF0ZVR5cGVzLCAocmF0ZVR5cGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRlVHlwZSwgbnVtUm93U3BhbjogIWkgPyByb29tLnJhdGVUeXBlcy5sZW5ndGggOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiAmJiB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICBpZiAoZ2xvYmFsLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIChnbG9iYWwgYXMgYW55KS5nYygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNob2ljZVJvb20ocm9vbSwgcm9vbUl0ZW0pIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0Nob2ljZSBBbW91bnQnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1NlbGVjdCBob3cgbWFueSByb29tcyB5b3UgbmVlZCcsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IF8udGltZXMoMjEsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX0gLSAkJHsodmFsdWUgKiByb29tLnJhdGUpLnRvRml4ZWQoMil9YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG5cbiAgICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC50b0xvd2VyQ2FzZSgpICE9PSAnY2FuY2VsJykge1xuICAgICAgICAgICAgICAgIGxldCBhbW91bnRTZWxlY3RlZCA9ICtyZXN1bHQuc3BsaXQoJy0nKVswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgcm9vbUl0ZW0udGV4dCA9IGFtb3VudFNlbGVjdGVkICsgJyByb29tKHMpJztcbiAgICAgICAgICAgICAgICByb29tLmFtb3VudFNlbGVjdGVkID0gYW1vdW50U2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3RhbFByaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVUb3RhbFByaWNlKCkge1xuICAgICAgICB0aGlzLnRvdGFsUHJpY2UgPSBfLnJlZHVjZSh0aGlzLmhvdGVsLnJvb21zLCAobSwgcm9vbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG0gKyBfLnJlZHVjZShyb29tLnJhdGVUeXBlcywgKGEsIGIpID0+IGEgKyAoYi5hbW91bnRTZWxlY3RlZCB8fCAwKSAqIGIucmF0ZSwgMCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aWV3UGhvdG8oaWR4KSB7XG4gICAgICAgIC8vIERpc3BsYXkgdGhlIHBob3RvXG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldy5waG90b1ZpZXdlciA9IGlkeDtcbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LnNob3dWaWV3ZXIodGhpcy5ob3RlbC5pbWFnZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb0Jvb2tpbmdUYWIoKSB7XG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XG4gICAgfVxuXG4gICAgcHVibGljIGJvb2tSb29tcygpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY29uZmlybS1ib29raW5nJ10pO1xuICAgIH1cbn0iXX0=