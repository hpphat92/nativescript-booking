"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var applicationModule = require("tns-core-modules/application");
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
                this.form = tslib_1.__assign({}, this.form, { arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: this.parseDate(departureDateProp.valueCandidate), numberOfNights: moment(this.parseDate(departureDateProp.valueCandidate)).diff(this.parseDate(arrivalDateProp.valueCandidate), 'd') });
                dataForm.reload();
            }
            else {
                if (arrivalDateProp.isValid && this.parseDate(arrivalDateProp.valueCandidate) && !(this.parseDate(departureDateProp.valueCandidate) && departureDateProp.isValid)) {
                    this.form = tslib_1.__assign({}, this.form, { arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: moment(+arrivalDateProp.valueCandidate).add(+args.entityProperty.valueCandidate, 'd').format('YYYY-MM-DD'), numberOfNights: 1 });
                }
            }
        }
        if (propertyName === 'numberOfNights') {
            var numberOfNights = +args.entityProperty.valueCandidate || 0;
            if (arrivalDateProp.isValid && +arrivalDateProp.valueCandidate) {
                this.form = tslib_1.__assign({}, this.form, { numberOfNights: numberOfNights, arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: moment(+arrivalDateProp.valueCandidate).add(numberOfNights, 'd').format('YYYY-MM-DD') });
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
        return (moment(+dateStringOrNumber) || moment(dateStringOrNumber)).format('YYYY-MM-DD');
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
            editor.setDateFormat(simpleDateFormat);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE0RTtBQUM1RSwwQ0FBeUM7QUFDekMsZ0VBQWtFO0FBR2xFLCtCQUFpQztBQUNqQywwQ0FBNEM7QUFDNUMsNERBQXdFO0FBV3hFO0lBeUVJLDZCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXJFM0IsaUJBQVksR0FBRztZQUNsQixZQUFZLEVBQUUsS0FBSztZQUNuQixZQUFZLEVBQUUsV0FBVztZQUN6QixnQkFBZ0IsRUFBRSxXQUFXO1lBQzdCLHFCQUFxQixFQUNqQjtnQkFDSTtvQkFDSSxNQUFNLEVBQUUsYUFBYTtvQkFDckIsYUFBYSxFQUFFLGNBQWM7b0JBQzdCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixZQUFZLEVBQUU7d0JBQ1YsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO3FCQUN6QjtpQkFDSjtnQkFDRDtvQkFDSSxNQUFNLEVBQUUsZUFBZTtvQkFDdkIsYUFBYSxFQUFFLGdCQUFnQjtvQkFDL0IsT0FBTyxFQUFFLENBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFlBQVksRUFBRTt3QkFDVixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7cUJBQ3pCO2lCQUNKO2dCQUNEO29CQUNJLE1BQU0sRUFBRSxnQkFBZ0I7b0JBQ3hCLGFBQWEsRUFBRSxXQUFXO29CQUMxQixPQUFPLEVBQUUsQ0FBQztvQkFDVixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsWUFBWSxFQUFFO3dCQUNWLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTt3QkFDdEI7NEJBQ0ksTUFBTSxFQUFFLE9BQU87NEJBQ2YsUUFBUSxFQUFFO2dDQUNOLE9BQU8sRUFBRSxZQUFZO2dDQUNyQixjQUFjLEVBQUUsOEJBQThCOzZCQUNq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RSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQztpREEwRThCLGVBQU07T0F6RXpCLG1CQUFtQixDQW1OL0I7SUFBRCwwQkFBQztDQUFBLEFBbk5ELElBbU5DO0FBbk5ZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbk1vZHVsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcbmltcG9ydCB7IFJhZERhdGFGb3JtQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXInO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3BsYXRmb3JtJztcblxuZGVjbGFyZSB2YXIgamF2YTogYW55O1xuZGVjbGFyZSB2YXIgTlNEYXRlRm9ybWF0dGVyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLW1haW4tY29tcG9uZW50JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtbWFpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gICAgQFZpZXdDaGlsZChSYWREYXRhRm9ybUNvbXBvbmVudClcbiAgICBwdWJsaWMgcmFkRGF0YUZvcm06IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuICAgIHB1YmxpYyBmb3JtTWV0YWRhdGEgPSB7XG4gICAgICAgICdpc1JlYWRPbmx5JzogZmFsc2UsXG4gICAgICAgICdjb21taXRNb2RlJzogJ0ltbWVkaWF0ZScsXG4gICAgICAgICd2YWxpZGF0aW9uTW9kZSc6ICdJbW1lZGlhdGUnLFxuICAgICAgICAncHJvcGVydHlBbm5vdGF0aW9ucyc6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdhcnJpdmFsRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdBcnJpdmFsIERhdGUnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAwLFxuICAgICAgICAgICAgICAgICAgICAnZWRpdG9yJzogJ0RhdGVQaWNrZXInLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJ25hbWUnOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGVwYXJ0dXJlRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdEZXBhcnR1cmUgRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdlZGl0b3InOiAnRGF0ZVBpY2tlcicsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAnbmFtZSc6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdudW1iZXJPZk5pZ2h0cycsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdOby4gbmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAyLFxuICAgICAgICAgICAgICAgICAgICAncmVhZE9ubHknOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJ25hbWUnOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWdFeCc6ICdeXFxcXGR7MCwyfSQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3JNZXNzYWdlJzogJ05vLiBuaWdodCBzaG91bGQgPjAgYW5kIDwxMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ251bWJlck9mUEFYJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ05vLiBQQVgnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAzLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdOb25FbXB0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmFtcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yTWVzc2FnZSc6ICdQbGVhc2UgcHJvdmlkZSB5b3VyIG51bWJlciBvZiBwYXNzYWdlcnMuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWdFeCc6ICdeWzEtOV1bMC05XXswLDJ9JCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvck1lc3NhZ2UnOiAnTm8uIFBBWCBzaG91bGQgPjAgYW5kIDwxMDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgfTtcbiAgICBmb3JtOiB7IGFycml2YWxEYXRlOiBzdHJpbmcsIGRlcGFydHVyZURhdGU6IHN0cmluZywgbnVtYmVyT2ZOaWdodHM6IG51bWJlciwgbnVtYmVyT2ZQQVg6IG51bWJlciB9ID0ge1xuICAgICAgICBhcnJpdmFsRGF0ZTogbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgIGRlcGFydHVyZURhdGU6IG1vbWVudCgpLmFkZCgxLCAnZCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICBudW1iZXJPZk5pZ2h0czogMSxcbiAgICAgICAgbnVtYmVyT2ZQQVg6IDEsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgfVxuXG4gICAgZ29TZWFyY2hUcmlwKCkge1xuICAgICAgICBpZiAodGhpcy5yYWREYXRhRm9ybS5kYXRhRm9ybS5oYXNWYWxpZGF0aW9uRXJyb3JzKCkpIHtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdQbGVhc2UgZml4IGVycm9yIGZpZWxkcycpLnNob3coKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlYXJjaC1yZXN1bHQnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMuZm9ybVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBvblByb3BlcnR5VmFsaWRhdGUoYXJncykge1xuICAgICAgICBsZXQgdmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGRhdGFGb3JtID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBvdGhlckRhdGUsIGN1cnJlbnREYXRlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MucHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdhcnJpdmFsRGF0ZSc6XG4gICAgICAgICAgICAgICAgb3RoZXJEYXRlID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2RlcGFydHVyZURhdGUnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IGFyZ3MuZW50aXR5UHJvcGVydHk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VEYXRlKG90aGVyRGF0ZS52YWx1ZUNhbmRpZGF0ZSkgJiYgdGhpcy5wYXJzZURhdGUob3RoZXJEYXRlLnZhbHVlQ2FuZGlkYXRlKSA8IHRoaXMucGFyc2VEYXRlKGN1cnJlbnREYXRlLnZhbHVlQ2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5lcnJvck1lc3NhZ2UgPSAnQXJyaXZhbCBkYXRlIHNob3VsZCBsZXNzIHRoYW4gZGVwYXJ0dXJlIGRhdGUnO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgnYXJyaXZhbERhdGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKCdkZXBhcnR1cmVEYXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVwYXJ0dXJlRGF0ZSc6XG4gICAgICAgICAgICAgICAgb3RoZXJEYXRlID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2Fycml2YWxEYXRlJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhcmdzLmVudGl0eVByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlRGF0ZShvdGhlckRhdGUudmFsdWVDYW5kaWRhdGUpID4gdGhpcy5wYXJzZURhdGUoY3VycmVudERhdGUudmFsdWVDYW5kaWRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLmVycm9yTWVzc2FnZSA9ICdEZXBhcnR1cmUgZGF0ZSBzaG91bGQgZ3JlYXRlciB0aGFuIGFycml2YWwgZGF0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdGhlckRhdGUuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgnYXJyaXZhbERhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy5yZXR1cm5WYWx1ZSA9IHZhbGlkYXRpb25SZXN1bHQ7XG4gICAgfVxuXG4vLyA8PCBhbmd1bGFyLWRhdGFmb3JtLXByb3BlcnR5LXZhbGlkYXRlLWV2ZW50XG4gICAgcHVibGljIG9uUHJvcGVydHlWYWxpZGF0ZWQoYXJncykge1xuICAgICAgICBsZXQgeyBvYmplY3Q6IGRhdGFGb3JtLCBwcm9wZXJ0eU5hbWUgfSA9IGFyZ3M7XG4gICAgICAgIGxldCBhcnJpdmFsRGF0ZVByb3AgPSBkYXRhRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnYXJyaXZhbERhdGUnKTtcbiAgICAgICAgbGV0IGRlcGFydHVyZURhdGVQcm9wID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2RlcGFydHVyZURhdGUnKTtcbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ2Fycml2YWxEYXRlJyB8fCBwcm9wZXJ0eU5hbWUgPT09ICdkZXBhcnR1cmVEYXRlJykge1xuICAgICAgICAgICAgaWYgKGFycml2YWxEYXRlUHJvcC5pc1ZhbGlkICYmIGRlcGFydHVyZURhdGVQcm9wLmlzVmFsaWRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLFxuICAgICAgICAgICAgICAgICAgICBhcnJpdmFsRGF0ZTogdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0dXJlRGF0ZTogdGhpcy5wYXJzZURhdGUoZGVwYXJ0dXJlRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZk5pZ2h0czogbW9tZW50KHRoaXMucGFyc2VEYXRlKGRlcGFydHVyZURhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSkuZGlmZih0aGlzLnBhcnNlRGF0ZShhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLCAnZCcpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhRm9ybS5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycml2YWxEYXRlUHJvcC5pc1ZhbGlkICYmIHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgISh0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgZGVwYXJ0dXJlRGF0ZVByb3AuaXNWYWxpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyaXZhbERhdGU6IHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnR1cmVEYXRlOiBtb21lbnQoK2Fycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkuYWRkKCthcmdzLmVudGl0eVByb3BlcnR5LnZhbHVlQ2FuZGlkYXRlLCAnZCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZOaWdodHM6IDFcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ251bWJlck9mTmlnaHRzJykge1xuICAgICAgICAgICAgbGV0IG51bWJlck9mTmlnaHRzID0gK2FyZ3MuZW50aXR5UHJvcGVydHkudmFsdWVDYW5kaWRhdGUgfHwgMDtcbiAgICAgICAgICAgIGlmIChhcnJpdmFsRGF0ZVByb3AuaXNWYWxpZCAmJiArYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzLFxuICAgICAgICAgICAgICAgICAgICBhcnJpdmFsRGF0ZTogdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0dXJlRGF0ZTogbW9tZW50KCthcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLmFkZChudW1iZXJPZk5pZ2h0cywgJ2QnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGRhdGFGb3JtLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGRhdGFGb3JtID0gYXJncy5vYmplY3Q7XG4gICAgICAgIC8vICAgICBjb25zdCBwYXNzd29yZDIgPSBkYXRhRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgncGFzc3dvcmQyJyk7XG4gICAgICAgIC8vICAgICBjb25zdCBwYXNzd29yZDEgPSBhcmdzLmVudGl0eVByb3BlcnR5O1xuICAgICAgICAvLyAgICAgaWYgKHBhc3N3b3JkMi52YWx1ZUNhbmRpZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAocGFzc3dvcmQxLnZhbHVlQ2FuZGlkYXRlICE9PSBwYXNzd29yZDIudmFsdWVDYW5kaWRhdGUpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKCdwYXNzd29yZDInLCBmYWxzZSk7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKCdwYXNzd29yZDInLCB0cnVlKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2VEYXRlKGRhdGVTdHJpbmdPck51bWJlcikge1xuICAgICAgICAvLyBUaGlzIGlzIGVpdGhlciBudW1iZXIgaW4gc3RyaW5nIG9yIGRhdGUgZm9ybWF0dGVkIGluIHN0cmluZ1xuICAgICAgICByZXR1cm4gKG1vbWVudCgrZGF0ZVN0cmluZ09yTnVtYmVyKSB8fCBtb21lbnQoZGF0ZVN0cmluZ09yTnVtYmVyKSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRWRpdG9yVXBkYXRlKGFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MucHJvcGVydHlOYW1lID09ICdudW1iZXJPZk5pZ2h0cycgfHwgYXJncy5wcm9wZXJ0eU5hbWUgPT0gJ251bWJlck9mUEFYJykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFZGl0b3JTcGFjaW5nKGFyZ3MuZWRpdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5wcm9wZXJ0eU5hbWUgPT0gJ2Fycml2YWxEYXRlJyB8fCBhcmdzLnByb3BlcnR5TmFtZSA9PSAnZGVwYXJ0dXJlRGF0ZScpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0ZUZvcm1hdHRpbmcoYXJncy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VFZGl0b3JTcGFjaW5nKGVkaXRvcikge1xuICAgICAgICBpZiAoYXBwbGljYXRpb25Nb2R1bGUuaW9zKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWxEZWYgPSBlZGl0b3IuZ3JpZExheW91dC5kZWZpbml0aW9uRm9yVmlldyhlZGl0b3IudmFsdWVMYWJlbCk7XG4gICAgICAgICAgICBsYWJlbERlZi5jb250ZW50T2Zmc2V0ID0ge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IC0yNSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVkaXRvci5nZXRIZWFkZXJWaWV3KCkuc2V0UGFkZGluZygxMiwgMTIsIDEyLCA0OCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZURhdGVGb3JtYXR0aW5nKGVkaXRvcikge1xuICAgICAgICBpZiAoYXBwbGljYXRpb25Nb2R1bGUuaW9zKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUZvcm1hdHRlciA9IE5TRGF0ZUZvcm1hdHRlci5hbGxvYygpLmluaXQoKTtcbiAgICAgICAgICAgIGRhdGVGb3JtYXR0ZXIuZGF0ZUZvcm1hdCA9ICd5eXl5LU1NLWRkJztcbiAgICAgICAgICAgIGVkaXRvci5kYXRlRm9ybWF0dGVyID0gZGF0ZUZvcm1hdHRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzaW1wbGVEYXRlRm9ybWF0ID0gbmV3IGphdmEudGV4dC5TaW1wbGVEYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgamF2YS51dGlsLkxvY2FsZS5VUyk7XG4gICAgICAgICAgICBlZGl0b3Iuc2V0RGF0ZUZvcm1hdChzaW1wbGVEYXRlRm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=