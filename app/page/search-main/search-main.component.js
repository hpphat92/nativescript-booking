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
                this.form = tslib_1.__assign({}, this.form, { arrivalDate: this.parseDate(arrivalDateProp.valueCandidate), departureDate: this.parseDate(departureDateProp.valueCandidate), numberOfNights: moment(this.parseDate(departureDateProp.valueCandidate)).diff(this.parseDate(arrivalDateProp.valueCandidate), 'd') });
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
            return moment(dateStringOrNumber).toDate() ? (moment(+dateStringOrNumber) || moment(dateStringOrNumber)).format('YYYY-MM-DD') : dateStringOrNumber;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE0RTtBQUM1RSwwQ0FBeUM7QUFDekMsZ0VBQWtFO0FBR2xFLCtCQUFpQztBQUNqQywwQ0FBNEM7QUFDNUMsNERBQXdFO0FBQ3hFLHFDQUE0QztBQVU1QztJQXlFSSw2QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFyRTNCLGlCQUFZLEdBQUc7WUFDbEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsWUFBWSxFQUFFLFdBQVc7WUFDekIsZ0JBQWdCLEVBQUUsV0FBVztZQUM3QixxQkFBcUIsRUFDakI7Z0JBQ0k7b0JBQ0ksTUFBTSxFQUFFLGFBQWE7b0JBQ3JCLGFBQWEsRUFBRSxjQUFjO29CQUM3QixPQUFPLEVBQUUsQ0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsWUFBWSxFQUFFO3dCQUNWLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtxQkFDekI7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLGVBQWU7b0JBQ3ZCLGFBQWEsRUFBRSxnQkFBZ0I7b0JBQy9CLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixZQUFZLEVBQUU7d0JBQ1YsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO3FCQUN6QjtpQkFDSjtnQkFDRDtvQkFDSSxNQUFNLEVBQUUsZ0JBQWdCO29CQUN4QixhQUFhLEVBQUUsV0FBVztvQkFDMUIsT0FBTyxFQUFFLENBQUM7b0JBQ1YsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFlBQVksRUFBRTt3QkFDVixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7d0JBQ3RCOzRCQUNJLE1BQU0sRUFBRSxPQUFPOzRCQUNmLFFBQVEsRUFBRTtnQ0FDTixPQUFPLEVBQUUsWUFBWTtnQ0FDckIsY0FBYyxFQUFF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QUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQW5ORDtRQURDLGdCQUFTLENBQUMsOEJBQW9CLENBQUM7MENBQ1osOEJBQW9COzREQUFDO0lBSGhDLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO2lEQTBFOEIsZUFBTTtPQXpFekIsbUJBQW1CLENBdU4vQjtJQUFELDBCQUFDO0NBQUEsQUF2TkQsSUF1TkM7QUF2Tlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgUHJvcGVydHlWYWxpZGF0b3IgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0nO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuaW1wb3J0IHsgUmFkRGF0YUZvcm1Db21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhcic7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuXG5kZWNsYXJlIHZhciBqYXZhOiBhbnk7XG5kZWNsYXJlIHZhciBOU0RhdGVGb3JtYXR0ZXI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZWFyY2gtbWFpbi1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1tYWluLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFJhZERhdGFGb3JtQ29tcG9uZW50KVxuICAgIHB1YmxpYyByYWREYXRhRm9ybTogUmFkRGF0YUZvcm1Db21wb25lbnQ7XG4gICAgcHVibGljIGZvcm1NZXRhZGF0YSA9IHtcbiAgICAgICAgJ2lzUmVhZE9ubHknOiBmYWxzZSxcbiAgICAgICAgJ2NvbW1pdE1vZGUnOiAnSW1tZWRpYXRlJyxcbiAgICAgICAgJ3ZhbGlkYXRpb25Nb2RlJzogJ0ltbWVkaWF0ZScsXG4gICAgICAgICdwcm9wZXJ0eUFubm90YXRpb25zJzpcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2Fycml2YWxEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ0Fycml2YWwgRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICdlZGl0b3InOiAnRGF0ZVBpY2tlcicsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAnbmFtZSc6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkZXBhcnR1cmVEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ0RlcGFydHVyZSBEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2luZGV4JzogMSxcbiAgICAgICAgICAgICAgICAgICAgJ2VkaXRvcic6ICdEYXRlUGlja2VyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbGlkYXRvcnMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICduYW1lJzogJ05vbkVtcHR5JyB9LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ251bWJlck9mTmlnaHRzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ05vLiBuaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDIsXG4gICAgICAgICAgICAgICAgICAgICdyZWFkT25seSc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAnbmFtZSc6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdSZWdFeCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmFtcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlZ0V4JzogJ15cXFxcZHswLDJ9JCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvck1lc3NhZ2UnOiAnTm8uIG5pZ2h0IHNob3VsZCA+MCBhbmQgPDEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnbnVtYmVyT2ZQQVgnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheU5hbWUnOiAnTm8uIFBBWCcsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDMsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ05vbkVtcHR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGFyYW1zJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3JNZXNzYWdlJzogJ1BsZWFzZSBwcm92aWRlIHlvdXIgbnVtYmVyIG9mIHBhc3NhZ2Vycy4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdSZWdFeCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmFtcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlZ0V4JzogJ15bMS05XVswLTldezAsMn0kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yTWVzc2FnZSc6ICdOby4gUEFYIHNob3VsZCA+MCBhbmQgPDEwMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICB9O1xuICAgIGZvcm06IHsgYXJyaXZhbERhdGU6IHN0cmluZywgZGVwYXJ0dXJlRGF0ZTogc3RyaW5nLCBudW1iZXJPZk5pZ2h0czogbnVtYmVyLCBudW1iZXJPZlBBWDogbnVtYmVyIH0gPSB7XG4gICAgICAgIGFycml2YWxEYXRlOiBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgZGVwYXJ0dXJlRGF0ZTogbW9tZW50KCkuYWRkKDEsICdkJykuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgIG51bWJlck9mTmlnaHRzOiAxLFxuICAgICAgICBudW1iZXJPZlBBWDogMSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB9XG5cbiAgICBnb1NlYXJjaFRyaXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZERhdGFGb3JtLmRhdGFGb3JtLmhhc1ZhbGlkYXRpb25FcnJvcnMoKSkge1xuICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoJ1BsZWFzZSBmaXggZXJyb3IgZmllbGRzJykuc2hvdygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2VhcmNoLXJlc3VsdCddLCB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczogdGhpcy5mb3JtXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIG9uUHJvcGVydHlWYWxpZGF0ZShhcmdzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZGF0YUZvcm0gPSBhcmdzLm9iamVjdDtcbiAgICAgICAgbGV0IG90aGVyRGF0ZSwgY3VycmVudERhdGU7XG4gICAgICAgIHN3aXRjaCAoYXJncy5wcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Fycml2YWxEYXRlJzpcbiAgICAgICAgICAgICAgICBvdGhlckRhdGUgPSBkYXRhRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnZGVwYXJ0dXJlRGF0ZScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlID0gYXJncy5lbnRpdHlQcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZURhdGUob3RoZXJEYXRlLnZhbHVlQ2FuZGlkYXRlKSAmJiB0aGlzLnBhcnNlRGF0ZShvdGhlckRhdGUudmFsdWVDYW5kaWRhdGUpIDwgdGhpcy5wYXJzZURhdGUoY3VycmVudERhdGUudmFsdWVDYW5kaWRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLmVycm9yTWVzc2FnZSA9ICdBcnJpdmFsIGRhdGUgc2hvdWxkIGxlc3MgdGhhbiBkZXBhcnR1cmUgZGF0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKCdhcnJpdmFsRGF0ZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhRm9ybS5ub3RpZnlWYWxpZGF0ZWQoJ2RlcGFydHVyZURhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZXBhcnR1cmVEYXRlJzpcbiAgICAgICAgICAgICAgICBvdGhlckRhdGUgPSBkYXRhRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnYXJyaXZhbERhdGUnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IGFyZ3MuZW50aXR5UHJvcGVydHk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VEYXRlKG90aGVyRGF0ZS52YWx1ZUNhbmRpZGF0ZSkgPiB0aGlzLnBhcnNlRGF0ZShjdXJyZW50RGF0ZS52YWx1ZUNhbmRpZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERhdGUuZXJyb3JNZXNzYWdlID0gJ0RlcGFydHVyZSBkYXRlIHNob3VsZCBncmVhdGVyIHRoYW4gYXJyaXZhbCBkYXRlJztcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyRGF0ZS5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKCdhcnJpdmFsRGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBhcmdzLnJldHVyblZhbHVlID0gdmFsaWRhdGlvblJlc3VsdDtcbiAgICB9XG5cbi8vIDw8IGFuZ3VsYXItZGF0YWZvcm0tcHJvcGVydHktdmFsaWRhdGUtZXZlbnRcbiAgICBwdWJsaWMgb25Qcm9wZXJ0eVZhbGlkYXRlZChhcmdzKSB7XG4gICAgICAgIGxldCB7IG9iamVjdDogZGF0YUZvcm0sIHByb3BlcnR5TmFtZSB9ID0gYXJncztcbiAgICAgICAgbGV0IGFycml2YWxEYXRlUHJvcCA9IGRhdGFGb3JtLmdldFByb3BlcnR5QnlOYW1lKCdhcnJpdmFsRGF0ZScpO1xuICAgICAgICBsZXQgZGVwYXJ0dXJlRGF0ZVByb3AgPSBkYXRhRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZSgnZGVwYXJ0dXJlRGF0ZScpO1xuICAgICAgICBpZiAocHJvcGVydHlOYW1lID09PSAnYXJyaXZhbERhdGUnIHx8IHByb3BlcnR5TmFtZSA9PT0gJ2RlcGFydHVyZURhdGUnKSB7XG4gICAgICAgICAgICBpZiAoYXJyaXZhbERhdGVQcm9wLmlzVmFsaWQgJiYgZGVwYXJ0dXJlRGF0ZVByb3AuaXNWYWxpZFxuICAgICAgICAgICAgICAgICYmIHRoaXMucGFyc2VEYXRlKGRlcGFydHVyZURhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSAmJiB0aGlzLnBhcnNlRGF0ZShhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgIGFycml2YWxEYXRlOiB0aGlzLnBhcnNlRGF0ZShhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLFxuICAgICAgICAgICAgICAgICAgICBkZXBhcnR1cmVEYXRlOiB0aGlzLnBhcnNlRGF0ZShkZXBhcnR1cmVEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzOiBtb21lbnQodGhpcy5wYXJzZURhdGUoZGVwYXJ0dXJlRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpKS5kaWZmKHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSksICdkJylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGRhdGFGb3JtLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyaXZhbERhdGVQcm9wLmlzVmFsaWQgJiYgdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSAmJiAhKHRoaXMucGFyc2VEYXRlKGRlcGFydHVyZURhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSAmJiBkZXBhcnR1cmVEYXRlUHJvcC5pc1ZhbGlkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJpdmFsRGF0ZTogdGhpcy5wYXJzZURhdGUoYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcGFydHVyZURhdGU6IG1vbWVudCh0aGlzLnBhcnNlRGF0ZShhcnJpdmFsRGF0ZVByb3AudmFsdWVDYW5kaWRhdGUpLCAnWVlZWS1NTS1ERCcpLmFkZCgrYXJncy5lbnRpdHlQcm9wZXJ0eS52YWx1ZUNhbmRpZGF0ZSwgJ2QnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mTmlnaHRzOiAxXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdudW1iZXJPZk5pZ2h0cycpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXJPZk5pZ2h0cyA9ICthcmdzLmVudGl0eVByb3BlcnR5LnZhbHVlQ2FuZGlkYXRlIHx8IDA7XG4gICAgICAgICAgICBpZiAoYXJyaXZhbERhdGVQcm9wLmlzVmFsaWQgJiYgK2Fycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZk5pZ2h0cyxcbiAgICAgICAgICAgICAgICAgICAgYXJyaXZhbERhdGU6IHRoaXMucGFyc2VEYXRlKGFycml2YWxEYXRlUHJvcC52YWx1ZUNhbmRpZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgIGRlcGFydHVyZURhdGU6IG1vbWVudCgrYXJyaXZhbERhdGVQcm9wLnZhbHVlQ2FuZGlkYXRlKS5hZGQobnVtYmVyT2ZOaWdodHMsICdkJykuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhRm9ybS5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAocHJvcGVydHlOYW1lID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBkYXRhRm9ybSA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICAvLyAgICAgY29uc3QgcGFzc3dvcmQyID0gZGF0YUZvcm0uZ2V0UHJvcGVydHlCeU5hbWUoJ3Bhc3N3b3JkMicpO1xuICAgICAgICAvLyAgICAgY29uc3QgcGFzc3dvcmQxID0gYXJncy5lbnRpdHlQcm9wZXJ0eTtcbiAgICAgICAgLy8gICAgIGlmIChwYXNzd29yZDIudmFsdWVDYW5kaWRhdGUgIT09ICcnKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHBhc3N3b3JkMS52YWx1ZUNhbmRpZGF0ZSAhPT0gcGFzc3dvcmQyLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgncGFzc3dvcmQyJywgZmFsc2UpO1xuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGFGb3JtLm5vdGlmeVZhbGlkYXRlZCgncGFzc3dvcmQyJywgdHJ1ZSk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlRGF0ZShkYXRlU3RyaW5nT3JOdW1iZXIpIHtcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIChtb21lbnQoK2RhdGVTdHJpbmdPck51bWJlcikgfHwgbW9tZW50KGRhdGVTdHJpbmdPck51bWJlcikpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlU3RyaW5nT3JOdW1iZXIpLnRvRGF0ZSgpID8gKG1vbWVudCgrZGF0ZVN0cmluZ09yTnVtYmVyKSB8fCBtb21lbnQoZGF0ZVN0cmluZ09yTnVtYmVyKSkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBkYXRlU3RyaW5nT3JOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyBpcyBlaXRoZXIgbnVtYmVyIGluIHN0cmluZyBvciBkYXRlIGZvcm1hdHRlZCBpbiBzdHJpbmdcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FZGl0b3JVcGRhdGUoYXJncykge1xuICAgICAgICBpZiAoYXJncy5wcm9wZXJ0eU5hbWUgPT0gJ251bWJlck9mTmlnaHRzJyB8fCBhcmdzLnByb3BlcnR5TmFtZSA9PSAnbnVtYmVyT2ZQQVgnKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUVkaXRvclNwYWNpbmcoYXJncy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLnByb3BlcnR5TmFtZSA9PSAnYXJyaXZhbERhdGUnIHx8IGFyZ3MucHJvcGVydHlOYW1lID09ICdkZXBhcnR1cmVEYXRlJykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEYXRlRm9ybWF0dGluZyhhcmdzLmVkaXRvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUVkaXRvclNwYWNpbmcoZWRpdG9yKSB7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbk1vZHVsZS5pb3MpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbERlZiA9IGVkaXRvci5ncmlkTGF5b3V0LmRlZmluaXRpb25Gb3JWaWV3KGVkaXRvci52YWx1ZUxhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsRGVmLmNvbnRlbnRPZmZzZXQgPSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogLTI1LFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWRpdG9yLmdldEhlYWRlclZpZXcoKS5zZXRQYWRkaW5nKDEyLCAxMiwgMTIsIDQ4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlRGF0ZUZvcm1hdHRpbmcoZWRpdG9yKSB7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbk1vZHVsZS5pb3MpIHtcbiAgICAgICAgICAgIHZhciBkYXRlRm9ybWF0dGVyID0gTlNEYXRlRm9ybWF0dGVyLmFsbG9jKCkuaW5pdCgpO1xuICAgICAgICAgICAgZGF0ZUZvcm1hdHRlci5kYXRlRm9ybWF0ID0gJ3l5eXktTU0tZGQnO1xuICAgICAgICAgICAgZWRpdG9yLmRhdGVGb3JtYXR0ZXIgPSBkYXRlRm9ybWF0dGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNpbXBsZURhdGVGb3JtYXQgPSBuZXcgamF2YS50ZXh0LlNpbXBsZURhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBqYXZhLnV0aWwuTG9jYWxlLlVTKTtcbiAgICAgICAgICAgIGVkaXRvci5zZXREYXRlRm9ybWF0KHNpbXBsZURhdGVGb3JtYXQpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==