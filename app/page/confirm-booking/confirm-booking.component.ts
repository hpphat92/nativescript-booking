import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { registerElement, RouterExtensions } from 'nativescript-angular';
import * as moment from 'moment';
import AppConstant from '~/app.constant';
import 'rxjs/add/operator/map';
import { BookingService } from '~/shared/api';

@Component({
    selector: 'confirm-booking-component',
    moduleId: module.id,
    templateUrl: './confirm-booking.component.html',
})
export class ConfirmBookingComponent {
}