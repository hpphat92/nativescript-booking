"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var applicationModule = require("tns-core-modules/application");
var moment = require("moment");
var _ = require("lodash");
var Toast = require("nativescript-toast");
var angular_1 = require("nativescript-ui-dataform/angular");
var platform_1 = require("platform");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var page_1 = require("ui/page");
var SearchMainComponent = /** @class */ (function () {
    function SearchMainComponent(router, page, barcodeScanner) {
        this.router = router;
        this.page = page;
        this.barcodeScanner = barcodeScanner;
        this.form = {
            arrivalDate: moment().format('YYYY-MM-DD'),
            departureDate: moment().add(1, 'd').format('YYYY-MM-DD'),
            numberOfNights: 1,
            numberOfPAX: 1,
        };
    }
    SearchMainComponent.prototype.ngOnInit = function () {
    };
    SearchMainComponent.prototype.ngAfterViewInit = function () {
    };
    SearchMainComponent.prototype.goSearchTrip = function () {
        if (this.radDataForm.dataForm.hasValidationErrors()) {
            Toast.makeText('Please fix error fields').show();
            return;
        }
        this.router.navigate(['search-result'], {
            queryParams: this.form
        });
    };
    SearchMainComponent.prototype.onPropertyValidate = function (args) {
        var validationResult = true;
        var dataForm = args.object;
        var otherDate, currentDate;
        switch (args.propertyName) {
            case 'arrivalDate':
                otherDate = dataForm.getPropertyByName('departureDate');
                currentDate = args.entityProperty;
                if (this.parseDate(otherDate.valueCandidate) && this.parseDate(otherDate.valueCandidate) < this.parseDate(currentDate.valueCandidate)) {
                    currentDate.errorMessage = 'Arrival date should less than departure date';
                    validationResult = false;
                    dataForm.notifyValidated('arrivalDate', false);
                }
                else {
                    dataForm.notifyValidated('departureDate', true);
                }
                break;
            case 'departureDate':
                otherDate = dataForm.getPropertyByName('arrivalDate');
                currentDate = args.entityProperty;
                if (this.parseDate(otherDate.valueCandidate) > this.parseDate(currentDate.valueCandidate)) {
                    currentDate.errorMessage = 'Departure date should greater than arrival date';
                    validationResult = false;
                }
                else {
                    otherDate.errorMessage = '';
                    dataForm.notifyValidated('arrivalDate', true);
                }
                break;
        }
        args.returnValue = validationResult;
    };
    // << angular-dataform-property-validate-event
    SearchMainComponent.prototype.onPropertyValidated = function (args) {
        var dataForm = args.object, propertyName = args.propertyName;
        var arrivalDateProp = dataForm.getPropertyByName('arrivalDate');
        var departureDateProp = dataForm.getPropertyByName('departureDate');
        if (propertyName === 'arrivalDate' || propertyName === 'departureDate') {
            if (arrivalDateProp.isValid && departureDateProp.isValid
                && this.parseDate(departureDateProp.valueCandidate) && this.parseDate(arrivalDateProp.valueCandidate)) {
                var numberOfNights = moment(departureDateProp.valueCandidate, 'YYYY-MM-DD').diff(moment(arrivalDateProp.valueCandidate, 'YYYY-MM-DD'), 'd');
                if (platform_1.isAndroid) {
                    numberOfNights = moment(this.parseDate(departureDateProp.valueCandidate)).diff(this.parseDate(arrivalDateProp.valueCandidate), 'd');
                }
                this.form = tslib_1.__assign({}, this.form, { arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: this.parseDate(departureDateProp.valueCandidate), numberOfNights: numberOfNights });
                _.extend(dataForm.source, this.form);
            }
            else {
                if (arrivalDateProp.isValid && this.parseDate(arrivalDateProp.valueCandidate) && !(this.parseDate(departureDateProp.valueCandidate) && departureDateProp.isValid)) {
                    this.form = tslib_1.__assign({}, this.form, { arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: moment(this.parseDate(arrivalDateProp.valueCandidate), 'YYYY-MM-DD').add(+args.entityProperty.valueCandidate, 'd').format('YYYY-MM-DD'), numberOfNights: 1 });
                    _.extend(dataForm.source, this.form);
                }
            }
        }
        if (propertyName === 'numberOfNights') {
            var numberOfNights = +args.entityProperty.valueCandidate || 0;
            if (arrivalDateProp.isValid && (platform_1.isAndroid ? +arrivalDateProp.valueCandidate : +moment(arrivalDateProp.valueCandidate, 'YYYY-MM-DD'))) {
                this.form = tslib_1.__assign({}, this.form, { numberOfNights: numberOfNights, arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: moment(this.parseDate(arrivalDateProp.valueCandidate), 'YYYY-MM-DD').add(+args.entityProperty.valueCandidate, 'd').format('YYYY-MM-DD') });
                _.extend(dataForm.source, this.form);
            }
        }
    };
    SearchMainComponent.prototype.parseDate = function (dateStringOrNumber) {
        if (platform_1.isAndroid) {
            return (moment(+dateStringOrNumber) || moment(dateStringOrNumber)).format('YYYY-MM-DD');
        }
        else {
            return +dateStringOrNumber ? (moment(+dateStringOrNumber) || moment(dateStringOrNumber)).format('YYYY-MM-DD') : dateStringOrNumber;
        }
        // This is either number in string or date formatted in string
    };
    SearchMainComponent.prototype.onEditorUpdate = function (args) {
        if (args.propertyName == 'numberOfNights' || args.propertyName == 'numberOfPAX') {
            this.changeEditorSpacing(args.editor);
        }
        if (args.propertyName == 'arrivalDate' || args.propertyName == 'departureDate') {
            this.changeDateFormatting(args.editor);
        }
    };
    SearchMainComponent.prototype.changeEditorSpacing = function (editor) {
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
    SearchMainComponent.prototype.changeDateFormatting = function (editor) {
        if (applicationModule.ios) {
            var dateFormatter = NSDateFormatter.alloc().init();
            dateFormatter.dateFormat = 'yyyy-MM-dd';
            editor.dateFormatter = dateFormatter;
        }
        else {
            var simpleDateFormat = new java.text.SimpleDateFormat('yyyy-MM-dd', java.util.Locale.US);
            editor.setDateFormat && editor.setDateFormat(simpleDateFormat);
        }
    };
    SearchMainComponent.prototype.requestPermission = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.barcodeScanner.available().then(function (available) {
                if (available) {
                    _this.barcodeScanner.hasCameraPermission().then(function (granted) {
                        if (!granted) {
                            _this.barcodeScanner.requestCameraPermission().then(function () {
                                resolve('Camera permission granted');
                            });
                        }
                        else {
                            resolve('Camera permission was already granted');
                        }
                    });
                }
                else {
                    reject('This device does not have an available camera');
                }
            });
        });
    };
    SearchMainComponent.prototype.scanBarcode = function () {
        var _this = this;
        this.requestPermission().then(function (result) {
            _this.barcodeScanner.scan({
                cancelLabel: 'Cancel',
                message: 'Scan Booking QR Code',
                preferFrontCamera: false,
                showFlipCameraButton: false
            }).then(function (result) {
                _this.router.navigate(['booking-detail', result.text]);
            }, function (error) {
            });
        }, function (error) {
            console.log('ERROR', error);
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild(angular_1.RadDataFormComponent),
        tslib_1.__metadata("design:type", angular_1.RadDataFormComponent)
    ], SearchMainComponent.prototype, "radDataForm", void 0);
    SearchMainComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'search-main-component',
            moduleId: module.id,
            templateUrl: './search-main.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            page_1.Page,
            nativescript_barcodescanner_1.BarcodeScanner])
    ], SearchMainComponent);
    return SearchMainComponent;
}());
exports.SearchMainComponent = SearchMainComponent;
