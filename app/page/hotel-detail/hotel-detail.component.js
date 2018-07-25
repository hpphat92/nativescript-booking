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
