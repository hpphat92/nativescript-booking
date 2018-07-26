"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
require("rxjs/add/operator/map");
var api_1 = require("~/shared/api");
var moment = require("moment");
var BookingDetailComponent = /** @class */ (function () {
    function BookingDetailComponent(router, activatedRoute, bookingService, routerExtensions) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.bookingService = bookingService;
        this.routerExtensions = routerExtensions;
        this.myItems = [];
        this.subscriptor = this.activatedRoute.params.subscribe(function (_a) {
            var id = _a.id;
            _this.myItems = [];
            _this.bookingService.bookingGet(id).subscribe(function (resp) {
                _this.bookingDetail = resp.data;
                _this.bookingDetail.checkIn = moment(_this.bookingDetail.checkInDate).format('MM-DD-YYYY');
                _this.bookingDetail.checkOut = moment(_this.bookingDetail.checkOutDate).format('MM-DD-YYYY');
                _this.bookingDetail.createdOn = moment(_this.bookingDetail.createdTime).format('MM-DD-YYYY HH:mm:ss');
            });
            // this.bookingDetail = {
            //     'id': '3e26942ed71b4088b12a972e608aafbb',
            //     'checkIn': '7/17/2018 8:47:38 AM',
            //     'checkOut': '7/17/2018 8:47:38 AM',
            //     'createdOn': '7/17/2018 8:47:38 AM',
            //     'hotel': {
            //         'name': 'Qiu Hotel Sukhumvit',
            //         'city': 'Bangkok',
            //         'country': 'Thailand',
            //         'imageUrl': 'https://trabbleteststorage.blob.core.windows.net/mycontainer/17064304_d23b617591f947c583476e0fe016f1f6.jpg'
            //     },
            //     'user': {
            //         'firstName': 'Phat',
            //         'lastName': 'Hong',
            //         'email': 'hpphat1992@gmail.com',
            //         'phoneNumber': '+71663672637637236',
            //         'postalCode': '10000',
            //         'passportNumber': '138728787283782',
            //         'firstAddress': '2610 Barnes Street',
            //         'secondAddress': 'Lake Buena Vista',
            //         'nationality': 'USA'
            //     },
            //     'totalPrice': 100,
            //     'rooms': [{
            //         'roomId': '111caba698ba4e9db53a8681ee5c32fb',
            //         'roomName': ' Large Double Room',
            //         'types': [{
            //             'roomType': 'Single Room with Window',
            //             'quantity': 1,
            //             'rate': 2.5
            //         }, { 'roomType': 'Double Occupancy', 'quantity': 1, 'rate': 3 }]
            //     }, {
            //         'roomId': '410bc713978347c8aa98278a7c2caef2',
            //         'roomName': 'Family Room (3 Adults)',
            //         'types': [{ 'roomType': 'Family Room', 'quantity': 2, 'rate': 4 }]
            //     }],
            //     'addOns': [{
            //         'id': '18f3b4c5454a40fd9b2eb1057264c059',
            //         'name': 'Massage',
            //         'price': 120
            //     }, { 'id': 'e3f6f891e77b45c08f9edd85232b720b', 'name': 'Seafood Buffet ', 'price': 20 }]
            // };
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
            api_1.BookingService,
            nativescript_angular_1.RouterExtensions])
    ], BookingDetailComponent);
    return BookingDetailComponent;
}());
exports.BookingDetailComponent = BookingDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9va2luZy1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUQ7QUFDekQsNkRBQXdEO0FBQ3hELGlDQUErQjtBQUMvQixvQ0FBOEM7QUFDOUMsK0JBQWlDO0FBT2pDO0lBTUksZ0NBQW9CLE1BQWMsRUFDZCxjQUE4QixFQUM5QixjQUE4QixFQUM5QixnQkFBa0M7UUFIdEQsaUJBdURDO1FBdkRtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTC9DLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFNaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFNO2dCQUFKLFVBQUU7WUFDekQsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtnQkFDOUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMvQixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3pGLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDeEcsQ0FBQyxDQUFDLENBQUM7WUFDSCx5QkFBeUI7WUFDekIsZ0RBQWdEO1lBQ2hELHlDQUF5QztZQUN6QywwQ0FBMEM7WUFDMUMsMkNBQTJDO1lBQzNDLGlCQUFpQjtZQUNqQix5Q0FBeUM7WUFDekMsNkJBQTZCO1lBQzdCLGlDQUFpQztZQUNqQyxtSUFBbUk7WUFDbkksU0FBUztZQUNULGdCQUFnQjtZQUNoQiwrQkFBK0I7WUFDL0IsOEJBQThCO1lBQzlCLDJDQUEyQztZQUMzQywrQ0FBK0M7WUFDL0MsaUNBQWlDO1lBQ2pDLCtDQUErQztZQUMvQyxnREFBZ0Q7WUFDaEQsK0NBQStDO1lBQy9DLCtCQUErQjtZQUMvQixTQUFTO1lBQ1QseUJBQXlCO1lBQ3pCLGtCQUFrQjtZQUNsQix3REFBd0Q7WUFDeEQsNENBQTRDO1lBQzVDLHNCQUFzQjtZQUN0QixxREFBcUQ7WUFDckQsNkJBQTZCO1lBQzdCLDBCQUEwQjtZQUMxQiwyRUFBMkU7WUFDM0UsV0FBVztZQUNYLHdEQUF3RDtZQUN4RCxnREFBZ0Q7WUFDaEQsNkVBQTZFO1lBQzdFLFVBQVU7WUFDVixtQkFBbUI7WUFDbkIsb0RBQW9EO1lBQ3BELDZCQUE2QjtZQUM3Qix1QkFBdUI7WUFDdkIsK0ZBQStGO1lBQy9GLEtBQUs7UUFDVCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSx1Q0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELHlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNENBQVcsR0FBWDtJQUNBLENBQUM7SUF2RVEsc0JBQXNCO1FBTGxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1NBQ2pELENBQUM7aURBTzhCLGVBQU07WUFDRSx1QkFBYztZQUNkLG9CQUFjO1lBQ1osdUNBQWdCO09BVDdDLHNCQUFzQixDQXdFbEM7SUFBRCw2QkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IEJvb2tpbmdTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvYXBpJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Jvb2tpbmctZGV0YWlsLWNvbXBvbmVudCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYm9va2luZy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCb29raW5nRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHVibGljIHN1YnNjcmlwdG9yO1xuICAgIHB1YmxpYyBib29raW5nRGV0YWlsO1xuICAgIHB1YmxpYyBteUl0ZW1zID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYm9va2luZ1NlcnZpY2U6IEJvb2tpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdG9yID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMubXlJdGVtcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5ib29raW5nU2VydmljZS5ib29raW5nR2V0KGlkKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2tpbmdEZXRhaWwgPSByZXNwLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5ib29raW5nRGV0YWlsLmNoZWNrSW4gPSBtb21lbnQodGhpcy5ib29raW5nRGV0YWlsLmNoZWNrSW5EYXRlKS5mb3JtYXQoJ01NLURELVlZWVknKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2tpbmdEZXRhaWwuY2hlY2tPdXQgPSBtb21lbnQodGhpcy5ib29raW5nRGV0YWlsLmNoZWNrT3V0RGF0ZSkuZm9ybWF0KCdNTS1ERC1ZWVlZJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib29raW5nRGV0YWlsLmNyZWF0ZWRPbiA9IG1vbWVudCh0aGlzLmJvb2tpbmdEZXRhaWwuY3JlYXRlZFRpbWUpLmZvcm1hdCgnTU0tREQtWVlZWSBISDptbTpzcycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0aGlzLmJvb2tpbmdEZXRhaWwgPSB7XG4gICAgICAgICAgICAvLyAgICAgJ2lkJzogJzNlMjY5NDJlZDcxYjQwODhiMTJhOTcyZTYwOGFhZmJiJyxcbiAgICAgICAgICAgIC8vICAgICAnY2hlY2tJbic6ICc3LzE3LzIwMTggODo0NzozOCBBTScsXG4gICAgICAgICAgICAvLyAgICAgJ2NoZWNrT3V0JzogJzcvMTcvMjAxOCA4OjQ3OjM4IEFNJyxcbiAgICAgICAgICAgIC8vICAgICAnY3JlYXRlZE9uJzogJzcvMTcvMjAxOCA4OjQ3OjM4IEFNJyxcbiAgICAgICAgICAgIC8vICAgICAnaG90ZWwnOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICduYW1lJzogJ1FpdSBIb3RlbCBTdWtodW12aXQnLFxuICAgICAgICAgICAgLy8gICAgICAgICAnY2l0eSc6ICdCYW5na29rJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgJ2NvdW50cnknOiAnVGhhaWxhbmQnLFxuICAgICAgICAgICAgLy8gICAgICAgICAnaW1hZ2VVcmwnOiAnaHR0cHM6Ly90cmFiYmxldGVzdHN0b3JhZ2UuYmxvYi5jb3JlLndpbmRvd3MubmV0L215Y29udGFpbmVyLzE3MDY0MzA0X2QyM2I2MTc1OTFmOTQ3YzU4MzQ3NmUwZmUwMTZmMWY2LmpwZydcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gICAgICd1c2VyJzoge1xuICAgICAgICAgICAgLy8gICAgICAgICAnZmlyc3ROYW1lJzogJ1BoYXQnLFxuICAgICAgICAgICAgLy8gICAgICAgICAnbGFzdE5hbWUnOiAnSG9uZycsXG4gICAgICAgICAgICAvLyAgICAgICAgICdlbWFpbCc6ICdocHBoYXQxOTkyQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAvLyAgICAgICAgICdwaG9uZU51bWJlcic6ICcrNzE2NjM2NzI2Mzc2MzcyMzYnLFxuICAgICAgICAgICAgLy8gICAgICAgICAncG9zdGFsQ29kZSc6ICcxMDAwMCcsXG4gICAgICAgICAgICAvLyAgICAgICAgICdwYXNzcG9ydE51bWJlcic6ICcxMzg3Mjg3ODcyODM3ODInLFxuICAgICAgICAgICAgLy8gICAgICAgICAnZmlyc3RBZGRyZXNzJzogJzI2MTAgQmFybmVzIFN0cmVldCcsXG4gICAgICAgICAgICAvLyAgICAgICAgICdzZWNvbmRBZGRyZXNzJzogJ0xha2UgQnVlbmEgVmlzdGEnLFxuICAgICAgICAgICAgLy8gICAgICAgICAnbmF0aW9uYWxpdHknOiAnVVNBJ1xuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgJ3RvdGFsUHJpY2UnOiAxMDAsXG4gICAgICAgICAgICAvLyAgICAgJ3Jvb21zJzogW3tcbiAgICAgICAgICAgIC8vICAgICAgICAgJ3Jvb21JZCc6ICcxMTFjYWJhNjk4YmE0ZTlkYjUzYTg2ODFlZTVjMzJmYicsXG4gICAgICAgICAgICAvLyAgICAgICAgICdyb29tTmFtZSc6ICcgTGFyZ2UgRG91YmxlIFJvb20nLFxuICAgICAgICAgICAgLy8gICAgICAgICAndHlwZXMnOiBbe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgJ3Jvb21UeXBlJzogJ1NpbmdsZSBSb29tIHdpdGggV2luZG93JyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICdxdWFudGl0eSc6IDEsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAncmF0ZSc6IDIuNVxuICAgICAgICAgICAgLy8gICAgICAgICB9LCB7ICdyb29tVHlwZSc6ICdEb3VibGUgT2NjdXBhbmN5JywgJ3F1YW50aXR5JzogMSwgJ3JhdGUnOiAzIH1dXG4gICAgICAgICAgICAvLyAgICAgfSwge1xuICAgICAgICAgICAgLy8gICAgICAgICAncm9vbUlkJzogJzQxMGJjNzEzOTc4MzQ3YzhhYTk4Mjc4YTdjMmNhZWYyJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgJ3Jvb21OYW1lJzogJ0ZhbWlseSBSb29tICgzIEFkdWx0cyknLFxuICAgICAgICAgICAgLy8gICAgICAgICAndHlwZXMnOiBbeyAncm9vbVR5cGUnOiAnRmFtaWx5IFJvb20nLCAncXVhbnRpdHknOiAyLCAncmF0ZSc6IDQgfV1cbiAgICAgICAgICAgIC8vICAgICB9XSxcbiAgICAgICAgICAgIC8vICAgICAnYWRkT25zJzogW3tcbiAgICAgICAgICAgIC8vICAgICAgICAgJ2lkJzogJzE4ZjNiNGM1NDU0YTQwZmQ5YjJlYjEwNTcyNjRjMDU5JyxcbiAgICAgICAgICAgIC8vICAgICAgICAgJ25hbWUnOiAnTWFzc2FnZScsXG4gICAgICAgICAgICAvLyAgICAgICAgICdwcmljZSc6IDEyMFxuICAgICAgICAgICAgLy8gICAgIH0sIHsgJ2lkJzogJ2UzZjZmODkxZTc3YjQ1YzA4ZjllZGQ4NTIzMmI3MjBiJywgJ25hbWUnOiAnU2VhZm9vZCBCdWZmZXQgJywgJ3ByaWNlJzogMjAgfV1cbiAgICAgICAgICAgIC8vIH07XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIH1cbn0iXX0=