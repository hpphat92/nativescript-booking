"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
require("rxjs/add/operator/map");
var _ = require("lodash");
var api_1 = require("~/shared/api");
var page_service_1 = require("~/page/page.service");
var ReviewBookingComponent = /** @class */ (function () {
    function ReviewBookingComponent(router, BookingService, pageService, activatedRoute, routerExtensions) {
        var _this = this;
        this.router = router;
        this.BookingService = BookingService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.routerExtensions = routerExtensions;
        var currentBookingRequest = this.pageService.selectedBookingInfo;
        var rooms = this.pageService.selectedBookingInfo.hotel.rooms;
        var listSelectedRooms = _.groupBy(this.pageService.selectedBookingInfo.itemTypeReserves, 'itemId');
        var total = 0;
        var listRoomsDetail = _.map(listSelectedRooms, function (listItems, itemId) {
            var room = _.find(rooms, { id: itemId });
            return {
                roomId: itemId,
                roomName: room ? room.name : '',
                types: _.map(listItems, function (rate) {
                    var selectedRate = _.find(room.rateTypes, { id: rate.rateTypeId });
                    total += (rate.quantity * (selectedRate ? selectedRate.rate : 0));
                    return {
                        quantity: rate.quantity,
                        rate: selectedRate ? selectedRate.rate : 0,
                        roomType: selectedRate ? selectedRate.name : ''
                    };
                })
            };
        });
        var addOns = _.compact(_.map(this.pageService.selectedBookingInfo.addOns, function (id) {
            var findingAddOns = _.find(_this.pageService.selectedBookingInfo.hotel.addOns, { id: id });
            total += (findingAddOns ? findingAddOns.price : 0);
            return findingAddOns;
        }));
        this.bookingDetail = {
            'checkIn': currentBookingRequest.checkIn,
            'checkOut': currentBookingRequest.checkOut,
            'createdOn': new Date(),
            rooms: listRoomsDetail,
            addOns: addOns,
            total: total
            // 'rooms': [{
            //     'roomId': '111caba698ba4e9db53a8681ee5c32fb',
            //     'roomName': ' Large Double Room',
            //     'types': [{
            //         'roomType': 'Single Room with Window',
            //         'quantity': 1,
            //         'rate': 2.5
            //     }, { 'roomType': 'Double Occupancy', 'quantity': 1, 'rate': 3 }]
            // }, {
            //     'roomId': '410bc713978347c8aa98278a7c2caef2',
            //     'roomName': 'Family Room (3 Adults)',
            //     'types': [{ 'roomType': 'Family Room', 'quantity': 2, 'rate': 4 }]
            // }],
            // 'addOns': [{
            //     'id': '18f3b4c5454a40fd9b2eb1057264c059',
            //     'name': 'Massage',
            //     'price': 120
            // }, { 'id': 'e3f6f891e77b45c08f9edd85232b720b', 'name': 'Seafood Buffet ', 'price': 20 }]
        };
    }
    ReviewBookingComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ReviewBookingComponent.prototype.goConfirmBooking = function () {
        this.router.navigate(['confirm-booking']);
    };
    ReviewBookingComponent.prototype.ngOnInit = function () {
    };
    ReviewBookingComponent.prototype.ngOnDestroy = function () {
    };
    ReviewBookingComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'review-booking-component',
            moduleId: module.id,
            templateUrl: './review-booking.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            api_1.BookingService,
            page_service_1.default,
            router_1.ActivatedRoute,
            nativescript_angular_1.RouterExtensions])
    ], ReviewBookingComponent);
    return ReviewBookingComponent;
}());
exports.ReviewBookingComponent = ReviewBookingComponent;
