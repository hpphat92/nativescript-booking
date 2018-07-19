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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9va2luZy1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUQ7QUFDekQsNkRBQXdEO0FBQ3hELGlDQUErQjtBQVEvQjtJQU1JLGdDQUFvQixNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsZ0JBQWtDO1FBRnRELGlCQW1EQztRQW5EbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSi9DLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFLaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFNO2dCQUFKLFVBQUU7WUFDekQsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFDRCxLQUFJLENBQUMsYUFBYSxHQUFHO2dCQUNqQixJQUFJLEVBQUUsa0NBQWtDO2dCQUN4QyxTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsc0JBQXNCO2dCQUNsQyxXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxPQUFPLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLHFCQUFxQjtvQkFDN0IsTUFBTSxFQUFFLFNBQVM7b0JBQ2pCLFNBQVMsRUFBRSxVQUFVO29CQUNyQixVQUFVLEVBQUUsNEdBQTRHO2lCQUMzSDtnQkFDRCxNQUFNLEVBQUU7b0JBQ0osV0FBVyxFQUFFLE1BQU07b0JBQ25CLFVBQVUsRUFBRSxNQUFNO29CQUNsQixPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixhQUFhLEVBQUUsb0JBQW9CO29CQUNuQyxZQUFZLEVBQUUsT0FBTztvQkFDckIsZ0JBQWdCLEVBQUUsaUJBQWlCO29CQUNuQyxjQUFjLEVBQUUsb0JBQW9CO29CQUNwQyxlQUFlLEVBQUUsa0JBQWtCO29CQUNuQyxhQUFhLEVBQUUsS0FBSztpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFLEdBQUc7Z0JBQ2pCLE9BQU8sRUFBRSxDQUFDO3dCQUNOLFFBQVEsRUFBRSxrQ0FBa0M7d0JBQzVDLFVBQVUsRUFBRSxvQkFBb0I7d0JBQ2hDLE9BQU8sRUFBRSxDQUFDO2dDQUNOLFVBQVUsRUFBRSx5QkFBeUI7Z0NBQ3JDLFVBQVUsRUFBRSxDQUFDO2dDQUNiLE1BQU0sRUFBRSxHQUFHOzZCQUNkLEVBQUUsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ25FLEVBQUU7d0JBQ0MsUUFBUSxFQUFFLGtDQUFrQzt3QkFDNUMsVUFBVSxFQUFFLHdCQUF3Qjt3QkFDcEMsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUNyRSxDQUFDO2dCQUNGLFFBQVEsRUFBRSxDQUFDO3dCQUNQLElBQUksRUFBRSxrQ0FBa0M7d0JBQ3hDLE1BQU0sRUFBRSxTQUFTO3dCQUNqQixPQUFPLEVBQUUsR0FBRztxQkFDZixFQUFFLEVBQUUsSUFBSSxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDM0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLHVDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQseUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw0Q0FBVyxHQUFYO0lBQ0EsQ0FBQztJQW5FUSxzQkFBc0I7UUFMbEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7U0FDakQsQ0FBQztpREFPOEIsZUFBTTtZQUNFLHVCQUFjO1lBQ1osdUNBQWdCO09BUjdDLHNCQUFzQixDQW9FbEM7SUFBRCw2QkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Jvb2tpbmctZGV0YWlsLWNvbXBvbmVudCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYm9va2luZy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCb29raW5nRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHVibGljIHN1YnNjcmlwdG9yO1xuICAgIHB1YmxpYyBib29raW5nRGV0YWlsO1xuICAgIHB1YmxpYyBteUl0ZW1zID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdG9yID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMubXlJdGVtcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teUl0ZW1zLnB1c2goJ2RhdGEgaXRlbSAnICsgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvb2tpbmdEZXRhaWwgPSB7XG4gICAgICAgICAgICAgICAgJ2lkJzogJzNlMjY5NDJlZDcxYjQwODhiMTJhOTcyZTYwOGFhZmJiJyxcbiAgICAgICAgICAgICAgICAnY2hlY2tJbic6ICc3LzE3LzIwMTggODo0NzozOCBBTScsXG4gICAgICAgICAgICAgICAgJ2NoZWNrT3V0JzogJzcvMTcvMjAxOCA4OjQ3OjM4IEFNJyxcbiAgICAgICAgICAgICAgICAnY3JlYXRlZE9uJzogJzcvMTcvMjAxOCA4OjQ3OjM4IEFNJyxcbiAgICAgICAgICAgICAgICAnaG90ZWwnOiB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ1FpdSBIb3RlbCBTdWtodW12aXQnLFxuICAgICAgICAgICAgICAgICAgICAnY2l0eSc6ICdCYW5na29rJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NvdW50cnknOiAnVGhhaWxhbmQnLFxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VVcmwnOiAnaHR0cHM6Ly90cmFiYmxldGVzdHN0b3JhZ2UuYmxvYi5jb3JlLndpbmRvd3MubmV0L215Y29udGFpbmVyLzE3MDY0MzA0X2QyM2I2MTc1OTFmOTQ3YzU4MzQ3NmUwZmUwMTZmMWY2LmpwZydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd1c2VyJzoge1xuICAgICAgICAgICAgICAgICAgICAnZmlyc3ROYW1lJzogJ1BoYXQnLFxuICAgICAgICAgICAgICAgICAgICAnbGFzdE5hbWUnOiAnSG9uZycsXG4gICAgICAgICAgICAgICAgICAgICdlbWFpbCc6ICdocHBoYXQxOTkyQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICdwaG9uZU51bWJlcic6ICcrNzE2NjM2NzI2Mzc2MzcyMzYnLFxuICAgICAgICAgICAgICAgICAgICAncG9zdGFsQ29kZSc6ICcxMDAwMCcsXG4gICAgICAgICAgICAgICAgICAgICdwYXNzcG9ydE51bWJlcic6ICcxMzg3Mjg3ODcyODM3ODInLFxuICAgICAgICAgICAgICAgICAgICAnZmlyc3RBZGRyZXNzJzogJzI2MTAgQmFybmVzIFN0cmVldCcsXG4gICAgICAgICAgICAgICAgICAgICdzZWNvbmRBZGRyZXNzJzogJ0xha2UgQnVlbmEgVmlzdGEnLFxuICAgICAgICAgICAgICAgICAgICAnbmF0aW9uYWxpdHknOiAnVVNBJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3RvdGFsUHJpY2UnOiAxMDAsXG4gICAgICAgICAgICAgICAgJ3Jvb21zJzogW3tcbiAgICAgICAgICAgICAgICAgICAgJ3Jvb21JZCc6ICcxMTFjYWJhNjk4YmE0ZTlkYjUzYTg2ODFlZTVjMzJmYicsXG4gICAgICAgICAgICAgICAgICAgICdyb29tTmFtZSc6ICcgTGFyZ2UgRG91YmxlIFJvb20nLFxuICAgICAgICAgICAgICAgICAgICAndHlwZXMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jvb21UeXBlJzogJ1NpbmdsZSBSb29tIHdpdGggV2luZG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdxdWFudGl0eSc6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmF0ZSc6IDIuNVxuICAgICAgICAgICAgICAgICAgICB9LCB7ICdyb29tVHlwZSc6ICdEb3VibGUgT2NjdXBhbmN5JywgJ3F1YW50aXR5JzogMSwgJ3JhdGUnOiAzIH1dXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAncm9vbUlkJzogJzQxMGJjNzEzOTc4MzQ3YzhhYTk4Mjc4YTdjMmNhZWYyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Jvb21OYW1lJzogJ0ZhbWlseSBSb29tICgzIEFkdWx0cyknLFxuICAgICAgICAgICAgICAgICAgICAndHlwZXMnOiBbeyAncm9vbVR5cGUnOiAnRmFtaWx5IFJvb20nLCAncXVhbnRpdHknOiAyLCAncmF0ZSc6IDQgfV1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAnYWRkT25zJzogW3tcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJzE4ZjNiNGM1NDU0YTQwZmQ5YjJlYjEwNTcyNjRjMDU5JyxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnTWFzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgICdwcmljZSc6IDEyMFxuICAgICAgICAgICAgICAgIH0sIHsgJ2lkJzogJ2UzZjZmODkxZTc3YjQ1YzA4ZjllZGQ4NTIzMmI3MjBiJywgJ25hbWUnOiAnU2VhZm9vZCBCdWZmZXQgJywgJ3ByaWNlJzogMjAgfV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIH1cbn0iXX0=