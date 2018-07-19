import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { registerElement, RouterExtensions } from 'nativescript-angular';
import * as moment from 'moment';
import AppConstant from '~/app.constant';
import 'rxjs/add/operator/map';
import { BookingService } from '~/shared/api';
import PageService from '~/page/page.service';
import { FilePhotoview } from 'nativescript-file-photoview';
import * as applicationModule from 'tns-core-modules/application';
import { action, confirm, alert } from 'tns-core-modules/ui/dialogs';

declare var java: any;
declare var NSDateFormatter: any;

@Component({
    selector: 'confirm-booking-component',
    moduleId: module.id,
    templateUrl: './confirm-booking.component.html',
})
export class ConfirmBookingComponent {
    public processingBooking = false;
    public isCompleted = false;
    public progressValue = 0;
    // public form = {
    //     firstName: '',
    //     lastName: '',
    //     birthdate: null,
    //     gender: 0,
    //     email: '',
    //     passportNumber: '',
    //     phoneNumber: '',
    //     nationality: '',
    //     firstAddress: '',
    //     secondAddress: '',
    //     postalCode: '',
    //     remarks: ''
    // };

    public form = {
        firstName: 'Hong',
        lastName: 'Phat',
        birthdate: null,
        gender: 'Male',
        email: 'hpphat1992@gmail.com',
        passportNumber: '122311223213221322',
        phoneNumber: '+84616252615265',
        nationality: 'Viet Nam',
        firstAddress: '51 Hoang Viet P.4',
        secondAddress: 'Tan Binh, HCMC',
        postalCode: '10000',
        remarks: ''
    };

    constructor(private route: ActivatedRoute,
                private router: Router,
                private bookingService: BookingService,
                private pageService: PageService,
                private routerExtensions: RouterExtensions) {
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    public onEditorUpdate(args) {
        if (args.propertyName == 'birthdate') {
            this.changeDateFormatting(args.editor);
        }
    }

    private changeEditorSpacing(editor) {
        if (applicationModule.ios) {
            var labelDef = editor.gridLayout.definitionForView(editor.valueLabel);
            labelDef.contentOffset = {
                horizontal: -25,
                vertical: 0
            };
        } else {
            editor.getHeaderView().setPadding(12, 12, 12, 48);
        }
    }

    private changeDateFormatting(editor) {
        if (applicationModule.ios) {
            var dateFormatter = NSDateFormatter.alloc().init();
            dateFormatter.dateFormat = 'yyyy-MM-dd';
            editor.dateFormatter = dateFormatter;
        } else {
            var simpleDateFormat = new java.text.SimpleDateFormat('yyyy-MM-dd', java.util.Locale.US);
            editor.setDateFormat(simpleDateFormat);
        }
    }

    public showConfirmDialog() {
        let options = {
            title: 'Confirm booking',
            message: ' Are you sure want to process the booking? Those steps can be undone via direcly call to us at +0109919191198.',
            okButtonText: 'Yes',
            cancelButtonText: 'No'
        };

        confirm(options).then((isOk) => {
            if (isOk) {
                this.pageService.selectedBookingInfo = {
                    user: this.form,
                    remarks: this.form.remarks
                };
                let callTimeout = this.timeout();
                let model = this.pageService.selectedBookingInfo;
                this.bookingService.bookingReserve(model.id, model)
                    .subscribe(() => {
                        callTimeout(() => {
                            this.showDialogCompleted();
                        });
                    });
            }
        });
    }

    public showDialogCompleted() {
        let options = {
            title: 'Booking request status',
            message: 'Your request has been recorded. Enjoy your trip :)',
            okButtonText: 'Back to home'
        };
        alert(options).then(() => {
            this.router.navigate(['']);
        });
    }

    public timeout() {
        this.progressValue = 0;
        this.processingBooking = true;
        let timedOut = null;
        let runLoop = () => {

            timedOut = setTimeout(() => {
                this.progressValue += Math.random() * 10;
                if (this.progressValue > 99) {
                    this.progressValue = 99;
                    return;
                }
                runLoop();
            }, Math.random() * 1000);
        };
        runLoop();

        return (cb?) => {
            timedOut && clearTimeout(timedOut);
            setTimeout(() => {
                cb && cb();
            }, 300);
            this.progressValue = 100;
        }
    }
}