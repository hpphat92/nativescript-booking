import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import * as moment from 'moment';
import AppConstant from '~/app.constant';
import 'rxjs/add/operator/map';
import { BookingService } from '~/shared/api';
import * as _ from 'lodash';

@Component({
    selector: 'hotel-detail-component',
    moduleId: module.id,
    templateUrl: './hotel-detail.component.html',
})
export class HotelDetailComponent implements OnInit, OnDestroy {
    public subscription;
    public searchCriteria;
    public hotel: any = {};
    public roomList = [];
    public totalRates = 0;
    public currentSelectedPhoto;
    public numberOfSelectAmounts = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private bookingService: BookingService,
                private routerExtensions: RouterExtensions) {
        this.subscription = this.route.queryParams.subscribe((e) => {
            this.searchCriteria = e || {};
            this.getHotelDetail().subscribe(() => {

            })
        })
    }

    ngOnInit(): void {
    }

    public getHotelDetail() {
        return this.bookingService.bookingDetailProperty(
            this.searchCriteria.id,
            moment(+this.searchCriteria.arrivalDate).format(AppConstant.typeFormat.date),
            moment(+this.searchCriteria.departureDate).format(AppConstant.typeFormat.date),
            this.searchCriteria.numberOfPAX
        )
            .map((resp: any) => {
                this.hotel = resp.data;
                this.totalRates = this.hotel.rooms.reduce((a, b) => {
                    return a + b.rateTypes.length
                }, 0);
                this.roomList = _.flatten(_.map(this.hotel.rooms, (room) => {
                        return _.map(room.rateTypes, (rateType, i) => {
                            return {
                                room,
                                rateType, numRowSpan: !i ? room.rateTypes.length : 0,
                            }
                        })
                    })
                )
                debugger;
            })
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    ngOnDestroy(): void {
        this.subscription && this.subscription.unsubscribe();
    }

    public showPhoto(photo) {
        this.currentSelectedPhoto = photo;
    }
}