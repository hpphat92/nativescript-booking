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
            else {
                if (arrivalDateProp.isValid && +arrivalDateProp.valueCandidate && !(+departureDateProp.valueCandidate && departureDateProp.isValid)) {
                    this.form = tslib_1.__assign({}, this.form, { arrivalDate: +arrivalDateProp.valueCandidate, departureDate: +moment(+arrivalDateProp.valueCandidate).add(1, 'd').toDate(), numberOfNights: 1 });
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUM7QUFHekMsK0JBQWlDO0FBQ2pDLDBDQUE0QztBQUM1Qyw0REFBd0U7QUFPeEU7SUF3RUksNkJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBcEUzQixpQkFBWSxHQUFHO1lBQ2xCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFlBQVksRUFBRSxhQUFhO1lBQzNCLGdCQUFnQixFQUFFLGFBQWE7WUFDL0IscUJBQXFCLEVBQ2pCO2dCQUNJO29CQUNJLE1BQU0sRUFBRSxhQUFhO29CQUNyQixhQUFhLEVBQUUsY0FBYztvQkFDN0IsT0FBTyxFQUFFLENBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFlBQVksRUFBRTt3QkFDVixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7cUJBQ3pCO2lCQUNKO2dCQUNEO29CQUNJLE1BQU0sRUFBRSxlQUFlO29CQUN2QixhQUFhLEVBQUUsZ0JBQWdCO29CQUMvQixPQUFPLEVBQUUsQ0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsWUFBWSxFQUFFO3dCQUNWLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtxQkFDekI7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsYUFBYSxFQUFFLFdBQVc7b0JBQzFCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFlBQVksRUFBRTt3QkFDVixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7d0JBQ3RCOzRCQUNJLE1BQU0sRUFBRSxPQUFPOzRCQUNmLFFBQVEsRUFBRTtnQ0FDTixPQUFPLEVBQUUsWUFBWTtnQ0FDckIsY0FBYyxFQUFFLDhCQUE4Qjs2QkFDakQ7eUJBQ0o7cUJBQ0o7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksTUFB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QVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQztpREF5RThCLGVBQU07T0F4RXpCLG1CQUFtQixDQXlLL0I7SUFBRCwwQkFBQztDQUFBLEFBektELElBeUtDO0FBektZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9wZXJ0eVZhbGlkYXRvciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybSc7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XG5pbXBvcnQgeyBSYWREYXRhRm9ybUNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZWFyY2gtbWFpbi1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1tYWluLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFJhZERhdGFGb3JtQ29tcG9uZW50KVxuICAgIHB1YmxpYyByYWREYXRhRm9ybTogUmFkRGF0YUZvcm1Db21wb25lbnQ7XG4gICAgcHVibGljIGZvcm1NZXRhZGF0YSA9IHtcbiAgICAgICAgJ2lzUmVhZE9ubHknOiBmYWxzZSxcbiAgICAgICAgJ2NvbW1pdE1vZGUnOiAnT25Mb3N0Rm9jdXMnLFxuICAgICAgICAndmFsaWRhdGlvbk1vZGUnOiAnT25Mb3N0Rm9jdXMnLFxuICAgICAgICAncHJvcGVydHlBbm5vdGF0aW9ucyc6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdhcnJpdmFsRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdBcnJpdmFsIERhdGUnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAwLFxuICAgICAgICAgICAgICAgICAgICAnZWRpdG9yJzogJ0RhdGVQaWNrZXInLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJ25hbWUnOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGVwYXJ0dXJlRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdEZXBhcnR1cmUgRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdlZGl0b3InOiAnRGF0ZVBpY2tlcicsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAnbmFtZSc6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdudW1iZXJPZk5pZ2h0cycsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdOby4gbmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAyLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJ25hbWUnOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWdFeCc6ICdeXFxcXGR7MCwyfSQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3JNZXNzYWdlJzogJ05vLiBuaWdodCBzaG91bGQgPjAgYW5kIDwxMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ251bWJlck9mUEFYJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ05vLiBQQVgnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAzLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdOb25FbXB0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmFtcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yTWVzc2FnZSc6ICdQbGVhc2UgcHJvdmlkZSB5b3VyIG51bWJlciBvZiBwYXNzYWdlcnMuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWdFeCc6ICdeWzEtOV1bMC05XXswLDJ9JCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvck1lc3NhZ2UnOiAnTm8uIFBBWCBzaG91bGQgPjAgYW5kIDwxMDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgfTtcbiAgICBmb3JtOiB7IGFycml2YWxEYXRlOiBudW1iZXIsIGRlcGFydHVyZURhdGU6IG51bWJlciwgbnVtYmVyT2ZOaWdodHM6IG51bWJlciwgbnVtYmVyT2ZQQVg6IG51bWJlciB9ID0ge1xuICAgICAgICBhcnJpdmFsRGF0ZTogbnVsbCxcbiAgICAgICAgZGVwYXJ0dXJlRGF0ZTogbnVsbCxcbiAgICAgICAgbnVtYmVyT2ZOaWdodHM6IDAsXG4gICAgICAgIG51bWJlck9mUEFYOiAxLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZ29TZWFyY2hUcmlwKCkge1xuICAgICAgICBpZiAodGhpcy5yYWREYXRhRm9ybS5kYXRhRm9ybS5oYXNWYWxpZGF0aW9uRXJyb3JzKCkpIHtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdQbGVhc2UgZml4IGVycm9yIGZpZWxkcycpLnNob3coKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlYXJjaC1yZXN1bHQnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMuZm9ybVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBvblByb3BlcnR5VmFsaWRhdGUoYXJncykge1xuICAgICAgICBsZXQgdmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGRhdGFGb3JtID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBvdGhlckRhdGUsIGN1cnJlbnREYXRlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MucHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdhcnJpdmFsRGF0ZSc6XG4gICAgICAgICAgICAgICAgb3RoZXJEYXRlID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2RlcGFydHVyZURhdGUnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IGFyZ3MuZW50aXR5UHJvcGVydHk7XG4gICAgICAgICAgICAgICAgaWYgKCtvdGhlckRhdGUudmFsdWVDYW5kaWRhdGUgJiYgK290aGVyRGF0ZS52YWx1ZUNhbmRpZGF0ZSA8ICtjdXJyZW50RGF0ZS52YWx1ZUNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5lcnJvck1lc3NhZ2UgPSAnQXJyaXZhbCBkYXRlIHNob3VsZCBsZXNzIHRoYW4gZGVwYXJ0dXJlIGRhdGUnO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgnYXJyaXZhbERhdGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKCdkZXBhcnR1cmVEYXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVwYXJ0dXJlRGF0ZSc6XG4gICAgICAgICAgICAgICAgb3RoZXJEYXRlID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2Fycml2YWxEYXRlJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhcmdzLmVudGl0eVByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGlmICgrY3VycmVudERhdGUudmFsdWVDYW5kaWRhdGUgJiYgK290aGVyRGF0ZS52YWx1ZUNhbmRpZGF0ZSA+ICtjdXJyZW50RGF0ZS52YWx1ZUNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5lcnJvck1lc3NhZ2UgPSAnRGVwYXJ0dXJlIGRhdGUgc2hvdWxkIGdyZWF0ZXIgdGhhbiBhcnJpdmFsIGRhdGUnO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJEYXRlLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBkYXRhRm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ2Fycml2YWxEYXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3MucmV0dXJuVmFsdWUgPSB2YWxpZGF0aW9uUmVzdWx0O1xuICAgIH1cblxuLy8gPDwgYW5ndWxhci1kYXRhZm9ybS1wcm9wZXJ0eS12YWxpZGF0ZS1ldmVudFxuICAgIHB1YmxpYyBvblByb3BlcnR5VmFsaWRhdGVkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHsgb2JqZWN0OiBkYXRhRm9ybSwgcHJvcGVydHlOYW1lIH0gPSBhcmdzO1xuICAgICAgICBsZXQgYXJyaXZhbERhdGVQcm9wID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2Fycml2YWxEYXRlJyk7XG4gICAgICAgIGxldCBkZXBhcnR1cmVEYXRlUHJvcCA9IGRhdGFGb3JtLmdldFByb3BlcnR5QnlOYW1lKCdkZXBhcnR1cmVEYXRlJyk7XG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdhcnJpdmFsRGF0ZScgfHwgcHJvcGVydHlOYW1lID09PSAnZGVwYXJ0dXJlRGF0ZScpIHtcbiAgICAgICAgICAgIGlmIChhcnJpdmFsRGF0ZVByb3AuaXNWYWxpZCAmJiBkZXBhcnR1cmVEYXRlUHJvcC5pc1ZhbGlkXG4gICAgICAgICAgICAgICAgJiYgK2RlcGFydHVyZURhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlICYmICthcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgYXJyaXZhbERhdGU6ICthcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGRlcGFydHVyZURhdGU6ICtkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZOaWdodHM6IG1vbWVudCgrZGVwYXJ0dXJlRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLmRpZmYoK2Fycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSwgJ2QnKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZGF0YUZvcm0ucmVsb2FkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhcnJpdmFsRGF0ZVByb3AuaXNWYWxpZCAmJiArYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlICYmICEoK2RlcGFydHVyZURhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlICYmIGRlcGFydHVyZURhdGVQcm9wLmlzVmFsaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycml2YWxEYXRlOiArYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwYXJ0dXJlRGF0ZTogK21vbWVudCgrYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKS5hZGQoMSwgJ2QnKS50b0RhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzOiAxXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdudW1iZXJPZk5pZ2h0cycpIHtcbiAgICAgICAgICAgIGlmIChhcnJpdmFsRGF0ZVByb3AuaXNWYWxpZCAmJiArYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzOiArYXJncy5lbnRpdHlQcm9wZXJ0eS52YWx1ZUNhbmRpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyaXZhbERhdGU6ICthcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGRlcGFydHVyZURhdGU6ICttb21lbnQoK2Fycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkuYWRkKCthcmdzLmVudGl0eVByb3BlcnR5LnZhbHVlQ2FuZGlkYXRlLCAnZCcpLnRvRGF0ZSgpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZGF0YUZvcm0ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAvLyAgICAgY29uc3QgZGF0YUZvcm0gPSBhcmdzLm9iamVjdDtcbiAgICAgICAgLy8gICAgIGNvbnN0IHBhc3N3b3JkMiA9IGRhdGFGb3JtLmdldFByb3BlcnR5QnlOYW1lKCdwYXNzd29yZDInKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IHBhc3N3b3JkMSA9IGFyZ3MuZW50aXR5UHJvcGVydHk7XG4gICAgICAgIC8vICAgICBpZiAocGFzc3dvcmQyLnZhbHVlQ2FuZGlkYXRlICE9PSAnJykge1xuICAgICAgICAvLyAgICAgICAgIGlmIChwYXNzd29yZDEudmFsdWVDYW5kaWRhdGUgIT09IHBhc3N3b3JkMi52YWx1ZUNhbmRpZGF0ZSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhRm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ3Bhc3N3b3JkMicsIGZhbHNlKTtcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhRm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ3Bhc3N3b3JkMicsIHRydWUpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbn0iXX0=