import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyValidator } from 'nativescript-ui-dataform';
import { registerElement } from 'nativescript-angular';
import * as moment from 'moment';
import * as Toast from 'nativescript-toast';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';

@Component({
    selector: 'search-main-component',
    moduleId: module.id,
    templateUrl: './search-main.component.html',
})
export class SearchMainComponent implements OnInit {

    @ViewChild(RadDataFormComponent)
    public radDataForm: RadDataFormComponent;
    public formMetadata = {
        'isReadOnly': false,
        'commitMode': 'OnLostFocus',
        'validationMode': 'OnLostFocus',
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
    form: { arrivalDate: number, departureDate: number, numberOfNights: number, numberOfPAX: number } = {
        arrivalDate: null,
        departureDate: null,
        numberOfNights: 0,
        numberOfPAX: 1,
    };

    constructor(private router: Router) {
        console.log('Init Login');
    }

    ngOnInit(): void {
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
                if (+otherDate.valueCandidate && +otherDate.valueCandidate < +currentDate.valueCandidate) {
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
                if (+currentDate.valueCandidate && +otherDate.valueCandidate > +currentDate.valueCandidate) {
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
                && +departureDateProp.valueCandidate && +arrivalDateProp.valueCandidate) {
                this.form = {
                    ...this.form,
                    arrivalDate: +arrivalDateProp.valueCandidate,
                    departureDate: +departureDateProp.valueCandidate,
                    numberOfNights: moment(+departureDateProp.valueCandidate).diff(+arrivalDateProp.valueCandidate, 'd')
                };
                dataForm.reload();
            }
        }
        if (propertyName === 'numberOfNights') {
            if (arrivalDateProp.isValid && +arrivalDateProp.valueCandidate) {
                this.form = {
                    ...this.form,
                    numberOfNights: +args.entityProperty.valueCandidate,
                    arrivalDate: +arrivalDateProp.valueCandidate,
                    departureDate: +moment(+arrivalDateProp.valueCandidate).add(+args.entityProperty.valueCandidate, 'd').toDate(),
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
}