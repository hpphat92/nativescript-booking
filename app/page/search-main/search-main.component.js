"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var moment = require("moment");
var Toast = require("nativescript-toast");
var angular_1 = require("nativescript-ui-dataform/angular");
var platform_1 = require("platform");
var SearchMainComponent = /** @class */ (function () {
    function SearchMainComponent(router) {
        this.router = router;
        this.formMetadata = {
            'isReadOnly': false,
            'commitMode': 'Immediate',
            'validationMode': 'Immediate',
            'propertyAnnotations': [
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
        this.form = {
            arrivalDate: platform_1.isAndroid ? +new Date() : moment().format('YYYY-MM-DD'),
            departureDate: platform_1.isAndroid ? +moment().add(1, 'days').toDate() : moment().add(1, 'days').format('YYYY-MM-DD'),
            numberOfNights: 1,
            numberOfPAX: 1,
        };
    }
    SearchMainComponent.prototype.ngOnInit = function () {
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
                this.form = tslib_1.__assign({}, this.form, { arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: this.parseDate(departureDateProp.valueCandidate), numberOfNights: moment(this.parseDate(departureDateProp.valueCandidate)).diff(this.parseDate(arrivalDateProp.valueCandidate), 'd') });
                dataForm.reload();
            }
            else {
                if (arrivalDateProp.isValid && this.parseDate(arrivalDateProp.valueCandidate) && !(this.parseDate(departureDateProp.valueCandidate) && departureDateProp.isValid)) {
                    this.form = tslib_1.__assign({}, this.form, { arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: +moment(this.parseDate(arrivalDateProp.valueCandidate)).add(+args.entityProperty.valueCandidate, 'd').toDate(), numberOfNights: 1 });
                }
            }
        }
        if (propertyName === 'numberOfNights') {
            if (arrivalDateProp.isValid && +arrivalDateProp.valueCandidate) {
                this.form = tslib_1.__assign({}, this.form, { numberOfNights: args.entityProperty.valueCandidate, arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: +moment(this.parseDate(arrivalDateProp.valueCandidate)).add(+args.entityProperty.valueCandidate, 'd').toDate() });
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
    };
    SearchMainComponent.prototype.parseDate = function (dateStringOrNumber) {
        // This is either number in string or date formatted in string
        return +moment(+dateStringOrNumber) || +moment(dateStringOrNumber);
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
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], SearchMainComponent);
    return SearchMainComponent;
}());
exports.SearchMainComponent = SearchMainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUM7QUFHekMsK0JBQWlDO0FBQ2pDLDBDQUE0QztBQUM1Qyw0REFBd0U7QUFDeEUscUNBQTRDO0FBTzVDO0lBeUVJLDZCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXJFM0IsaUJBQVksR0FBRztZQUNsQixZQUFZLEVBQUUsS0FBSztZQUNuQixZQUFZLEVBQUUsV0FBVztZQUN6QixnQkFBZ0IsRUFBRSxXQUFXO1lBQzdCLHFCQUFxQixFQUNqQjtnQkFDSTtvQkFDSSxNQUFNLEVBQUUsYUFBYTtvQkFDckIsYUFBYSxFQUFFLGNBQWM7b0JBQzdCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixZQUFZLEVBQUU7d0JBQ1YsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO3FCQUN6QjtpQkFDSjtnQkFDRDtvQkFDSSxNQUFNLEVBQUUsZUFBZTtvQkFDdkIsYUFBYSxFQUFFLGdCQUFnQjtvQkFDL0IsT0FBTyxFQUFFLENBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFlBQVksRUFBRTt3QkFDVixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7cUJBQ3pCO2lCQUNKO2dCQUNEO29CQUNJLE1BQU0sRUFBRSxnQkFBZ0I7b0JBQ3hCLGFBQWEsRUFBRSxXQUFXO29CQUMxQixPQUFPLEVBQUUsQ0FBQztvQkFDVixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsWUFBWSxFQUFFO3dCQUNWLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTt3QkFDdEI7NEJBQ0ksTUFBTSxFQUFFLE9BQU87NEJBQ2YsUUFBUSxFQUFFO2dDQUNOLE9BQU8sRUFBRSxZQUFZO2dDQUNyQixjQUFjLEVBQUUsOEJBQThCOzZCQUNqRDt5QkFDSjtxQkFDSjtpQkFDSjtnQkFDRDtvQkFDSSxNQUFNLEVBQUUsYUFBYTtvQkFDckIsYUFBYSxFQUFFLFNBQVM7b0JBQ3hCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFlBQVksRUFBRTt3QkFDVjs0QkFDSSxNQUFNLEVBQUUsVUFBVTs0QkFDbEIsUUFBUSxFQUFFO2dDQUNOLGNBQWMsRUFBRSwwQ0FBMEM7NkJBQzdEO3lCQUNKO3dCQUNEOzRCQUNJLE1BQU0sRUFBRSxPQUFPOzRCQUNmLFFBQVEsRUFBRTtnQ0FDTixPQUFPLEVBQUUsbUJBQW1CO2dDQUM1QixjQUFjLEVBQUUsNkJBQTZCOzZCQUNoRDt5QkFDSjtxQkFDSjtpQkFDSjthQUNKO1NBQ1IsQ0FBQztRQUNGLFNBQUksR0FBa0g7WUFDbEgsV0FBVyxFQUFFLG9CQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUNwRSxhQUFhLEVBQUUsb0JBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDM0csY0FBYyxFQUFFLENBQUM7WUFDakIsV0FBVyxFQUFFLENBQUM7U0FDakIsQ0FBQztJQUdGLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDBDQUFZLEdBQVo7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRCxLQUFLLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakQsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDcEMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ3pCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxnREFBa0IsR0FBekIsVUFBMEIsSUFBSTtRQUMxQixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM1QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQztRQUMzQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFLLGFBQWE7Z0JBQ2QsU0FBUyxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDeEQsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEksV0FBVyxDQUFDLFlBQVksR0FBRyw4Q0FBOEMsQ0FBQztvQkFDMUUsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO29CQUN6QixRQUFRLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixRQUFRLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDcEQsQ0FBQztnQkFDRCxLQUFLLENBQUM7WUFDVixLQUFLLGVBQWU7Z0JBQ2hCLFNBQVMsR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3RELFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hGLFdBQVcsQ0FBQyxZQUFZLEdBQUcsaURBQWlELENBQUM7b0JBQzdFLGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDN0IsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixTQUFTLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztvQkFDNUIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQztJQUVMLDhDQUE4QztJQUNuQyxpREFBbUIsR0FBMUIsVUFBMkIsSUFBSTtRQUNyQixJQUFBLHNCQUFnQixFQUFFLGdDQUFZLENBQVU7UUFDOUMsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BFLEVBQUUsQ0FBQyxDQUFDLFlBQVksS0FBSyxhQUFhLElBQUksWUFBWSxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDckUsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxPQUFPO21CQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEcsSUFBSSxDQUFDLElBQUksd0JBQ0YsSUFBSSxDQUFDLElBQUksSUFDWixXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQzNELGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxFQUMvRCxjQUFjLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQ3JJLENBQUM7Z0JBQ0YsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEssSUFBSSxDQUFDLElBQUksd0JBQ0YsSUFBSSxDQUFDLElBQUksSUFDWixXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQzNELGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUM3SCxjQUFjLEVBQUUsQ0FBQyxHQUNwQixDQUFDO2dCQUNOLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFlBQVksS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDcEMsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsSUFBSSx3QkFDRixJQUFJLENBQUMsSUFBSSxJQUNaLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFDbEQsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUMzRCxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FDaEksQ0FBQztnQkFDRixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEIsQ0FBQztRQUNMLENBQUM7UUFDRCxxQ0FBcUM7UUFDckMsb0NBQW9DO1FBQ3BDLGlFQUFpRTtRQUNqRSw2Q0FBNkM7UUFDN0MsNkNBQTZDO1FBQzdDLHVFQUF1RTtRQUN2RSw0REFBNEQ7UUFDNUQsbUJBQW1CO1FBQ25CLDJEQUEyRDtRQUMzRCxZQUFZO1FBQ1osUUFBUTtRQUNSLElBQUk7SUFDUixDQUFDO0lBRU0sdUNBQVMsR0FBaEIsVUFBaUIsa0JBQWtCO1FBQy9CLDhEQUE4RDtRQUM5RCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDdEUsQ0FBQztJQTNLRDtRQURDLGdCQUFTLENBQUMsOEJBQW9CLENBQUM7MENBQ1osOEJBQW9COzREQUFDO0lBSGhDLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO2lEQTBFOEIsZUFBTTtPQXpFekIsbUJBQW1CLENBK0svQjtJQUFELDBCQUFDO0NBQUEsQUEvS0QsSUErS0M7QUEvS1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcbmltcG9ydCB7IFJhZERhdGFGb3JtQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXInO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3BsYXRmb3JtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZWFyY2gtbWFpbi1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1tYWluLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFJhZERhdGFGb3JtQ29tcG9uZW50KVxuICAgIHB1YmxpYyByYWREYXRhRm9ybTogUmFkRGF0YUZvcm1Db21wb25lbnQ7XG4gICAgcHVibGljIGZvcm1NZXRhZGF0YSA9IHtcbiAgICAgICAgJ2lzUmVhZE9ubHknOiBmYWxzZSxcbiAgICAgICAgJ2NvbW1pdE1vZGUnOiAnSW1tZWRpYXRlJyxcbiAgICAgICAgJ3ZhbGlkYXRpb25Nb2RlJzogJ0ltbWVkaWF0ZScsXG4gICAgICAgICdwcm9wZXJ0eUFubm90YXRpb25zJzpcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2Fycml2YWxEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ0Fycml2YWwgRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICdlZGl0b3InOiAnRGF0ZVBpY2tlcicsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAnbmFtZSc6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkZXBhcnR1cmVEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ0RlcGFydHVyZSBEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2luZGV4JzogMSxcbiAgICAgICAgICAgICAgICAgICAgJ2VkaXRvcic6ICdEYXRlUGlja2VyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbGlkYXRvcnMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICduYW1lJzogJ05vbkVtcHR5JyB9LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ251bWJlck9mTmlnaHRzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ05vLiBuaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDIsXG4gICAgICAgICAgICAgICAgICAgICdyZWFkT25seSc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAnbmFtZSc6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdSZWdFeCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmFtcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlZ0V4JzogJ15cXFxcZHswLDJ9JCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvck1lc3NhZ2UnOiAnTm8uIG5pZ2h0IHNob3VsZCA+MCBhbmQgPDEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnbnVtYmVyT2ZQQVgnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheU5hbWUnOiAnTm8uIFBBWCcsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDMsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ05vbkVtcHR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGFyYW1zJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3JNZXNzYWdlJzogJ1BsZWFzZSBwcm92aWRlIHlvdXIgbnVtYmVyIG9mIHBhc3NhZ2Vycy4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdSZWdFeCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmFtcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlZ0V4JzogJ15bMS05XVswLTldezAsMn0kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yTWVzc2FnZSc6ICdOby4gUEFYIHNob3VsZCA+MCBhbmQgPDEwMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICB9O1xuICAgIGZvcm06IHsgYXJyaXZhbERhdGU6IHN0cmluZyB8IG51bWJlciwgZGVwYXJ0dXJlRGF0ZTogc3RyaW5nIHwgbnVtYmVyLCBudW1iZXJPZk5pZ2h0czogbnVtYmVyLCBudW1iZXJPZlBBWDogbnVtYmVyIH0gPSB7XG4gICAgICAgIGFycml2YWxEYXRlOiBpc0FuZHJvaWQgPyArbmV3IERhdGUoKSA6IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICBkZXBhcnR1cmVEYXRlOiBpc0FuZHJvaWQgPyArbW9tZW50KCkuYWRkKDEsICdkYXlzJykudG9EYXRlKCkgOiBtb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgbnVtYmVyT2ZOaWdodHM6IDEsXG4gICAgICAgIG51bWJlck9mUEFYOiAxLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZ29TZWFyY2hUcmlwKCkge1xuICAgICAgICBpZiAodGhpcy5yYWREYXRhRm9ybS5kYXRhRm9ybS5oYXNWYWxpZGF0aW9uRXJyb3JzKCkpIHtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdQbGVhc2UgZml4IGVycm9yIGZpZWxkcycpLnNob3coKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlYXJjaC1yZXN1bHQnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMuZm9ybVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBvblByb3BlcnR5VmFsaWRhdGUoYXJncykge1xuICAgICAgICBsZXQgdmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGRhdGFGb3JtID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBvdGhlckRhdGUsIGN1cnJlbnREYXRlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MucHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdhcnJpdmFsRGF0ZSc6XG4gICAgICAgICAgICAgICAgb3RoZXJEYXRlID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2RlcGFydHVyZURhdGUnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IGFyZ3MuZW50aXR5UHJvcGVydHk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VEYXRlKG90aGVyRGF0ZS52YWx1ZUNhbmRpZGF0ZSkgJiYgdGhpcy5wYXJzZURhdGUob3RoZXJEYXRlLnZhbHVlQ2FuZGlkYXRlKSA8IHRoaXMucGFyc2VEYXRlKGN1cnJlbnREYXRlLnZhbHVlQ2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5lcnJvck1lc3NhZ2UgPSAnQXJyaXZhbCBkYXRlIHNob3VsZCBsZXNzIHRoYW4gZGVwYXJ0dXJlIGRhdGUnO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgnYXJyaXZhbERhdGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKCdkZXBhcnR1cmVEYXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVwYXJ0dXJlRGF0ZSc6XG4gICAgICAgICAgICAgICAgb3RoZXJEYXRlID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2Fycml2YWxEYXRlJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhcmdzLmVudGl0eVByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlRGF0ZShvdGhlckRhdGUudmFsdWVDYW5kaWRhdGUpID4gdGhpcy5wYXJzZURhdGUoY3VycmVudERhdGUudmFsdWVDYW5kaWRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLmVycm9yTWVzc2FnZSA9ICdEZXBhcnR1cmUgZGF0ZSBzaG91bGQgZ3JlYXRlciB0aGFuIGFycml2YWwgZGF0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdGhlckRhdGUuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgnYXJyaXZhbERhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy5yZXR1cm5WYWx1ZSA9IHZhbGlkYXRpb25SZXN1bHQ7XG4gICAgfVxuXG4vLyA8PCBhbmd1bGFyLWRhdGFmb3JtLXByb3BlcnR5LXZhbGlkYXRlLWV2ZW50XG4gICAgcHVibGljIG9uUHJvcGVydHlWYWxpZGF0ZWQoYXJncykge1xuICAgICAgICBsZXQgeyBvYmplY3Q6IGRhdGFGb3JtLCBwcm9wZXJ0eU5hbWUgfSA9IGFyZ3M7XG4gICAgICAgIGxldCBhcnJpdmFsRGF0ZVByb3AgPSBkYXRhRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnYXJyaXZhbERhdGUnKTtcbiAgICAgICAgbGV0IGRlcGFydHVyZURhdGVQcm9wID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2RlcGFydHVyZURhdGUnKTtcbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ2Fycml2YWxEYXRlJyB8fCBwcm9wZXJ0eU5hbWUgPT09ICdkZXBhcnR1cmVEYXRlJykge1xuICAgICAgICAgICAgaWYgKGFycml2YWxEYXRlUHJvcC5pc1ZhbGlkICYmIGRlcGFydHVyZURhdGVQcm9wLmlzVmFsaWRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLFxuICAgICAgICAgICAgICAgICAgICBhcnJpdmFsRGF0ZTogdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0dXJlRGF0ZTogdGhpcy5wYXJzZURhdGUoZGVwYXJ0dXJlRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZk5pZ2h0czogbW9tZW50KHRoaXMucGFyc2VEYXRlKGRlcGFydHVyZURhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSkuZGlmZih0aGlzLnBhcnNlRGF0ZShhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLCAnZCcpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhRm9ybS5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycml2YWxEYXRlUHJvcC5pc1ZhbGlkICYmIHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgISh0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgZGVwYXJ0dXJlRGF0ZVByb3AuaXNWYWxpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyaXZhbERhdGU6IHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnR1cmVEYXRlOiArbW9tZW50KHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkpLmFkZCgrYXJncy5lbnRpdHlQcm9wZXJ0eS52YWx1ZUNhbmRpZGF0ZSwgJ2QnKS50b0RhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzOiAxXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdudW1iZXJPZk5pZ2h0cycpIHtcbiAgICAgICAgICAgIGlmIChhcnJpdmFsRGF0ZVByb3AuaXNWYWxpZCAmJiArYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzOiBhcmdzLmVudGl0eVByb3BlcnR5LnZhbHVlQ2FuZGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICBhcnJpdmFsRGF0ZTogdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0dXJlRGF0ZTogK21vbWVudCh0aGlzLnBhcnNlRGF0ZShhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpKS5hZGQoK2FyZ3MuZW50aXR5UHJvcGVydHkudmFsdWVDYW5kaWRhdGUsICdkJykudG9EYXRlKCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhRm9ybS5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAocHJvcGVydHlOYW1lID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBkYXRhRm9ybSA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICAvLyAgICAgY29uc3QgcGFzc3dvcmQyID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ3Bhc3N3b3JkMicpO1xuICAgICAgICAvLyAgICAgY29uc3QgcGFzc3dvcmQxID0gYXJncy5lbnRpdHlQcm9wZXJ0eTtcbiAgICAgICAgLy8gICAgIGlmIChwYXNzd29yZDIudmFsdWVDYW5kaWRhdGUgIT09ICcnKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHBhc3N3b3JkMS52YWx1ZUNhbmRpZGF0ZSAhPT0gcGFzc3dvcmQyLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgncGFzc3dvcmQyJywgZmFsc2UpO1xuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgncGFzc3dvcmQyJywgdHJ1ZSk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlRGF0ZShkYXRlU3RyaW5nT3JOdW1iZXIpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBlaXRoZXIgbnVtYmVyIGluIHN0cmluZyBvciBkYXRlIGZvcm1hdHRlZCBpbiBzdHJpbmdcbiAgICAgICAgcmV0dXJuICttb21lbnQoK2RhdGVTdHJpbmdPck51bWJlcikgfHwgK21vbWVudChkYXRlU3RyaW5nT3JOdW1iZXIpXG4gICAgfVxufSJdfQ==