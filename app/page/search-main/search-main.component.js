"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var applicationModule = require("tns-core-modules/application");
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
                dataForm.reload();
            }
            else {
                if (arrivalDateProp.isValid && this.parseDate(arrivalDateProp.valueCandidate) && !(this.parseDate(departureDateProp.valueCandidate) && departureDateProp.isValid)) {
                    this.form = tslib_1.__assign({}, this.form, { arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: moment(this.parseDate(arrivalDateProp.valueCandidate), 'YYYY-MM-DD').add(+args.entityProperty.valueCandidate, 'd').format('YYYY-MM-DD'), numberOfNights: 1 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE0RTtBQUM1RSwwQ0FBeUM7QUFDekMsZ0VBQWtFO0FBR2xFLCtCQUFpQztBQUNqQywwQ0FBNEM7QUFDNUMsNERBQXdFO0FBQ3hFLHFDQUE0QztBQVU1QztJQXlFSSw2QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFyRTNCLGlCQUFZLEdBQUc7WUFDbEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsWUFBWSxFQUFFLFdBQVc7WUFDekIsZ0JBQWdCLEVBQUUsV0FBVztZQUM3QixxQkFBcUIsRUFDakI7Z0JBQ0k7b0JBQ0ksTUFBTSxFQUFFLGFBQWE7b0JBQ3JCLGFBQWEsRUFBRSxjQUFjO29CQUM3QixPQUFPLEVBQUUsQ0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsWUFBWSxFQUFFO3dCQUNWLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtxQkFDekI7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLGVBQWU7b0JBQ3ZCLGFBQWEsRUFBRSxnQkFBZ0I7b0JBQy9CLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixZQUFZLEVBQUU7d0JBQ1YsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO3FCQUN6QjtpQkFDSjtnQkFDRDtvQkFDSSxNQUFNLEVBQUUsZ0JBQWdCO29CQUN4QixhQUFhLEVBQUUsV0FBVztvQkFDMUIsT0FBTyxFQUFFLENBQUM7b0JBQ1YsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFlBQVksRUFBRTt3QkFDVixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7d0JBQ3RCOzRCQUNJLE1BQU0sRUFBRSxPQUFPOzRCQUNmLFFBQVEsRUFBRTtnQ0FDTixPQUFPLEVBQUUsWUFBWTtnQ0FDckIsY0FBYyxFQUFF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QixNQUFNO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25ELGFBQWEsQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RixNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7SUF2TkQ7UUFEQyxnQkFBUyxDQUFDLDhCQUFvQixDQUFDOzBDQUNaLDhCQUFvQjs0REFBQztJQUhoQyxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQztpREEwRThCLGVBQU07T0F6RXpCLG1CQUFtQixDQTJOL0I7SUFBRCwwQkFBQztDQUFBLEFBM05ELElBMk5DO0FBM05ZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbk1vZHVsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcbmltcG9ydCB7IFJhZERhdGFGb3JtQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXInO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3BsYXRmb3JtJztcblxuZGVjbGFyZSB2YXIgamF2YTogYW55O1xuZGVjbGFyZSB2YXIgTlNEYXRlRm9ybWF0dGVyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLW1haW4tY29tcG9uZW50JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtbWFpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gICAgQFZpZXdDaGlsZChSYWREYXRhRm9ybUNvbXBvbmVudClcbiAgICBwdWJsaWMgcmFkRGF0YUZvcm06IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuICAgIHB1YmxpYyBmb3JtTWV0YWRhdGEgPSB7XG4gICAgICAgICdpc1JlYWRPbmx5JzogZmFsc2UsXG4gICAgICAgICdjb21taXRNb2RlJzogJ0ltbWVkaWF0ZScsXG4gICAgICAgICd2YWxpZGF0aW9uTW9kZSc6ICdJbW1lZGlhdGUnLFxuICAgICAgICAncHJvcGVydHlBbm5vdGF0aW9ucyc6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdhcnJpdmFsRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdBcnJpdmFsIERhdGUnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAwLFxuICAgICAgICAgICAgICAgICAgICAnZWRpdG9yJzogJ0RhdGVQaWNrZXInLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJ25hbWUnOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnZGVwYXJ0dXJlRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdEZXBhcnR1cmUgRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDEsXG4gICAgICAgICAgICAgICAgICAgICdlZGl0b3InOiAnRGF0ZVBpY2tlcicsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAnbmFtZSc6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdudW1iZXJPZk5pZ2h0cycsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdOby4gbmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAyLFxuICAgICAgICAgICAgICAgICAgICAncmVhZE9ubHknOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJ25hbWUnOiAnTm9uRW1wdHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWdFeCc6ICdeXFxcXGR7MCwyfSQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3JNZXNzYWdlJzogJ05vLiBuaWdodCBzaG91bGQgPjAgYW5kIDwxMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ251bWJlck9mUEFYJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ05vLiBQQVgnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAzLFxuICAgICAgICAgICAgICAgICAgICAndmFsaWRhdG9ycyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdOb25FbXB0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmFtcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yTWVzc2FnZSc6ICdQbGVhc2UgcHJvdmlkZSB5b3VyIG51bWJlciBvZiBwYXNzYWdlcnMuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnUmVnRXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWdFeCc6ICdeWzEtOV1bMC05XXswLDJ9JCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvck1lc3NhZ2UnOiAnTm8uIFBBWCBzaG91bGQgPjAgYW5kIDwxMDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgfTtcbiAgICBmb3JtOiB7IGFycml2YWxEYXRlOiBzdHJpbmcsIGRlcGFydHVyZURhdGU6IHN0cmluZywgbnVtYmVyT2ZOaWdodHM6IG51bWJlciwgbnVtYmVyT2ZQQVg6IG51bWJlciB9ID0ge1xuICAgICAgICBhcnJpdmFsRGF0ZTogbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgIGRlcGFydHVyZURhdGU6IG1vbWVudCgpLmFkZCgxLCAnZCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICBudW1iZXJPZk5pZ2h0czogMSxcbiAgICAgICAgbnVtYmVyT2ZQQVg6IDEsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgfVxuXG4gICAgZ29TZWFyY2hUcmlwKCkge1xuICAgICAgICBpZiAodGhpcy5yYWREYXRhRm9ybS5kYXRhRm9ybS5oYXNWYWxpZGF0aW9uRXJyb3JzKCkpIHtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdQbGVhc2UgZml4IGVycm9yIGZpZWxkcycpLnNob3coKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlYXJjaC1yZXN1bHQnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMuZm9ybVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBvblByb3BlcnR5VmFsaWRhdGUoYXJncykge1xuICAgICAgICBsZXQgdmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGRhdGFGb3JtID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBvdGhlckRhdGUsIGN1cnJlbnREYXRlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MucHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdhcnJpdmFsRGF0ZSc6XG4gICAgICAgICAgICAgICAgb3RoZXJEYXRlID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2RlcGFydHVyZURhdGUnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IGFyZ3MuZW50aXR5UHJvcGVydHk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VEYXRlKG90aGVyRGF0ZS52YWx1ZUNhbmRpZGF0ZSkgJiYgdGhpcy5wYXJzZURhdGUob3RoZXJEYXRlLnZhbHVlQ2FuZGlkYXRlKSA8IHRoaXMucGFyc2VEYXRlKGN1cnJlbnREYXRlLnZhbHVlQ2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5lcnJvck1lc3NhZ2UgPSAnQXJyaXZhbCBkYXRlIHNob3VsZCBsZXNzIHRoYW4gZGVwYXJ0dXJlIGRhdGUnO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgnYXJyaXZhbERhdGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKCdkZXBhcnR1cmVEYXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVwYXJ0dXJlRGF0ZSc6XG4gICAgICAgICAgICAgICAgb3RoZXJEYXRlID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2Fycml2YWxEYXRlJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGUgPSBhcmdzLmVudGl0eVByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlRGF0ZShvdGhlckRhdGUudmFsdWVDYW5kaWRhdGUpID4gdGhpcy5wYXJzZURhdGUoY3VycmVudERhdGUudmFsdWVDYW5kaWRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLmVycm9yTWVzc2FnZSA9ICdEZXBhcnR1cmUgZGF0ZSBzaG91bGQgZ3JlYXRlciB0aGFuIGFycml2YWwgZGF0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdGhlckRhdGUuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgnYXJyaXZhbERhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy5yZXR1cm5WYWx1ZSA9IHZhbGlkYXRpb25SZXN1bHQ7XG4gICAgfVxuXG4vLyA8PCBhbmd1bGFyLWRhdGFmb3JtLXByb3BlcnR5LXZhbGlkYXRlLWV2ZW50XG4gICAgcHVibGljIG9uUHJvcGVydHlWYWxpZGF0ZWQoYXJncykge1xuICAgICAgICBsZXQgeyBvYmplY3Q6IGRhdGFGb3JtLCBwcm9wZXJ0eU5hbWUgfSA9IGFyZ3M7XG4gICAgICAgIGxldCBhcnJpdmFsRGF0ZVByb3AgPSBkYXRhRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnYXJyaXZhbERhdGUnKTtcbiAgICAgICAgbGV0IGRlcGFydHVyZURhdGVQcm9wID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ2RlcGFydHVyZURhdGUnKTtcbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ2Fycml2YWxEYXRlJyB8fCBwcm9wZXJ0eU5hbWUgPT09ICdkZXBhcnR1cmVEYXRlJykge1xuICAgICAgICAgICAgaWYgKGFycml2YWxEYXRlUHJvcC5pc1ZhbGlkICYmIGRlcGFydHVyZURhdGVQcm9wLmlzVmFsaWRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgICAgIGxldCBudW1iZXJPZk5pZ2h0cyA9IG1vbWVudChkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSwgJ1lZWVktTU0tREQnKS5kaWZmKG1vbWVudChhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUsICdZWVlZLU1NLUREJyksICdkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZk5pZ2h0cyA9IG1vbWVudCh0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkpLmRpZmYodGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSwgJ2QnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIGFycml2YWxEYXRlOiB0aGlzLnBhcnNlRGF0ZShhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLFxuICAgICAgICAgICAgICAgICAgICBkZXBhcnR1cmVEYXRlOiB0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhRm9ybS5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycml2YWxEYXRlUHJvcC5pc1ZhbGlkICYmIHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgISh0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkgJiYgZGVwYXJ0dXJlRGF0ZVByb3AuaXNWYWxpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyaXZhbERhdGU6IHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnR1cmVEYXRlOiBtb21lbnQodGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSwgJ1lZWVktTU0tREQnKS5hZGQoK2FyZ3MuZW50aXR5UHJvcGVydHkudmFsdWVDYW5kaWRhdGUsICdkJykuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZk5pZ2h0czogMVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHlOYW1lID09PSAnbnVtYmVyT2ZOaWdodHMnKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyT2ZOaWdodHMgPSArYXJncy5lbnRpdHlQcm9wZXJ0eS52YWx1ZUNhbmRpZGF0ZSB8fCAwO1xuICAgICAgICAgICAgaWYgKGFycml2YWxEYXRlUHJvcC5pc1ZhbGlkICYmICthcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZOaWdodHMsXG4gICAgICAgICAgICAgICAgICAgIGFycml2YWxEYXRlOiB0aGlzLnBhcnNlRGF0ZShhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLFxuICAgICAgICAgICAgICAgICAgICBkZXBhcnR1cmVEYXRlOiBtb21lbnQoK2Fycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkuYWRkKG51bWJlck9mTmlnaHRzLCAnZCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZGF0YUZvcm0ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAvLyAgICAgY29uc3QgZGF0YUZvcm0gPSBhcmdzLm9iamVjdDtcbiAgICAgICAgLy8gICAgIGNvbnN0IHBhc3N3b3JkMiA9IGRhdGFGb3JtLmdldFByb3BlcnR5QnlOYW1lKCdwYXNzd29yZDInKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IHBhc3N3b3JkMSA9IGFyZ3MuZW50aXR5UHJvcGVydHk7XG4gICAgICAgIC8vICAgICBpZiAocGFzc3dvcmQyLnZhbHVlQ2FuZGlkYXRlICE9PSAnJykge1xuICAgICAgICAvLyAgICAgICAgIGlmIChwYXNzd29yZDEudmFsdWVDYW5kaWRhdGUgIT09IHBhc3N3b3JkMi52YWx1ZUNhbmRpZGF0ZSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhRm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ3Bhc3N3b3JkMicsIGZhbHNlKTtcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhRm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ3Bhc3N3b3JkMicsIHRydWUpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHB1YmxpYyBwYXJzZURhdGUoZGF0ZVN0cmluZ09yTnVtYmVyKSB7XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHJldHVybiAobW9tZW50KCtkYXRlU3RyaW5nT3JOdW1iZXIpIHx8IG1vbWVudChkYXRlU3RyaW5nT3JOdW1iZXIpKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiArZGF0ZVN0cmluZ09yTnVtYmVyID8gKG1vbWVudCgrZGF0ZVN0cmluZ09yTnVtYmVyKSB8fCBtb21lbnQoZGF0ZVN0cmluZ09yTnVtYmVyKSkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBkYXRlU3RyaW5nT3JOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyBpcyBlaXRoZXIgbnVtYmVyIGluIHN0cmluZyBvciBkYXRlIGZvcm1hdHRlZCBpbiBzdHJpbmdcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FZGl0b3JVcGRhdGUoYXJncykge1xuICAgICAgICBpZiAoYXJncy5wcm9wZXJ0eU5hbWUgPT0gJ251bWJlck9mTmlnaHRzJyB8fCBhcmdzLnByb3BlcnR5TmFtZSA9PSAnbnVtYmVyT2ZQQVgnKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUVkaXRvclNwYWNpbmcoYXJncy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLnByb3BlcnR5TmFtZSA9PSAnYXJyaXZhbERhdGUnIHx8IGFyZ3MucHJvcGVydHlOYW1lID09ICdkZXBhcnR1cmVEYXRlJykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEYXRlRm9ybWF0dGluZyhhcmdzLmVkaXRvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUVkaXRvclNwYWNpbmcoZWRpdG9yKSB7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbk1vZHVsZS5pb3MpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbERlZiA9IGVkaXRvci5ncmlkTGF5b3V0LmRlZmluaXRpb25Gb3JWaWV3KGVkaXRvci52YWx1ZUxhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsRGVmLmNvbnRlbnRPZmZzZXQgPSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogLTI1LFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWRpdG9yLmdldEhlYWRlclZpZXcoKS5zZXRQYWRkaW5nKDEyLCAxMiwgMTIsIDQ4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlRGF0ZUZvcm1hdHRpbmcoZWRpdG9yKSB7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbk1vZHVsZS5pb3MpIHtcbiAgICAgICAgICAgIHZhciBkYXRlRm9ybWF0dGVyID0gTlNEYXRlRm9ybWF0dGVyLmFsbG9jKCkuaW5pdCgpO1xuICAgICAgICAgICAgZGF0ZUZvcm1hdHRlci5kYXRlRm9ybWF0ID0gJ3l5eXktTU0tZGQnO1xuICAgICAgICAgICAgZWRpdG9yLmRhdGVGb3JtYXR0ZXIgPSBkYXRlRm9ybWF0dGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNpbXBsZURhdGVGb3JtYXQgPSBuZXcgamF2YS50ZXh0LlNpbXBsZURhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBqYXZhLnV0aWwuTG9jYWxlLlVTKTtcbiAgICAgICAgICAgIGVkaXRvci5zZXREYXRlRm9ybWF0KHNpbXBsZURhdGVGb3JtYXQpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==