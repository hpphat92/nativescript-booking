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
var BookingSourceEnum = api_1.ReserveModel.BookingSourceEnum;
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
        this.hotel = {
            images: []
        };
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
        this.filePhotoView.showAlbum = false; // Android only (true = shows album first, false = shows fullscreen gallery directly)
        this.filePhotoView.startIndex = 0; // start index for the fullscreen gallery
    }
    HotelDetailComponent.prototype.ngOnInit = function () {
    };
    HotelDetailComponent.prototype.getHotelDetail = function () {
        var _this = this;
        return this.bookingService.bookingDetailProperty(this.searchCriteria.id, moment(this.searchCriteria.arrivalDate, 'YYYY-MM-DD').format(app_constant_1.default.typeFormat.date), moment(this.searchCriteria.departureDate, 'YYYY-MM-DD').format(app_constant_1.default.typeFormat.date), this.searchCriteria.numberOfPAX)
            .map(function (resp) {
            _this.hotel = resp.data;
            _this.pageService.selectedBookingInfo = {
                hotel: _this.hotel
            };
            _this.totalRates = _this.hotel.rooms.reduce(function (a, b) {
                return a + b.rateTypes.length;
            }, 0);
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
    HotelDetailComponent.prototype.choiceRoom = function (rate, roomItem) {
        var _this = this;
        var options = {
            title: 'Choice Amount',
            message: 'Select how many rooms you need',
            cancelButtonText: 'Cancel',
            actions: _.times(rate.availableQuantity + 1, function (value) {
                return value + " - $" + (value * rate.rate).toFixed(2);
            })
        };
        dialogs_1.action(options).then(function (result) {
            if (result.toLowerCase() !== 'cancel') {
                var amountSelected = +result.split('-')[0].trim();
                roomItem.text = amountSelected + ' room(s)';
                rate.amountSelected = amountSelected;
                _this.updateTotalPrice();
            }
        });
    };
    HotelDetailComponent.prototype.updateTotalPrice = function () {
        this.totalPrice = _.reduce(this.hotel.rooms, function (m, room) {
            return m + _.reduce(room.rateTypes, function (a, b) { return a + (b.amountSelected || 0) * b.rate; }, 0);
        }, 0);
        // Update room model
        this.pageService.selectedBookingInfo = {
            id: this.searchCriteria.id,
            checkIn: moment(this.searchCriteria.arrivalDate, 'YYYY-MM-DD').format(app_constant_1.default.typeFormat.date),
            checkOut: moment(this.searchCriteria.departureDate, 'YYYY-MM-DD').format(app_constant_1.default.typeFormat.date),
            bookingSource: BookingSourceEnum.Manual,
            arrivalTime: '',
            itemTypeReserves: _.compact(_.flatten(_.map(this.hotel.rooms, function (room) {
                return _.map(room.rateTypes, function (rate) {
                    if (rate.amountSelected) {
                        return {
                            itemId: room.id,
                            rateTypeId: rate.id,
                            quantity: rate.amountSelected
                        };
                    }
                });
            })))
        };
    };
    HotelDetailComponent.prototype.viewPhoto = function (idx) {
        // Display the photo
        this.filePhotoView.startIndex = idx;
        this.filePhotoView.showViewer(this.hotel.images);
    };
    HotelDetailComponent.prototype.goBookingTab = function () {
        this.tabSelectedIndex = 2;
    };
    HotelDetailComponent.prototype.goChoiceRooms = function () {
        this.tabSelectedIndex = 3;
    };
    HotelDetailComponent.prototype.bookRooms = function () {
        this.router.navigate(['review-booking']);
    };
    HotelDetailComponent.prototype.onItemSelected = function (e) {
        var selectedItems = e.object.getSelectedItems();
        this.pageService.selectedBookingInfo = {
            addOns: _.map(selectedItems, 'id')
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWwtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdGVsLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsK0JBQWlDO0FBQ2pDLCtDQUF5QztBQUN6QyxpQ0FBK0I7QUFDL0Isb0NBQTREO0FBQzVELDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFFckQsb0RBQThDO0FBRTlDLElBQU8saUJBQWlCLEdBQUcsa0JBQVksQ0FBQyxpQkFBaUIsQ0FBQztBQUcxRCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQU90RDtJQWVJLDhCQUFvQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBSnRELGlCQW1CQztRQW5CbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBakIvQyxVQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVoQixVQUFLLEdBQVE7WUFDaEIsTUFBTSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBQ0ssYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBR3JCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQU85QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElB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LENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sd0NBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sNkNBQWMsR0FBckIsVUFBc0IsQ0FBQztRQUNuQixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsR0FBRztZQUNuQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO1NBQ3JDLENBQUM7SUFDTixDQUFDO0lBdklRLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDO2lEQWdCNkIsdUJBQWM7WUFDYixlQUFNO1lBQ0Usb0JBQWM7WUFDakIsc0JBQVc7WUFDTix1Q0FBZ0I7T0FuQjdDLG9CQUFvQixDQXdJaEM7SUFBRCwyQkFBQztDQUFBLEFBeElELElBd0lDO0FBeElZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQXBwQ29uc3RhbnQgZnJvbSAnfi9hcHAuY29uc3RhbnQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgQm9va2luZ1NlcnZpY2UsIFJlc2VydmVNb2RlbCB9IGZyb20gJ34vc2hhcmVkL2FwaSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuaW1wb3J0IHsgRmlsZVBob3RvdmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1maWxlLXBob3Rvdmlldyc7XG5pbXBvcnQgUGFnZVNlcnZpY2UgZnJvbSAnfi9wYWdlL3BhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IEJvb2tpbmdTb3VyY2VFbnVtID0gUmVzZXJ2ZU1vZGVsLkJvb2tpbmdTb3VyY2VFbnVtO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhcic7XG5cbmxldCBQaG90b1ZpZXdlciA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1waG90b3ZpZXdlcicpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvdGVsLWRldGFpbC1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvdGVsLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEhvdGVsRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb247XG4gICAgcHVibGljIHRpbWVzID0gXy50aW1lcztcbiAgICBwdWJsaWMgc2VhcmNoQ3JpdGVyaWE7XG4gICAgcHVibGljIGhvdGVsOiBhbnkgPSB7XG4gICAgICAgIGltYWdlczogW11cbiAgICB9O1xuICAgIHB1YmxpYyByb29tTGlzdCA9IFtdO1xuICAgIHB1YmxpYyB0b3RhbFJhdGVzID0gMDtcbiAgICBwdWJsaWMgdG90YWxQcmljZSA9IDA7XG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXggPSAwO1xuICAgIHB1YmxpYyBmaWxlUGhvdG9WaWV3O1xuICAgIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRQaG90bztcbiAgICBwdWJsaWMgbnVtYmVyT2ZTZWxlY3RBbW91bnRzID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYm9va2luZ1NlcnZpY2U6IEJvb2tpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaENyaXRlcmlhID0gZSB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuZ2V0SG90ZWxEZXRhaWwoKS5zdWJzY3JpYmUoKCkgPT4ge1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3ID0gbmV3IFBob3RvVmlld2VyKCk7XG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldy5mb250RmFtaWx5ID0gJ0F2ZW5pci1Sb21hbic7XG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldy50aXRsZUZvbnRTaXplID0gMjA7XG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldy5zdW1tYXJ5Rm9udFNpemUgPSAxNjtcbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LmNyZWRpdEZvbnRTaXplID0gMTQ7XG4gICAgICAgIHRoaXMuZmlsZVBob3RvVmlldy5wYWxldHRlVHlwZSA9ICdMSUdIVF9NVVRFRCc7IC8vIEFuZHJvaWQgb25seVxuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcuc2hvd0FsYnVtID0gZmFsc2U7IC8vIEFuZHJvaWQgb25seSAodHJ1ZSA9IHNob3dzIGFsYnVtIGZpcnN0LCBmYWxzZSA9IHNob3dzIGZ1bGxzY3JlZW4gZ2FsbGVyeSBkaXJlY3RseSlcbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LnN0YXJ0SW5kZXggPSAwOyAvLyBzdGFydCBpbmRleCBmb3IgdGhlIGZ1bGxzY3JlZW4gZ2FsbGVyeVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIb3RlbERldGFpbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9va2luZ1NlcnZpY2UuYm9va2luZ0RldGFpbFByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYS5pZCxcbiAgICAgICAgICAgIG1vbWVudCh0aGlzLnNlYXJjaENyaXRlcmlhLmFycml2YWxEYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdChBcHBDb25zdGFudC50eXBlRm9ybWF0LmRhdGUpLFxuICAgICAgICAgICAgbW9tZW50KHRoaXMuc2VhcmNoQ3JpdGVyaWEuZGVwYXJ0dXJlRGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoQXBwQ29uc3RhbnQudHlwZUZvcm1hdC5kYXRlKSxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQ3JpdGVyaWEubnVtYmVyT2ZQQVgpXG4gICAgICAgICAgICAubWFwKChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdGVsID0gcmVzcC5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZVNlcnZpY2Uuc2VsZWN0ZWRCb29raW5nSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaG90ZWw6IHRoaXMuaG90ZWxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxSYXRlcyA9IHRoaXMuaG90ZWwucm9vbXMucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgYi5yYXRlVHlwZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gJiYgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgaWYgKGdsb2JhbC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAoZ2xvYmFsIGFzIGFueSkuZ2MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjaG9pY2VSb29tKHJhdGUsIHJvb21JdGVtKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdDaG9pY2UgQW1vdW50JyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdTZWxlY3QgaG93IG1hbnkgcm9vbXMgeW91IG5lZWQnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBhY3Rpb25zOiBfLnRpbWVzKHJhdGUuYXZhaWxhYmxlUXVhbnRpdHkgKyAxLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9IC0gJCR7KHZhbHVlICogcmF0ZS5yYXRlKS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudG9Mb3dlckNhc2UoKSAhPT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50U2VsZWN0ZWQgPSArcmVzdWx0LnNwbGl0KCctJylbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIHJvb21JdGVtLnRleHQgPSBhbW91bnRTZWxlY3RlZCArICcgcm9vbShzKSc7XG4gICAgICAgICAgICAgICAgcmF0ZS5hbW91bnRTZWxlY3RlZCA9IGFtb3VudFNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG90YWxQcmljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVG90YWxQcmljZSgpIHtcbiAgICAgICAgdGhpcy50b3RhbFByaWNlID0gXy5yZWR1Y2UodGhpcy5ob3RlbC5yb29tcywgKG0sIHJvb20pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtICsgXy5yZWR1Y2Uocm9vbS5yYXRlVHlwZXMsIChhLCBiKSA9PiBhICsgKGIuYW1vdW50U2VsZWN0ZWQgfHwgMCkgKiBiLnJhdGUsIDApO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgLy8gVXBkYXRlIHJvb20gbW9kZWxcbiAgICAgICAgdGhpcy5wYWdlU2VydmljZS5zZWxlY3RlZEJvb2tpbmdJbmZvID0ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuc2VhcmNoQ3JpdGVyaWEuaWQsXG4gICAgICAgICAgICBjaGVja0luOiBtb21lbnQodGhpcy5zZWFyY2hDcml0ZXJpYS5hcnJpdmFsRGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoQXBwQ29uc3RhbnQudHlwZUZvcm1hdC5kYXRlKSxcbiAgICAgICAgICAgIGNoZWNrT3V0OiBtb21lbnQodGhpcy5zZWFyY2hDcml0ZXJpYS5kZXBhcnR1cmVEYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdChBcHBDb25zdGFudC50eXBlRm9ybWF0LmRhdGUpLFxuICAgICAgICAgICAgYm9va2luZ1NvdXJjZTogQm9va2luZ1NvdXJjZUVudW0uTWFudWFsLFxuICAgICAgICAgICAgYXJyaXZhbFRpbWU6ICcnLFxuICAgICAgICAgICAgaXRlbVR5cGVSZXNlcnZlczogXy5jb21wYWN0KF8uZmxhdHRlbihfLm1hcCh0aGlzLmhvdGVsLnJvb21zLCAocm9vbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLm1hcChyb29tLnJhdGVUeXBlcywgKHJhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhdGUuYW1vdW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkOiByb29tLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGVUeXBlSWQ6IHJhdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IHJhdGUuYW1vdW50U2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdmlld1Bob3RvKGlkeCkge1xuICAgICAgICAvLyBEaXNwbGF5IHRoZSBwaG90b1xuICAgICAgICB0aGlzLmZpbGVQaG90b1ZpZXcuc3RhcnRJbmRleCA9IGlkeDtcbiAgICAgICAgdGhpcy5maWxlUGhvdG9WaWV3LnNob3dWaWV3ZXIodGhpcy5ob3RlbC5pbWFnZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb0Jvb2tpbmdUYWIoKSB7XG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XG4gICAgfVxuXG4gICAgcHVibGljIGdvQ2hvaWNlUm9vbXMoKSB7XG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDM7XG4gICAgfVxuXG4gICAgcHVibGljIGJvb2tSb29tcygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydyZXZpZXctYm9va2luZyddKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtU2VsZWN0ZWQoZSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtcyA9IGUub2JqZWN0LmdldFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgICAgdGhpcy5wYWdlU2VydmljZS5zZWxlY3RlZEJvb2tpbmdJbmZvID0ge1xuICAgICAgICAgICAgYWRkT25zOiBfLm1hcChzZWxlY3RlZEl0ZW1zLCAnaWQnKVxuICAgICAgICB9O1xuICAgIH1cbn0iXX0=