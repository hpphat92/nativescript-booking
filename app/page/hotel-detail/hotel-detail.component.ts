import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import * as moment from 'moment';
import AppConstant from '~/app.constant';
import 'rxjs/add/operator/map';
import { BookingService } from '~/shared/api';
import * as _ from 'lodash';
import { action } from 'tns-core-modules/ui/dialogs';
import { FilePhotoview } from 'nativescript-file-photoview';
import PageService from '~/page/page.service';
import { isAndroid, isIOS } from 'platform';

let PhotoViewer = require('nativescript-photoviewer');

@Component({
    selector: 'hotel-detail-component',
    moduleId: module.id,
    templateUrl: './hotel-detail.component.html',
})
export class HotelDetailComponent implements OnInit, OnDestroy {
    public subscription;
    public times = _.times;
    public searchCriteria;
    public hotel: any = {};
    public roomList = [];
    public totalRates = 0;
    public totalPrice = 0;
    public tabSelectedIndex = 0;
    public filePhotoView;
    public currentSelectedPhoto;
    public numberOfSelectAmounts = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private bookingService: BookingService,
                private pageService: PageService,
                private routerExtensions: RouterExtensions) {
        this.subscription = this.route.queryParams.subscribe((e) => {
            this.searchCriteria = e || {};
            this.getHotelDetail().subscribe(() => {

            })
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

    ngOnInit(): void {
    }

    public getHotelDetail() {
        return this.bookingService.bookingDetailProperty(
            this.searchCriteria.id,
            moment(this.searchCriteria.arrivalDate, 'YYYY-MM-DD').format(AppConstant.typeFormat.date),
            moment(this.searchCriteria.departureDate, 'YYYY-MM-DD').format(AppConstant.typeFormat.date),
            this.searchCriteria.numberOfPAX)
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
                );
            })
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    ngOnDestroy(): void {
        this.subscription && this.subscription.unsubscribe();
        if (global.android) {
            (global as any).gc();
        }
    }

    public choiceRoom(room, roomItem) {
        let options = {
            title: 'Choice Amount',
            message: 'Select how many rooms you need',
            cancelButtonText: 'Cancel',
            actions: _.times(21, (value) => {
                return `${value} - $${(value * room.rate).toFixed(2)}`;
            })
        };

        action(options).then((result) => {
            if (result.toLowerCase() !== 'cancel') {
                let amountSelected = +result.split('-')[0].trim();
                roomItem.text = amountSelected + ' room(s)';
                room.amountSelected = amountSelected;
                this.updateTotalPrice();
            }
        });
    }

    public updateTotalPrice() {
        this.totalPrice = _.reduce(this.hotel.rooms, (m, room) => {
            return m + _.reduce(room.rateTypes, (a, b) => a + (b.amountSelected || 0) * b.rate, 0);
        }, 0);
    }

    public viewPhoto(idx) {
        // Display the photo
        this.filePhotoView.startIndex = idx;
        this.filePhotoView.showViewer(this.hotel.images);
    }

    public goBookingTab() {
        this.tabSelectedIndex = 2;
    }

    public bookRooms() {
        debugger;
        this.router.navigate(['confirm-booking']);
    }
}