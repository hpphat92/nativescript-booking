"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
require("rxjs/add/operator/map");
var api_1 = require("~/shared/api");
var page_service_1 = require("~/page/page.service");
var applicationModule = require("tns-core-modules/application");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var ConfirmBookingComponent = /** @class */ (function () {
    function ConfirmBookingComponent(route, router, bookingService, pageService, routerExtensions) {
        this.route = route;
        this.router = router;
        this.bookingService = bookingService;
        this.pageService = pageService;
        this.routerExtensions = routerExtensions;
        this.processingBooking = false;
        this.isCompleted = false;
        this.progressValue = 0;
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
        this.form = {
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
    }
    ConfirmBookingComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ConfirmBookingComponent.prototype.onEditorUpdate = function (args) {
        if (args.propertyName == 'birthdate') {
            this.changeDateFormatting(args.editor);
        }
    };
    ConfirmBookingComponent.prototype.changeEditorSpacing = function (editor) {
        if (applicationModule.ios) {
            var labelDef = editor.gridLayout.definitionForView(editor.valueLabel);
            labelDef.contentOffset = {
                horizontal: -25,
                vertical: 0
            };
        }
        else {
            editor.getHeaderView().setPadding(12, 12, 12, 48);
        }
    };
    ConfirmBookingComponent.prototype.changeDateFormatting = function (editor) {
        if (applicationModule.ios) {
            var dateFormatter = NSDateFormatter.alloc().init();
            dateFormatter.dateFormat = 'yyyy-MM-dd';
            editor.dateFormatter = dateFormatter;
        }
        else {
            var simpleDateFormat = new java.text.SimpleDateFormat('yyyy-MM-dd', java.util.Locale.US);
            editor.setDateFormat(simpleDateFormat);
        }
    };
    ConfirmBookingComponent.prototype.showConfirmDialog = function () {
        var _this = this;
        var options = {
            title: 'Confirm booking',
            message: ' Are you sure want to process the booking? Those steps can be undone via direcly call to us at +0109919191198.',
            okButtonText: 'Yes',
            cancelButtonText: 'No'
        };
        dialogs_1.confirm(options).then(function (isOk) {
            if (isOk) {
                _this.pageService.selectedBookingInfo = {
                    user: _this.form,
                    remarks: _this.form.remarks
                };
                var callTimeout_1 = _this.timeout();
                var model = _this.pageService.selectedBookingInfo;
                _this.bookingService.bookingReserve(model.id, model)
                    .subscribe(function () {
                    callTimeout_1(function () {
                        _this.showDialogCompleted();
                    });
                });
            }
        });
    };
    ConfirmBookingComponent.prototype.showDialogCompleted = function () {
        var _this = this;
        var options = {
            title: 'Booking request status',
            message: 'Your request has been recorded. Enjoy your trip :)',
            okButtonText: 'Back to home'
        };
        dialogs_1.alert(options).then(function () {
            _this.router.navigate(['']);
        });
    };
    ConfirmBookingComponent.prototype.timeout = function () {
        var _this = this;
        this.progressValue = 0;
        this.processingBooking = true;
        var timedOut = null;
        var runLoop = function () {
            timedOut = setTimeout(function () {
                _this.progressValue += Math.random() * 10;
                if (_this.progressValue > 99) {
                    _this.progressValue = 99;
                    return;
                }
                runLoop();
            }, Math.random() * 1000);
        };
        runLoop();
        return function (cb) {
            timedOut && clearTimeout(timedOut);
            setTimeout(function () {
                cb && cb();
            }, 1000);
            _this.progressValue = 100;
        };
    };
    ConfirmBookingComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'confirm-booking-component',
            moduleId: module.id,
            templateUrl: './confirm-booking.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            api_1.BookingService,
            page_service_1.default,
            nativescript_angular_1.RouterExtensions])
    ], ConfirmBookingComponent);
    return ConfirmBookingComponent;
}());
exports.ConfirmBookingComponent = ConfirmBookingComponent;
