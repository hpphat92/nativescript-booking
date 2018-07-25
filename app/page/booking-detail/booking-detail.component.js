"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
require("rxjs/add/operator/map");
var BookingDetailComponent = /** @class */ (function () {
    function BookingDetailComponent(router, activatedRoute, routerExtensions) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.routerExtensions = routerExtensions;
        this.myItems = [];
        this.subscriptor = this.activatedRoute.params.subscribe(function (_a) {
            var id = _a.id;
            _this.myItems = [];
            for (var i = 0; i < 50; i++) {
                _this.myItems.push('data item ' + i);
            }
            _this.bookingDetail = {
                'id': '3e26942ed71b4088b12a972e608aafbb',
                'checkIn': '7/17/2018 8:47:38 AM',
                'checkOut': '7/17/2018 8:47:38 AM',
                'createdOn': '7/17/2018 8:47:38 AM',
                'hotel': {
                    'name': 'Qiu Hotel Sukhumvit',
                    'city': 'Bangkok',
                    'country': 'Thailand',
                    'imageUrl': 'https://trabbleteststorage.blob.core.windows.net/mycontainer/17064304_d23b617591f947c583476e0fe016f1f6.jpg'
                },
                'user': {
                    'firstName': 'Phat',
                    'lastName': 'Hong',
                    'email': 'hpphat1992@gmail.com',
                    'phoneNumber': '+71663672637637236',
                    'postalCode': '10000',
                    'passportNumber': '138728787283782',
                    'firstAddress': '2610 Barnes Street',
                    'secondAddress': 'Lake Buena Vista',
                    'nationality': 'USA'
                },
                'totalPrice': 100,
                'rooms': [{
                        'roomId': '111caba698ba4e9db53a8681ee5c32fb',
                        'roomName': ' Large Double Room',
                        'types': [{
                                'roomType': 'Single Room with Window',
                                'quantity': 1,
                                'rate': 2.5
                            }, { 'roomType': 'Double Occupancy', 'quantity': 1, 'rate': 3 }]
                    }, {
                        'roomId': '410bc713978347c8aa98278a7c2caef2',
                        'roomName': 'Family Room (3 Adults)',
                        'types': [{ 'roomType': 'Family Room', 'quantity': 2, 'rate': 4 }]
                    }],
                'addOns': [{
                        'id': '18f3b4c5454a40fd9b2eb1057264c059',
                        'name': 'Massage',
                        'price': 120
                    }, { 'id': 'e3f6f891e77b45c08f9edd85232b720b', 'name': 'Seafood Buffet ', 'price': 20 }]
            };
        });
    }
    BookingDetailComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    BookingDetailComponent.prototype.ngOnInit = function () {
    };
    BookingDetailComponent.prototype.ngOnDestroy = function () {
    };
    BookingDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'booking-detail-component',
            moduleId: module.id,
            templateUrl: './booking-detail.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            nativescript_angular_1.RouterExtensions])
    ], BookingDetailComponent);
    return BookingDetailComponent;
}());
exports.BookingDetailComponent = BookingDetailComponent;
