import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import 'rxjs/add/operator/map';
import * as _ from 'lodash'

import { BookingService } from '~/shared/api';
import PageService from '~/page/page.service';

@Component({
    selector: 'review-booking-component',
    moduleId: module.id,
    templateUrl: './review-booking.component.html',
})
export class ReviewBookingComponent implements OnInit, OnDestroy {

    public bookingDetail;

    constructor(private router: Router,
                private BookingService: BookingService,
                private pageService: PageService,
                private activatedRoute: ActivatedRoute,
                private routerExtensions: RouterExtensions) {
        let currentBookingRequest = this.pageService.selectedBookingInfo;
        let rooms = this.pageService.selectedBookingInfo.hotel.rooms;
        let listSelectedRooms = _.groupBy(this.pageService.selectedBookingInfo.itemTypeReserves, 'itemId');
        let total = 0;
        let listRoomsDetail = _.map(listSelectedRooms, (listItems, itemId) => {
            let room = _.find(rooms, { id: itemId });
            return {
                roomId: itemId,
                roomName: room ? room.name : '',
                types: _.map(listItems, (rate) => {
                    let selectedRate = _.find(room.rateTypes, { id: rate.rateTypeId });
                    total += (rate.quantity * (selectedRate ? selectedRate.rate : 0));
                    return {
                        quantity: rate.quantity,
                        rate: selectedRate ? selectedRate.rate : 0,
                        roomType: selectedRate ? selectedRate.name : ''
                    }
                })
            }
        });
        let addOns = _.compact(_.map(this.pageService.selectedBookingInfo.addOns, (id) => {
            let findingAddOns = _.find(this.pageService.selectedBookingInfo.hotel.addOns, { id });
            total += (findingAddOns ? findingAddOns.price : 0);
            return findingAddOns;
        }));
        this.bookingDetail = {
            'checkIn': currentBookingRequest.checkIn,
            'checkOut': currentBookingRequest.checkOut,
            'createdOn': new Date(),
            rooms: listRoomsDetail,
            addOns,
            total
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

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    public goConfirmBooking() {
        this.router.navigate(['confirm-booking']);
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}