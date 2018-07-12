import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { registerElement, RouterExtensions } from 'nativescript-angular';
import * as moment from 'moment';
import AppConstant from '~/app.constant';
import 'rxjs/add/operator/map';
import { BookingService } from '~/shared/api';
import PageService from '~/page/page.service';
import { FilePhotoview } from 'nativescript-file-photoview';

@Component({
    selector: 'confirm-booking-component',
    moduleId: module.id,
    templateUrl: './confirm-booking.component.html',
})
export class ConfirmBookingComponent {

    constructor(private route: ActivatedRoute,
                private router: Router,
                private bookingService: BookingService,
                private pageService: PageService,
                private routerExtensions: RouterExtensions) {

        console.log(this.pageService.selectedBookingInfo);
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}