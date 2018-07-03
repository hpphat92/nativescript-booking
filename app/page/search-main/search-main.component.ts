import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyValidator } from 'nativescript-ui-dataform';
import { registerElement } from 'nativescript-angular';

class RangeDateValidate extends PropertyValidator {
    constructor() {
        super();
        this.errorMessage = 'Please enter: admin1';
    }

    public validate(value: any, propertyName: string): boolean {
        debugger;
        return value.toLowerCase() === 'admin1';
    }
}

registerElement('RangeDateValidate', () => <any>RangeDateValidate);

@Component({
    selector: 'search-main-component',
    moduleId: module.id,
    templateUrl: './search-main.component.html',
})
export class SearchMainComponent implements OnInit {

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
                        {
                            'name': 'RangeDateValidate',
                            'params': {
                                minRangeComponent: 'departureDate'
                            }
                        }
                    ]
                },
                {
                    'name': 'departureDate',
                    'displayName': 'Departure Date',
                    'index': 1,
                    'editor': 'DatePicker',
                    'validators': [
                        { 'name': 'NonEmpty' },
                        // {
                        //     'name': 'RangeDateValidate',
                        //     'params': {
                        //         maxRangeComponent: 'arrivalDate'
                        //     }
                        // }
                    ]
                },
                {
                    'name': 'numberOfNights',
                    'displayName': 'No. night',
                    'index': 2,
                    'editor': 'Number',
                    'validators': [
                        { 'name': 'NonEmpty' },
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
                    ]
                },
            ]
    };
    form: { arrivalDate: Date, departureDate: Date, numberOfNights: number, numberOfPAX: number } = {
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

    gotoSignup() {
        this.router.navigate(['page', 'signup'])
    }
}