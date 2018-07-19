import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import * as moment from 'moment';
import AppConstant from '~/app.constant';
import 'rxjs/add/operator/map';
import { BookingService, ReserveModel } from '~/shared/api';
import * as _ from 'lodash';
import { action } from 'tns-core-modules/ui/dialogs';
import { FilePhotoview } from 'nativescript-file-photoview';
import PageService from '~/page/page.service';
import { isAndroid, isIOS } from 'platform';
import BookingSourceEnum = ReserveModel.BookingSourceEnum;
import { RadListViewComponent } from 'nativescript-ui-listview/angular';

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
    public hotel: any = {
        images: []
    };
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
                this.pageService.selectedBookingInfo = {
                    hotel: this.hotel
                };
                this.totalRates = this.hotel.rooms.reduce((a, b) => {
                    return a + b.rateTypes.length
                }, 0);
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

    public choiceRoom(rate, roomItem) {
        let options = {
            title: 'Choice Amount',
            message: 'Select how many rooms you need',
            cancelButtonText: 'Cancel',
            actions: _.times(rate.availableQuantity + 1, (value) => {
                return `${value} - $${(value * rate.rate).toFixed(2)}`;
            })
        };

        action(options).then((result) => {
            if (result.toLowerCase() !== 'cancel') {
                let amountSelected = +result.split('-')[0].trim();
                roomItem.text = amountSelected + ' room(s)';
                rate.amountSelected = amountSelected;
                this.updateTotalPrice();
            }
        });
    }

    public updateTotalPrice() {
        this.totalPrice = _.reduce(this.hotel.rooms, (m, room) => {
            return m + _.reduce(room.rateTypes, (a, b) => a + (b.amountSelected || 0) * b.rate, 0);
        }, 0);
        // Update room model
        this.pageService.selectedBookingInfo = {
            id: this.searchCriteria.id,
            checkIn: moment(this.searchCriteria.arrivalDate, 'YYYY-MM-DD').format(AppConstant.typeFormat.date),
            checkOut: moment(this.searchCriteria.departureDate, 'YYYY-MM-DD').format(AppConstant.typeFormat.date),
            bookingSource: BookingSourceEnum.Manual,
            arrivalTime: '',
            itemTypeReserves: _.compact(_.flatten(_.map(this.hotel.rooms, (room) => {
                return _.map(room.rateTypes, (rate) => {
                    if (rate.amountSelected) {
                        return {
                            itemId: room.id,
                            rateTypeId: rate.id,
                            quantity: rate.amountSelected
                        }
                    }
                })
            })))
        }
    }

    public viewPhoto(idx) {
        // Display the photo
        this.filePhotoView.startIndex = idx;
        this.filePhotoView.showViewer(this.hotel.images);
    }

    public goBookingTab() {
        this.tabSelectedIndex = 2;
    }

    public goChoiceRooms() {
        this.tabSelectedIndex = 3;
    }

    public bookRooms() {
        this.router.navigate(['review-booking']);
    }

    public onItemSelected(e) {
        let selectedItems = e.object.getSelectedItems();
        this.pageService.selectedBookingInfo = {
            addOns: _.map(selectedItems, 'id')
        };
    }
}