"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var moment = require("moment");
var Toast = require("nativescript-toast");
var angular_1 = require("nativescript-ui-dataform/angular");
var SearchMainComponent = /** @class */ (function () {
    function SearchMainComponent(router) {
        this.router = router;
        this.formMetadata = {
            'isReadOnly': false,
            'commitMode': 'OnLostFocus',
            'validationMode': 'OnLostFocus',
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
            arrivalDate: null,
            departureDate: null,
            numberOfNights: 0,
            numberOfPAX: 1,
        };
        console.log('Init Login');
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
                if (+otherDate.valueCandidate && +otherDate.valueCandidate < +currentDate.valueCandidate) {
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
                if (+currentDate.valueCandidate && +otherDate.valueCandidate > +currentDate.valueCandidate) {
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
                && +departureDateProp.valueCandidate && +arrivalDateProp.valueCandidate) {
                this.form = tslib_1.__assign({}, this.form, { arrivalDate: +arrivalDateProp.valueCandidate, departureDate: +departureDateProp.valueCandidate, numberOfNights: moment(+departureDateProp.valueCandidate).diff(+arrivalDateProp.valueCandidate, 'd') });
                dataForm.reload();
            }
        }
        if (propertyName === 'numberOfNights') {
            if (arrivalDateProp.isValid && +arrivalDateProp.valueCandidate) {
                this.form = tslib_1.__assign({}, this.form, { numberOfNights: +args.entityProperty.valueCandidate, arrivalDate: +arrivalDateProp.valueCandidate, departureDate: +moment(+arrivalDateProp.valueCandidate).add(+args.entityProperty.valueCandidate, 'd').toDate() });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUM7QUFHekMsK0JBQWlDO0FBQ2pDLDBDQUE0QztBQUM1Qyw0REFBd0U7QUFPeEU7SUF3RUksNkJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBcEUzQixpQkFBWSxHQUFHO1lBQ2xCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFlBQVksRUFBRSxhQUFhO1lBQzNCLGdCQUFnQixFQUFFLGFBQWE7WUFDL0IscUJBQXFCLEVBQ2pCO2dCQUNJO29CQUNJLE1BQU0sRUFBRSxhQUFhO29CQUNyQixhQUFhLEVBQUUsY0FBYztvQkFDN0IsT0FBTyxFQUFFLENBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFlBQVksRUFBRTt3QkFDVixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7cUJBQ3pCO2lCQUNKO2dCQUNEO29CQUNJLE1BQU0sRUFBRSxlQUFlO29CQUN2QixhQUFhLEVBQUUsZ0JBQWdCO29CQUMvQixPQUFPLEVBQUUsQ0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsWUFBWSxFQUFFO3dCQUNWLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtxQkFDekI7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsYUFBYSxFQUFFLFdBQVc7b0JBQzFCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFlBQVksRUFBRTt3QkFDVixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7d0JBQ3RCOzRCQUNJLE1BQU0sRUFBRSxPQUFPOzRCQUNmLFFBQVEsRUFBRTtnQ0FDTixPQUFPLEVBQUUsWUFBWTtnQ0FDckIsY0FBYyxFQUFFLDhCQUE4Qjs2QkFDakQ7eUJBQ0o7cUJBQ0o7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksTUFB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LHdCQUNGLElBQUksQ0FBQyxJQUFJLElBQ1osY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQ25ELFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQzVDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FDakgsQ0FBQztnQkFDRixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEIsQ0FBQztRQUNMLENBQUM7UUFDRCxxQ0FBcUM7UUFDckMsb0NBQW9DO1FBQ3BDLGlFQUFpRTtRQUNqRSw2Q0FBNkM7UUFDN0MsNkNBQTZDO1FBQzdDLHVFQUF1RTtRQUN2RSw0REFBNEQ7UUFDNUQsbUJBQW1CO1FBQ25CLDJEQUEyRDtRQUMzRCxZQUFZO1FBQ1osUUFBUTtRQUNSLElBQUk7SUFDUixDQUFDO0lBN0pEO1FBREMsZ0JBQVMsQ0FBQyw4QkFBb0IsQ0FBQzswQ0FDWiw4QkFBb0I7NERBQUM7SUFIaEMsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7aURBeUU4QixlQUFNO09BeEV6QixtQkFBbUIsQ0FpSy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpLRCxJQWlLQztBQWpLWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvcGVydHlWYWxpZGF0b3IgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0nO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuaW1wb3J0IHsgUmFkRGF0YUZvcm1Db21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLW1haW4tY29tcG9uZW50JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtbWFpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChSYWREYXRhRm9ybUNvbXBvbmVudClcbiAgICBwdWJsaWMgcmFkRGF0YUZvcm06IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuICAgIHB1YmxpYyBmb3JtTWV0YWRhdGEgPSB7XG4gICAgICAgICdpc1JlYWRPbmx5JzogZmFsc2UsXG4gICAgICAgICdjb21taXRNb2RlJzogJ09uTG9zdEZvY3VzJyxcbiAgICAgICAgJ3ZhbGlkYXRpb25Nb2RlJzogJ09uTG9zdEZvY3VzJyxcbiAgICAgICAgJ3Byb3BlcnR5QW5ub3RhdGlvbnMnOlxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnYXJyaXZhbERhdGUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheU5hbWUnOiAnQXJyaXZhbCBEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2luZGV4JzogMCxcbiAgICAgICAgICAgICAgICAgICAgJ2VkaXRvcic6ICdEYXRlUGlja2VyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbGlkYXRvcnMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICduYW1lJzogJ05vbkVtcHR5JyB9LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2RlcGFydHVyZURhdGUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheU5hbWUnOiAnRGVwYXJ0dXJlIERhdGUnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAxLFxuICAgICAgICAgICAgICAgICAgICAnZWRpdG9yJzogJ0RhdGVQaWNrZXInLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJ25hbWUnOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnbnVtYmVyT2ZOaWdodHMnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheU5hbWUnOiAnTm8uIG5pZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ2luZGV4JzogMixcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbGlkYXRvcnMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICduYW1lJzogJ05vbkVtcHR5JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ1JlZ0V4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGFyYW1zJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVnRXgnOiAnXlxcXFxkezAsMn0kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yTWVzc2FnZSc6ICdOby4gbmlnaHQgc2hvdWxkID4wIGFuZCA8MTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdudW1iZXJPZlBBWCcsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdOby4gUEFYJyxcbiAgICAgICAgICAgICAgICAgICAgJ2luZGV4JzogMyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbGlkYXRvcnMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnTm9uRW1wdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvck1lc3NhZ2UnOiAnUGxlYXNlIHByb3ZpZGUgeW91ciBudW1iZXIgb2YgcGFzc2FnZXJzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ1JlZ0V4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGFyYW1zJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVnRXgnOiAnXlsxLTldWzAtOV17MCwyfSQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3JNZXNzYWdlJzogJ05vLiBQQVggc2hvdWxkID4wIGFuZCA8MTAwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgIH07XG4gICAgZm9ybTogeyBhcnJpdmFsRGF0ZTogbnVtYmVyLCBkZXBhcnR1cmVEYXRlOiBudW1iZXIsIG51bWJlck9mTmlnaHRzOiBudW1iZXIsIG51bWJlck9mUEFYOiBudW1iZXIgfSA9IHtcbiAgICAgICAgYXJyaXZhbERhdGU6IG51bGwsXG4gICAgICAgIGRlcGFydHVyZURhdGU6IG51bGwsXG4gICAgICAgIG51bWJlck9mTmlnaHRzOiAwLFxuICAgICAgICBudW1iZXJPZlBBWDogMSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnSW5pdCBMb2dpbicpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGdvU2VhcmNoVHJpcCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmFkRGF0YUZvcm0uZGF0YUZvcm0uaGFzVmFsaWRhdGlvbkVycm9ycygpKSB7XG4gICAgICAgICAgICBUb2FzdC5tYWtlVGV4dCgnUGxlYXNlIGZpeCBlcnJvciBmaWVsZHMnKS5zaG93KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZWFyY2gtcmVzdWx0J10sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB0aGlzLmZvcm1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Qcm9wZXJ0eVZhbGlkYXRlKGFyZ3MpIHtcbiAgICAgICAgbGV0IHZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xuICAgICAgICBjb25zdCBkYXRhRm9ybSA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBsZXQgb3RoZXJEYXRlLCBjdXJyZW50RGF0ZTtcbiAgICAgICAgc3dpdGNoIChhcmdzLnByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnYXJyaXZhbERhdGUnOlxuICAgICAgICAgICAgICAgIG90aGVyRGF0ZSA9IGRhdGFGb3JtLmdldFByb3BlcnR5QnlOYW1lKCdkZXBhcnR1cmVEYXRlJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhcmdzLmVudGl0eVByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGlmICgrb3RoZXJEYXRlLnZhbHVlQ2FuZGlkYXRlICYmICtvdGhlckRhdGUudmFsdWVDYW5kaWRhdGUgPCArY3VycmVudERhdGUudmFsdWVDYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERhdGUuZXJyb3JNZXNzYWdlID0gJ0Fycml2YWwgZGF0ZSBzaG91bGQgbGVzcyB0aGFuIGRlcGFydHVyZSBkYXRlJztcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBkYXRhRm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ2Fycml2YWxEYXRlJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgnZGVwYXJ0dXJlRGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlcGFydHVyZURhdGUnOlxuICAgICAgICAgICAgICAgIG90aGVyRGF0ZSA9IGRhdGFGb3JtLmdldFByb3BlcnR5QnlOYW1lKCdhcnJpdmFsRGF0ZScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlID0gYXJncy5lbnRpdHlQcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICBpZiAoK2N1cnJlbnREYXRlLnZhbHVlQ2FuZGlkYXRlICYmICtvdGhlckRhdGUudmFsdWVDYW5kaWRhdGUgPiArY3VycmVudERhdGUudmFsdWVDYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERhdGUuZXJyb3JNZXNzYWdlID0gJ0RlcGFydHVyZSBkYXRlIHNob3VsZCBncmVhdGVyIHRoYW4gYXJyaXZhbCBkYXRlJztcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyRGF0ZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKCdhcnJpdmFsRGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBhcmdzLnJldHVyblZhbHVlID0gdmFsaWRhdGlvblJlc3VsdDtcbiAgICB9XG5cbi8vIDw8IGFuZ3VsYXItZGF0YWZvcm0tcHJvcGVydHktdmFsaWRhdGUtZXZlbnRcbiAgICBwdWJsaWMgb25Qcm9wZXJ0eVZhbGlkYXRlZChhcmdzKSB7XG4gICAgICAgIGxldCB7IG9iamVjdDogZGF0YUZvcm0sIHByb3BlcnR5TmFtZSB9ID0gYXJncztcbiAgICAgICAgbGV0IGFycml2YWxEYXRlUHJvcCA9IGRhdGFGb3JtLmdldFByb3BlcnR5QnlOYW1lKCdhcnJpdmFsRGF0ZScpO1xuICAgICAgICBsZXQgZGVwYXJ0dXJlRGF0ZVByb3AgPSBkYXRhRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnZGVwYXJ0dXJlRGF0ZScpO1xuICAgICAgICBpZiAocHJvcGVydHlOYW1lID09PSAnYXJyaXZhbERhdGUnIHx8IHByb3BlcnR5TmFtZSA9PT0gJ2RlcGFydHVyZURhdGUnKSB7XG4gICAgICAgICAgICBpZiAoYXJyaXZhbERhdGVQcm9wLmlzVmFsaWQgJiYgZGVwYXJ0dXJlRGF0ZVByb3AuaXNWYWxpZFxuICAgICAgICAgICAgICAgICYmICtkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSAmJiArYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIGFycml2YWxEYXRlOiArYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICBkZXBhcnR1cmVEYXRlOiArZGVwYXJ0dXJlRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUsXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzOiBtb21lbnQoK2RlcGFydHVyZURhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKS5kaWZmKCthcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUsICdkJylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGRhdGFGb3JtLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdudW1iZXJPZk5pZ2h0cycpIHtcbiAgICAgICAgICAgIGlmIChhcnJpdmFsRGF0ZVByb3AuaXNWYWxpZCAmJiArYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzOiArYXJncy5lbnRpdHlQcm9wZXJ0eS52YWx1ZUNhbmRpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyaXZhbERhdGU6ICthcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGRlcGFydHVyZURhdGU6ICttb21lbnQoK2Fycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkuYWRkKCthcmdzLmVudGl0eVByb3BlcnR5LnZhbHVlQ2FuZGlkYXRlLCAnZCcpLnRvRGF0ZSgpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZGF0YUZvcm0ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAvLyAgICAgY29uc3QgZGF0YUZvcm0gPSBhcmdzLm9iamVjdDtcbiAgICAgICAgLy8gICAgIGNvbnN0IHBhc3N3b3JkMiA9IGRhdGFGb3JtLmdldFByb3BlcnR5QnlOYW1lKCdwYXNzd29yZDInKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IHBhc3N3b3JkMSA9IGFyZ3MuZW50aXR5UHJvcGVydHk7XG4gICAgICAgIC8vICAgICBpZiAocGFzc3dvcmQyLnZhbHVlQ2FuZGlkYXRlICE9PSAnJykge1xuICAgICAgICAvLyAgICAgICAgIGlmIChwYXNzd29yZDEudmFsdWVDYW5kaWRhdGUgIT09IHBhc3N3b3JkMi52YWx1ZUNhbmRpZGF0ZSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhRm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ3Bhc3N3b3JkMicsIGZhbHNlKTtcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhRm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ3Bhc3N3b3JkMicsIHRydWUpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbn0iXX0=