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
var PhotoViewer = require('nativescript-photoviewer');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWwtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdGVsLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsK0JBQWlDO0FBQ2pDLCtDQUF5QztBQUN6QyxpQ0FBK0I7QUFDL0Isb0NBQThDO0FBQzlDLDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFFckQsb0RBQThDO0FBRzlDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBT3REO0lBYUksOEJBQW9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxjQUE4QixFQUM5QixXQUF3QixFQUN4QixnQkFBa0M7UUFKdEQsaUJBbUJDO1FBbkJtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFmL0MsVUFBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFaEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFHckIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBTzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUVoQyxDQUFDLENB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Q0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVNLHdDQUFTLEdBQWhCLFVBQWlCLEdBQUc7UUFDaEIsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSwyQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLHdDQUFTLEdBQWhCO1FBQ0ksUUFBUSxDQUFDO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQTlHUSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQztpREFjNkIsdUJBQWM7WUFDYixlQUFNO1lBQ0Usb0JBQWM7WUFDakIsc0JBQVc7WUFDTix1Q0FBZ0I7T0FqQjdDLG9CQUFvQixDQStHaEM7SUFBRCwyQkFBQztDQUFBLEFBL0dELElBK0dDO0FBL0dZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEFwcENvbnN0YW50IGZyb20gJ34vYXBwLmNvbnN0YW50JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IEJvb2tpbmdTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvYXBpJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBGaWxlUGhvdG92aWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZpbGUtcGhvdG92aWV3JztcbmltcG9ydCBQYWdlU2VydmljZSBmcm9tICd+L3BhZ2UvcGFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tICdwbGF0Zm9ybSc7XG5cbmxldCBQaG90b1ZpZXdlciA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1waG90b3ZpZXdlcicpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvdGVsLWRldGFpbC1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvdGVsLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEhvdGVsRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb247XG4gICAgcHVibGljIHRpbWVzID0gXy50aW1lcztcbiAgICBwdWJsaWMgc2VhcmNoQ3JpdGVyaWE7XG4gICAgcHVibGljIGhvdGVsOiBhbnkgPSB7fTtcbiAgICBwdWJsaWMgcm9vbUxpc3QgPSBbXTtcbiAgICBwdWJsaWMgdG90YWxSYXRlcyA9IDA7XG4gICAgcHVibGljIHRvdGFsUHJpY2UgPSAwO1xuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4ID0gMDtcbiAgICBwdWJsaWMgZmlsZVBob3RvVmlldztcbiAgICBwdWJsaWMgY3VycmVudFNlbGVjdGVkUGhvdG87XG4gICAgcHVibGljIG51bWJlck9mU2VsZWN0QW1vdW50cyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJvb2tpbmdTZXJ2aWNlOiBCb29raW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYSA9IGUgfHwge307XG4gICAgICAgICAgICB0aGlzLmdldEhvdGVsRGV0YWlsKCkuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldyA9IG5ldyBQaG90b1ZpZXdlcigpO1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcuZm9udEZhbWlseSA9ICdBdmVuaXItUm9tYW4nO1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcudGl0bGVGb250U2l6ZSA9IDIwO1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcuc3VtbWFyeUZvbnRTaXplID0gMTY7XG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldy5jcmVkaXRGb250U2l6ZSA9IDE0O1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcucGFsZXR0ZVR5cGUgPSAnTElHSFRfTVVURUQnOyAvLyBBbmRyb2lkIG9ubHlcbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LnNob3dBbGJ1bSA9IHRydWU7IC8vIEFuZHJvaWQgb25seSAodHJ1ZSA9IHNob3dzIGFsYnVtIGZpcnN0LCBmYWxzZSA9IHNob3dzIGZ1bGxzY3JlZW4gZ2FsbGVyeSBkaXJlY3RseSlcbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LnN0YXJ0SW5kZXggPSAwOyAvLyBzdGFydCBpbmRleCBmb3IgdGhlIGZ1bGxzY3JlZW4gZ2FsbGVyeVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIb3RlbERldGFpbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9va2luZ1NlcnZpY2UuYm9va2luZ0RldGFpbFByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYS5pZCxcbiAgICAgICAgICAgIG1vbWVudCh0aGlzLnNlYXJjaENyaXRlcmlhLmFycml2YWxEYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdChBcHBDb25zdGFudC50eXBlRm9ybWF0LmRhdGUpLFxuICAgICAgICAgICAgbW9tZW50KHRoaXMuc2VhcmNoQ3JpdGVyaWEuZGVwYXJ0dXJlRGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoQXBwQ29uc3RhbnQudHlwZUZvcm1hdC5kYXRlKSxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQ3JpdGVyaWEubnVtYmVyT2ZQQVgpXG4gICAgICAgICAgICAubWFwKChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdGVsID0gcmVzcC5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxSYXRlcyA9IHRoaXMuaG90ZWwucm9vbXMucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgYi5yYXRlVHlwZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb29tTGlzdCA9IF8uZmxhdHRlbihfLm1hcCh0aGlzLmhvdGVsLnJvb21zLCAocm9vbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8ubWFwKHJvb20ucmF0ZVR5cGVzLCAocmF0ZVR5cGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRlVHlwZSwgbnVtUm93U3BhbjogIWkgPyByb29tLnJhdGVUeXBlcy5sZW5ndGggOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiAmJiB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICBpZiAoZ2xvYmFsLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIChnbG9iYWwgYXMgYW55KS5nYygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNob2ljZVJvb20ocm9vbSwgcm9vbUl0ZW0pIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0Nob2ljZSBBbW91bnQnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1NlbGVjdCBob3cgbWFueSByb29tcyB5b3UgbmVlZCcsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IF8udGltZXMoMjEsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX0gLSAkJHsodmFsdWUgKiByb29tLnJhdGUpLnRvRml4ZWQoMil9YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG5cbiAgICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC50b0xvd2VyQ2FzZSgpICE9PSAnY2FuY2VsJykge1xuICAgICAgICAgICAgICAgIGxldCBhbW91bnRTZWxlY3RlZCA9ICtyZXN1bHQuc3BsaXQoJy0nKVswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgcm9vbUl0ZW0udGV4dCA9IGFtb3VudFNlbGVjdGVkICsgJyByb29tKHMpJztcbiAgICAgICAgICAgICAgICByb29tLmFtb3VudFNlbGVjdGVkID0gYW1vdW50U2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3RhbFByaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVUb3RhbFByaWNlKCkge1xuICAgICAgICB0aGlzLnRvdGFsUHJpY2UgPSBfLnJlZHVjZSh0aGlzLmhvdGVsLnJvb21zLCAobSwgcm9vbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG0gKyBfLnJlZHVjZShyb29tLnJhdGVUeXBlcywgKGEsIGIpID0+IGEgKyAoYi5hbW91bnRTZWxlY3RlZCB8fCAwKSAqIGIucmF0ZSwgMCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aWV3UGhvdG8oaWR4KSB7XG4gICAgICAgIC8vIERpc3BsYXkgdGhlIHBob3RvXG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldy5waG90b1ZpZXdlciA9IGlkeDtcbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LnNob3dWaWV3ZXIodGhpcy5ob3RlbC5pbWFnZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb0Jvb2tpbmdUYWIoKSB7XG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XG4gICAgfVxuXG4gICAgcHVibGljIGJvb2tSb29tcygpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY29uZmlybS1ib29raW5nJ10pO1xuICAgIH1cbn0iXX0=