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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LWJvb2tpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmV2aWV3LWJvb2tpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUQ7QUFDekQsNkRBQXdEO0FBQ3hELGlDQUErQjtBQUMvQiwwQkFBMkI7QUFFM0Isb0NBQThDO0FBQzlDLG9EQUE4QztBQU85QztJQUlJLGdDQUFvQixNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsZ0JBQWtDO1FBSnRELGlCQXdEQztRQXhEbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsRCxJQUFJLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7UUFDakUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzdELElBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25HLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxTQUFTLEVBQUUsTUFBTTtZQUM3RCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQztnQkFDSCxNQUFNLEVBQUUs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MkVsQztJQUFELDZCQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IEJvb2tpbmdTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvYXBpJztcbmltcG9ydCBQYWdlU2VydmljZSBmcm9tICd+L3BhZ2UvcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyZXZpZXctYm9va2luZy1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Jldmlldy1ib29raW5nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmV2aWV3Qm9va2luZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHB1YmxpYyBib29raW5nRGV0YWlsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIEJvb2tpbmdTZXJ2aWNlOiBCb29raW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRCb29raW5nUmVxdWVzdCA9IHRoaXMucGFnZVNlcnZpY2Uuc2VsZWN0ZWRCb29raW5nSW5mbztcbiAgICAgICAgbGV0IHJvb21zID0gdGhpcy5wYWdlU2VydmljZS5zZWxlY3RlZEJvb2tpbmdJbmZvLmhvdGVsLnJvb21zO1xuICAgICAgICBsZXQgbGlzdFNlbGVjdGVkUm9vbXMgPSBfLmdyb3VwQnkodGhpcy5wYWdlU2VydmljZS5zZWxlY3RlZEJvb2tpbmdJbmZvLml0ZW1UeXBlUmVzZXJ2ZXMsICdpdGVtSWQnKTtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgbGV0IGxpc3RSb29tc0RldGFpbCA9IF8ubWFwKGxpc3RTZWxlY3RlZFJvb21zLCAobGlzdEl0ZW1zLCBpdGVtSWQpID0+IHtcbiAgICAgICAgICAgIGxldCByb29tID0gXy5maW5kKHJvb21zLCB7IGlkOiBpdGVtSWQgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJvb21JZDogaXRlbUlkLFxuICAgICAgICAgICAgICAgIHJvb21OYW1lOiByb29tID8gcm9vbS5uYW1lIDogJycsXG4gICAgICAgICAgICAgICAgdHlwZXM6IF8ubWFwKGxpc3RJdGVtcywgKHJhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkUmF0ZSA9IF8uZmluZChyb29tLnJhdGVUeXBlcywgeyBpZDogcmF0ZS5yYXRlVHlwZUlkIH0pO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCArPSAocmF0ZS5xdWFudGl0eSAqIChzZWxlY3RlZFJhdGUgPyBzZWxlY3RlZFJhdGUucmF0ZSA6IDApKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiByYXRlLnF1YW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZTogc2VsZWN0ZWRSYXRlID8gc2VsZWN0ZWRSYXRlLnJhdGUgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbVR5cGU6IHNlbGVjdGVkUmF0ZSA/IHNlbGVjdGVkUmF0ZS5uYW1lIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYWRkT25zID0gXy5jb21wYWN0KF8ubWFwKHRoaXMucGFnZVNlcnZpY2Uuc2VsZWN0ZWRCb29raW5nSW5mby5hZGRPbnMsIChpZCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpbmRpbmdBZGRPbnMgPSBfLmZpbmQodGhpcy5wYWdlU2VydmljZS5zZWxlY3RlZEJvb2tpbmdJbmZvLmhvdGVsLmFkZE9ucywgeyBpZCB9KTtcbiAgICAgICAgICAgIHRvdGFsICs9IChmaW5kaW5nQWRkT25zID8gZmluZGluZ0FkZE9ucy5wcmljZSA6IDApO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmRpbmdBZGRPbnM7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5ib29raW5nRGV0YWlsID0ge1xuICAgICAgICAgICAgJ2NoZWNrSW4nOiBjdXJyZW50Qm9va2luZ1JlcXVlc3QuY2hlY2tJbixcbiAgICAgICAgICAgICdjaGVja091dCc6IGN1cnJlbnRCb29raW5nUmVxdWVzdC5jaGVja091dCxcbiAgICAgICAgICAgICdjcmVhdGVkT24nOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgcm9vbXM6IGxpc3RSb29tc0RldGFpbCxcbiAgICAgICAgICAgIGFkZE9ucyxcbiAgICAgICAgICAgIHRvdGFsXG4gICAgICAgICAgICAvLyAncm9vbXMnOiBbe1xuICAgICAgICAgICAgLy8gICAgICdyb29tSWQnOiAnMTExY2FiYTY5OGJhNGU5ZGI1M2E4NjgxZWU1YzMyZmInLFxuICAgICAgICAgICAgLy8gICAgICdyb29tTmFtZSc6ICcgTGFyZ2UgRG91YmxlIFJvb20nLFxuICAgICAgICAgICAgLy8gICAgICd0eXBlcyc6IFt7XG4gICAgICAgICAgICAvLyAgICAgICAgICdyb29tVHlwZSc6ICdTaW5nbGUgUm9vbSB3aXRoIFdpbmRvdycsXG4gICAgICAgICAgICAvLyAgICAgICAgICdxdWFudGl0eSc6IDEsXG4gICAgICAgICAgICAvLyAgICAgICAgICdyYXRlJzogMi41XG4gICAgICAgICAgICAvLyAgICAgfSwgeyAncm9vbVR5cGUnOiAnRG91YmxlIE9jY3VwYW5jeScsICdxdWFudGl0eSc6IDEsICdyYXRlJzogMyB9XVxuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgICdyb29tSWQnOiAnNDEwYmM3MTM5NzgzNDdjOGFhOTgyNzhhN2MyY2FlZjInLFxuICAgICAgICAgICAgLy8gICAgICdyb29tTmFtZSc6ICdGYW1pbHkgUm9vbSAoMyBBZHVsdHMpJyxcbiAgICAgICAgICAgIC8vICAgICAndHlwZXMnOiBbeyAncm9vbVR5cGUnOiAnRmFtaWx5IFJvb20nLCAncXVhbnRpdHknOiAyLCAncmF0ZSc6IDQgfV1cbiAgICAgICAgICAgIC8vIH1dLFxuICAgICAgICAgICAgLy8gJ2FkZE9ucyc6IFt7XG4gICAgICAgICAgICAvLyAgICAgJ2lkJzogJzE4ZjNiNGM1NDU0YTQwZmQ5YjJlYjEwNTcyNjRjMDU5JyxcbiAgICAgICAgICAgIC8vICAgICAnbmFtZSc6ICdNYXNzYWdlJyxcbiAgICAgICAgICAgIC8vICAgICAncHJpY2UnOiAxMjBcbiAgICAgICAgICAgIC8vIH0sIHsgJ2lkJzogJ2UzZjZmODkxZTc3YjQ1YzA4ZjllZGQ4NTIzMmI3MjBiJywgJ25hbWUnOiAnU2VhZm9vZCBCdWZmZXQgJywgJ3ByaWNlJzogMjAgfV1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdvQ29uZmlybUJvb2tpbmcoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY29uZmlybS1ib29raW5nJ10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIH1cbn0iXX0=