import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as applicationModule from 'tns-core-modules/application';
import { PropertyValidator } from 'nativescript-ui-dataform';
import { registerElement } from 'nativescript-angular';
import * as moment from 'moment';
import * as Toast from 'nativescript-toast';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';
import { isAndroid, isIOS } from 'platform';

declare var java: any;
declare var NSDateFormatter: any;

@Component({
    selector: 'search-main-component',
    moduleId: module.id,
    templateUrl: './search-main.component.html',
})
export class SearchMainComponent implements OnInit, AfterViewInit {

    @ViewChild(RadDataFormComponent)
    public radDataForm: RadDataFormComponent;
    public formMetadata = {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
        'propertyAnnotations':
            [
                {
                    'name': 'arrivalDate',
                    'displayName': 'Arrival Date',
                    'index': 0,
                    'editor': 'DatePicker',
                    'validators': [
                        { 'name': 'NonEmpty' },
                    ]
                },
                {
                    'name': 'departureDate',
                    'displayName': 'Departure Date',
                    'index': 1,
                    'editor': 'DatePicker',
                    'validators': [
                        { 'name': 'NonEmpty' },
                    ]
                },
                {
                    'name': 'numberOfNights',
                    'displayName': 'No. night',
                    'index': 2,
                    'readOnly': true,
                    'validators': [
                        { 'name': 'NonEmpty' },
                        {
                            'name': 'RegEx',
                            'params': {
                                'regEx': '^\\d{0,2}$',
                                'errorMessage': 'No. night should >0 and <100'
                            }
                        }
                    ]
                },
                {
                    'name': 'numberOfPAX',
                    'displayName': 'No. PAX',
                    'index': 3,
                    'validators': [
                        {
                            'name': 'NonEmpty',
                            'params': {
                                'errorMessage': 'Please provide your number of passagers.'
                            }
                        },
                        {
                            'name': 'RegEx',
                            'params': {
                                'regEx': '^[1-9][0-9]{0,2}$',
                                'errorMessage': 'No. PAX should >0 and <1000'
                            }
                        }
                    ]
                },
            ]
    };
    form: { arrivalDate: string, departureDate: string, numberOfNights: number, numberOfPAX: number } = {
        arrivalDate: moment().format('YYYY-MM-DD'),
        departureDate: moment().add(1, 'd').format('YYYY-MM-DD'),
        numberOfNights: 1,
        numberOfPAX: 1,
    };

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }

    goSearchTrip() {
        if (this.radDataForm.dataForm.hasValidationErrors()) {
            Toast.makeText('Please fix error fields').show();
            return;
        }
        this.router.navigate(['search-result'], {
            queryParams: this.form
        })
    }

    public onPropertyValidate(args) {
        let validationResult = true;
        const dataForm = args.object;
        let otherDate, currentDate;
        switch (args.propertyName) {
            case 'arrivalDate':
                otherDate = dataForm.getPropertyByName('departureDate');
                currentDate = args.entityProperty;
                if (this.parseDate(otherDate.valueCandidate) && this.parseDate(otherDate.valueCandidate) < this.parseDate(currentDate.valueCandidate)) {
                    currentDate.errorMessage = 'Arrival date should less than departure date';
                    validationResult = false;
                    dataForm.notifyValidated('arrivalDate', false);
                } else {
                    dataForm.notifyValidated('departureDate', true);
                }
                break;
            case 'departureDate':
                otherDate = dataForm.getPropertyByName('arrivalDate');
                currentDate = args.entityProperty;
                if (this.parseDate(otherDate.valueCandidate) > this.parseDate(currentDate.valueCandidate)) {
                    currentDate.errorMessage = 'Departure date should greater than arrival date';
                    validationResult = false;
                } else {
                    otherDate.errorMessage = '';
                    dataForm.notifyValidated('arrivalDate', true);
                }
                break;
        }
        args.returnValue = validationResult;
    }

// << angular-dataform-property-validate-event
    public onPropertyValidated(args) {
        let { object: dataForm, propertyName } = args;
        let arrivalDateProp = dataForm.getPropertyByName('arrivalDate');
        let departureDateProp = dataForm.getPropertyByName('departureDate');
        if (propertyName === 'arrivalDate' || propertyName === 'departureDate') {
            if (arrivalDateProp.isValid && departureDateProp.isValid
                && this.parseDate(departureDateProp.valueCandidate) && this.parseDate(arrivalDateProp.valueCandidate)) {
                let numberOfNights = moment(departureDateProp.valueCandidate, 'YYYY-MM-DD').diff(moment(arrivalDateProp.valueCandidate, 'YYYY-MM-DD'), 'd');
                if (isAndroid) {
                    numberOfNights = moment(this.parseDate(departureDateProp.valueCandidate)).diff(this.parseDate(arrivalDateProp.valueCandidate), 'd');
                }
                this.form = {
                    ...this.form,
                    arrivalDate: this.parseDate(arrivalDateProp.valueCandidate),
                    departureDate: this.parseDate(departureDateProp.valueCandidate),
                    numberOfNights
                };
                dataForm.reload();
            } else {
                if (arrivalDateProp.isValid && this.parseDate(arrivalDateProp.valueCandidate) && !(this.parseDate(departureDateProp.valueCandidate) && departureDateProp.isValid)) {
                    this.form = {
                        ...this.form,
                        arrivalDate: this.parseDate(arrivalDateProp.valueCandidate),
                        departureDate: moment(this.parseDate(arrivalDateProp.valueCandidate), 'YYYY-MM-DD').add(+args.entityProperty.valueCandidate, 'd').format('YYYY-MM-DD'),
                        numberOfNights: 1
                    };
                }
            }
        }
        if (propertyName === 'numberOfNights') {
            let numberOfNights = +args.entityProperty.valueCandidate || 0;
            if (arrivalDateProp.isValid && +arrivalDateProp.valueCandidate) {
                this.form = {
                    ...this.form,
                    numberOfNights,
                    arrivalDate: this.parseDate(arrivalDateProp.valueCandidate),
                    departureDate: moment(+arrivalDateProp.valueCandidate).add(numberOfNights, 'd').format('YYYY-MM-DD'),
                };
                dataForm.reload();
            }
        }
        // if (propertyName === 'password') {
        //     const dataForm = args.object;
        //     const password2 = dataForm.getPropertyByName('password2');
        //     const password1 = args.entityProperty;
        //     if (password2.valueCandidate !== '') {
        //         if (password1.valueCandidate !== password2.valueCandidate) {
        //             dataForm.notifyValidated('password2', false);
        //         } else {
        //             dataForm.notifyValidated('password2', true);
        //         }
        //     }
        // }
    }

    public parseDate(dateStringOrNumber) {
        if (isAndroid) {
            return (moment(+dateStringOrNumber) || moment(dateStringOrNumber)).format('YYYY-MM-DD');
        } else {
            return +dateStringOrNumber ? (moment(+dateStringOrNumber) || moment(dateStringOrNumber)).format('YYYY-MM-DD') : dateStringOrNumber;
        }
        // This is either number in string or date formatted in string
    }

    public onEditorUpdate(args) {
        if (args.propertyName == 'numberOfNights' || args.propertyName == 'numberOfPAX') {
            this.changeEditorSpacing(args.editor);
        }
        if (args.propertyName == 'arrivalDate' || args.propertyName == 'departureDate') {
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
}