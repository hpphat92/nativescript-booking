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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUM7QUFHekMsK0JBQWlDO0FBQ2pDLDBDQUE0QztBQUM1Qyw0REFBd0U7QUFPeEU7SUF5RUksNkJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBckUzQixpQkFBWSxHQUFHO1lBQ2xCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFlBQVksRUFBRSxXQUFXO1lBQ3pCLGdCQUFnQixFQUFFLFdBQVc7WUFDN0IscUJBQXFCLEVBQ2pCO2dCQUNJO29CQUNJLE1BQU0sRUFBRSxhQUFhO29CQUNyQixhQUFhLEVBQUUsY0FBYztvQkFDN0IsT0FBTyxFQUFFLENBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFlBQVksRUFBRTt3QkFDVixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7cUJBQ3pCO2lCQUNKO2dCQUNEO29CQUNJLE1BQU0sRUFBRSxlQUFlO29CQUN2QixhQUFhLEVBQUUsZ0JBQWdCO29CQUMvQixPQUFPLEVBQUUsQ0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsWUFBWSxFQUFFO3dCQUNWLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtxQkFDekI7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsYUFBYSxFQUFFLFdBQVc7b0JBQzFCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFVBQVUsRUFBRSxJQUFJO29CQUNoQixZQUFZLEVBQUU7d0JBQ1YsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO3dCQUN0Qjs0QkFDSSxNQUFNLEVBQUUsT0FBTzs0QkFDZixRQUFRLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLFlBQVk7Z0NBQ3JCLGNBQWMsRUFBRSw4QkFBOEI7NkJBQ2pEO3lCQUNKO3FCQUNK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QyxjQUFjLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUNoSSxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QixDQUFDO1FBQ0wsQ0FBQztRQUNELHFDQUFxQztRQUNyQyxvQ0FBb0M7UUFDcEMsaUVBQWlFO1FBQ2pFLDZDQUE2QztRQUM3Qyw2Q0FBNkM7UUFDN0MsdUVBQXVFO1FBQ3ZFLDREQUE0RDtRQUM1RCxtQkFBbUI7UUFDbkIsMkRBQTJEO1FBQzNELFlBQVk7UUFDWixRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUFFTSx1Q0FBUyxHQUFoQixVQUFpQixrQkFBa0I7UUFDL0IsOERBQThEO1FBQzlELE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0lBM0tEO1FBREMsZ0JBQVMsQ0FBQyw4QkFBb0IsQ0FBQzswQ0FDWiw4QkFBb0I7NERBQUM7SUFIaEMsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7aURBMEU4QixlQUFNO09BekV6QixtQkFBbUIsQ0ErSy9CO0lBQUQsMEJBQUM7Q0FBQSxBQS9LRCxJQStLQztBQS9LWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvcGVydHlWYWxpZGF0b3IgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0nO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuaW1wb3J0IHsgUmFkRGF0YUZvcm1Db21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLW1haW4tY29tcG9uZW50JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtbWFpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChSYWREYXRhRm9ybUNvbXBvbmVudClcbiAgICBwdWJsaWMgcmFkRGF0YUZvcm06IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuICAgIHB1YmxpYyBmb3JtTWV0YWRhdGEgPSB7XG4gICAgICAgICdpc1JlYWRPbmx5JzogZmFsc2UsXG4gICAgICAgICdjb21taXRNb2RlJzogJ0ltbWVkaWF0ZScsXG4gICAgICAgICd2YWxpZGF0aW9uTW9kZSc6ICdJbW1lZGlhdGUnLFxuICAgICAgICAncHJvcGVydHlBbm5vdGF0aW9ucyc6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdhcnJpdmFsRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdBcnJpdmFsIERhdGUnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAwLFxuICAgICAgICAgICAgICAgICAgICAnZWRpdG9yJzogJ0RhdGVQaWNrZXInLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJ25hbWUnOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGVwYXJ0dXJlRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdEZXBhcnR1cmUgRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdlZGl0b3InOiAnRGF0ZVBpY2tlcicsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAnbmFtZSc6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdudW1iZXJPZk5pZ2h0cycsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdOby4gbmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAyLFxuICAgICAgICAgICAgICAgICAgICAncmVhZE9ubHknOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJ25hbWUnOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWdFeCc6ICdeXFxcXGR7MCwyfSQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3JNZXNzYWdlJzogJ05vLiBuaWdodCBzaG91bGQgPjAgYW5kIDwxMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ251bWJlck9mUEFYJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ05vLiBQQVgnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAzLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdOb25FbXB0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmFtcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yTWVzc2FnZSc6ICdQbGVhc2UgcHJvdmlkZSB5b3VyIG51bWJlciBvZiBwYXNzYWdlcnMuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWdFeCc6ICdeWzEtOV1bMC05XXswLDJ9JCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvck1lc3NhZ2UnOiAnTm8uIFBBWCBzaG91bGQgPjAgYW5kIDwxMDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgfTtcbiAgICBmb3JtOiB7IGFycml2YWxEYXRlOiBudW1iZXIsIGRlcGFydHVyZURhdGU6IG51bWJlciwgbnVtYmVyT2ZOaWdodHM6IG51bWJlciwgbnVtYmVyT2ZQQVg6IG51bWJlciB9ID0ge1xuICAgICAgICBhcnJpdmFsRGF0ZTogbnVsbCxcbiAgICAgICAgZGVwYXJ0dXJlRGF0ZTogbnVsbCxcbiAgICAgICAgbnVtYmVyT2ZOaWdodHM6IDAsXG4gICAgICAgIG51bWJlck9mUEFYOiAxLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZ29TZWFyY2hUcmlwKCkge1xuICAgICAgICBpZiAodGhpcy5yYWREYXRhRm9ybS5kYXRhRm9ybS5oYXNWYWxpZGF0aW9uRXJyb3JzKCkpIHtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdQbGVhc2UgZml4IGVycm9yIGZpZWxkcycpLnNob3coKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlYXJjaC1yZXN1bHQnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMuZm9ybVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBvblByb3BlcnR5VmFsaWRhdGUoYXJncykge1xuICAgICAgICBsZXQgdmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGRhdGFGb3JtID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBvdGhlckRhdGUsIGN1cnJlbnREYXRlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MucHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdhcnJpdmFsRGF0ZSc6XG4gICAgICAgICAgICAgICAgb3RoZXJEYXRlID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2RlcGFydHVyZURhdGUnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IGFyZ3MuZW50aXR5UHJvcGVydHk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VEYXRlKG90aGVyRGF0ZS52YWx1ZUNhbmRpZGF0ZSkgJiYgdGhpcy5wYXJzZURhdGUob3RoZXJEYXRlLnZhbHVlQ2FuZGlkYXRlKSA8IHRoaXMucGFyc2VEYXRlKGN1cnJlbnREYXRlLnZhbHVlQ2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5lcnJvck1lc3NhZ2UgPSAnQXJyaXZhbCBkYXRlIHNob3VsZCBsZXNzIHRoYW4gZGVwYXJ0dXJlIGRhdGUnO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgnYXJyaXZhbERhdGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKCdkZXBhcnR1cmVEYXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVwYXJ0dXJlRGF0ZSc6XG4gICAgICAgICAgICAgICAgb3RoZXJEYXRlID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2Fycml2YWxEYXRlJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhcmdzLmVudGl0eVByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlRGF0ZShvdGhlckRhdGUudmFsdWVDYW5kaWRhdGUpID4gdGhpcy5wYXJzZURhdGUoY3VycmVudERhdGUudmFsdWVDYW5kaWRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLmVycm9yTWVzc2FnZSA9ICdEZXBhcnR1cmUgZGF0ZSBzaG91bGQgZ3JlYXRlciB0aGFuIGFycml2YWwgZGF0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdGhlckRhdGUuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgnYXJyaXZhbERhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy5yZXR1cm5WYWx1ZSA9IHZhbGlkYXRpb25SZXN1bHQ7XG4gICAgfVxuXG4vLyA8PCBhbmd1bGFyLWRhdGFmb3JtLXByb3BlcnR5LXZhbGlkYXRlLWV2ZW50XG4gICAgcHVibGljIG9uUHJvcGVydHlWYWxpZGF0ZWQoYXJncykge1xuICAgICAgICBsZXQgeyBvYmplY3Q6IGRhdGFGb3JtLCBwcm9wZXJ0eU5hbWUgfSA9IGFyZ3M7XG4gICAgICAgIGxldCBhcnJpdmFsRGF0ZVByb3AgPSBkYXRhRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnYXJyaXZhbERhdGUnKTtcbiAgICAgICAgbGV0IGRlcGFydHVyZURhdGVQcm9wID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2RlcGFydHVyZURhdGUnKTtcbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ2Fycml2YWxEYXRlJyB8fCBwcm9wZXJ0eU5hbWUgPT09ICdkZXBhcnR1cmVEYXRlJykge1xuICAgICAgICAgICAgaWYgKGFycml2YWxEYXRlUHJvcC5pc1ZhbGlkICYmIGRlcGFydHVyZURhdGVQcm9wLmlzVmFsaWRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLFxuICAgICAgICAgICAgICAgICAgICBhcnJpdmFsRGF0ZTogdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0dXJlRGF0ZTogdGhpcy5wYXJzZURhdGUoZGVwYXJ0dXJlRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZk5pZ2h0czogbW9tZW50KHRoaXMucGFyc2VEYXRlKGRlcGFydHVyZURhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSkuZGlmZih0aGlzLnBhcnNlRGF0ZShhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLCAnZCcpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhRm9ybS5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycml2YWxEYXRlUHJvcC5pc1ZhbGlkICYmIHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgISh0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgZGVwYXJ0dXJlRGF0ZVByb3AuaXNWYWxpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyaXZhbERhdGU6IHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnR1cmVEYXRlOiArbW9tZW50KHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkpLmFkZCgrYXJncy5lbnRpdHlQcm9wZXJ0eS52YWx1ZUNhbmRpZGF0ZSwgJ2QnKS50b0RhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzOiAxXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdudW1iZXJPZk5pZ2h0cycpIHtcbiAgICAgICAgICAgIGlmIChhcnJpdmFsRGF0ZVByb3AuaXNWYWxpZCAmJiArYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzOiBhcmdzLmVudGl0eVByb3BlcnR5LnZhbHVlQ2FuZGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICBhcnJpdmFsRGF0ZTogdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0dXJlRGF0ZTogK21vbWVudCh0aGlzLnBhcnNlRGF0ZShhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpKS5hZGQoK2FyZ3MuZW50aXR5UHJvcGVydHkudmFsdWVDYW5kaWRhdGUsICdkJykudG9EYXRlKCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhRm9ybS5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAocHJvcGVydHlOYW1lID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBkYXRhRm9ybSA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICAvLyAgICAgY29uc3QgcGFzc3dvcmQyID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ3Bhc3N3b3JkMicpO1xuICAgICAgICAvLyAgICAgY29uc3QgcGFzc3dvcmQxID0gYXJncy5lbnRpdHlQcm9wZXJ0eTtcbiAgICAgICAgLy8gICAgIGlmIChwYXNzd29yZDIudmFsdWVDYW5kaWRhdGUgIT09ICcnKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHBhc3N3b3JkMS52YWx1ZUNhbmRpZGF0ZSAhPT0gcGFzc3dvcmQyLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgncGFzc3dvcmQyJywgZmFsc2UpO1xuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgncGFzc3dvcmQyJywgdHJ1ZSk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlRGF0ZShkYXRlU3RyaW5nT3JOdW1iZXIpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBlaXRoZXIgbnVtYmVyIGluIHN0cmluZyBvciBkYXRlIGZvcm1hdHRlZCBpbiBzdHJpbmdcbiAgICAgICAgcmV0dXJuICttb21lbnQoK2RhdGVTdHJpbmdPck51bWJlcikgfHwgK21vbWVudChkYXRlU3RyaW5nT3JOdW1iZXIpXG4gICAgfVxufSJdfQ==