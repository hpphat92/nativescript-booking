import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import 'rxjs/add/operator/map';
import { BookingService } from '~/shared/api';
import * as moment from 'moment';

@Component({
    selector: 'booking-detail-component',
    moduleId: module.id,
    templateUrl: './booking-detail.component.html',
})
export class BookingDetailComponent implements OnInit, OnDestroy {

    public subscriptor;
    public bookingDetail;
    public myItems = [];

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private bookingService: BookingService,
                private routerExtensions: RouterExtensions) {
        this.subscriptor = this.activatedRoute.params.subscribe(({ id }) => {
            this.myItems = [];
            this.bookingService.bookingGet(id).subscribe((resp) => {
                this.bookingDetail = resp.data;
                this.bookingDetail.checkIn = moment(this.bookingDetail.checkInDate).format('MM-DD-YYYY');
                this.bookingDetail.checkOut = moment(this.bookingDetail.checkOutDate).format('MM-DD-YYYY');
                this.bookingDetail.createdOn = moment(this.bookingDetail.createdTime).format('MM-DD-YYYY HH:mm:ss');
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
        })
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}