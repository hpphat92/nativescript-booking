"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_ui_dataform_1 = require("nativescript-ui-dataform");
var nativescript_angular_1 = require("nativescript-angular");
var RangeDateValidate = /** @class */ (function (_super) {
    __extends(RangeDateValidate, _super);
    function RangeDateValidate() {
        var _this = _super.call(this) || this;
        _this.errorMessage = 'Please enter: admin1';
        return _this;
    }
    RangeDateValidate.prototype.validate = function (value, propertyName) {
        debugger;
        return value.toLowerCase() === 'admin1';
    };
    return RangeDateValidate;
}(nativescript_ui_dataform_1.PropertyValidator));
nativescript_angular_1.registerElement('RangeDateValidate', function () { return RangeDateValidate; });
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
    SearchMainComponent.prototype.gotoSignup = function () {
        this.router.navigate(['page', 'signup']);
    };
    SearchMainComponent = __decorate([
        core_1.Component({
            selector: 'search-main-component',
            moduleId: module.id,
            templateUrl: './search-main.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SearchMainComponent);
    return SearchMainComponent;
}());
exports.SearchMainComponent = SearchMainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLW1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxxRUFBNkQ7QUFDN0QsNkRBQXVEO0FBRXZEO0lBQWdDLHFDQUFpQjtJQUM3QztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQURHLEtBQUksQ0FBQyxZQUFZLEdBQUcsc0JBQXNCLENBQUM7O0lBQy9DLENBQUM7SUFFTSxvQ0FBUSxHQUFmLFVBQWdCLEtBQVUsRUFBRSxZQUFvQjtRQUM1QyxRQUFRLENBQUM7UUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBZ0MsNENBQWlCLEdBVWhEO0FBRUQsc0NBQWUsQ0FBQyxtQkFBbUIsRUFBRSxjQUFNLE9BQUssaUJBQWlCLEVBQXRCLENBQXNCLENBQUMsQ0FBQztBQU9uRTtJQXFFSSw2QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFuRTNCLGlCQUFZLEdBQUc7WUFDbEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsWUFBWSxFQUFFLFdBQVc7WUFDekIsZ0JBQWdCLEVBQUUsV0FBVztZQUM3QixxQkFBcUIsRUFDakI7Z0JBQ0k7b0JBQ0ksTUFBTSxFQUFFLGFBQWE7b0JBQ3JCLGFBQWEsRUFBRSxjQUFjO29CQUM3QixPQUFPLEVBQUUsQ0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsWUFBWSxFQUFFO3dCQUNWLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTt3QkFDdEI7NEJBQ0ksTUFBTSxFQUFFLG1CQUFtQjs0QkFDM0IsUUFBUSxFQUFFO2dDQUNOLGlCQUFpQixFQUFFLGVBQWU7NkJBQ3JDO3lCQUNKO3FCQUNKO2lCQUNKO2dCQUNEO29CQUNJLE1BQU0sRUFBRSxlQUFlO29CQUN2QixhQUFhLEVBQUUsZ0JBQWdCO29CQUMvQixPQUFPLEVBQUUsQ0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsWUFBWSxFQUFFO3dCQUNWLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtxQkFPekI7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsYUFBYSxFQUFFLFdBQVc7b0JBQzFCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRSxRQUFRO29CQUNsQixZQUFZLEVBQUU7d0JBQ1YsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO3FCQUN6QjtpQkFDSjtnQkFDRDtvQkFDSSxNQUFNLEVBQUUsYUFBYTtvQkFDckIsYUFBYSxFQUFFLFNBQVM7b0JBQ3hCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFlBQVksRUFBRTt3QkFDVjs0QkFDSSxNQUFNLEVBQUUsVUFBVTs0QkFDbEIsUUFBUSxFQUFFO2dDQUNOLGNBQWMsRUFBRSwwQ0FBMEM7NkJBQzdEO3lCQUNKO3FCQUNKO2lCQUNKO2FBQ0o7U0FDUixDQUFDO1FBQ0YsU0FBSSxHQUE0RjtZQUM1RixXQUFXLEVBQUUsSUFBSTtZQUNqQixhQUFhLEVBQUUsSUFBSTtZQUNuQixjQUFjLEVBQUUsQ0FBQztZQUNqQixXQUFXLEVBQUUsQ0FBQztTQUNqQixDQUFDO1FBR0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBOUVRLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQXNFOEIsZUFBTTtPQXJFekIsbUJBQW1CLENBK0UvQjtJQUFELDBCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9wZXJ0eVZhbGlkYXRvciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybSc7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5cbmNsYXNzIFJhbmdlRGF0ZVZhbGlkYXRlIGV4dGVuZHMgUHJvcGVydHlWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdQbGVhc2UgZW50ZXI6IGFkbWluMSc7XG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlKHZhbHVlOiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2FkbWluMSc7XG4gICAgfVxufVxuXG5yZWdpc3RlckVsZW1lbnQoJ1JhbmdlRGF0ZVZhbGlkYXRlJywgKCkgPT4gPGFueT5SYW5nZURhdGVWYWxpZGF0ZSk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLW1haW4tY29tcG9uZW50JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtbWFpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGZvcm1NZXRhZGF0YSA9IHtcbiAgICAgICAgJ2lzUmVhZE9ubHknOiBmYWxzZSxcbiAgICAgICAgJ2NvbW1pdE1vZGUnOiAnSW1tZWRpYXRlJyxcbiAgICAgICAgJ3ZhbGlkYXRpb25Nb2RlJzogJ0ltbWVkaWF0ZScsXG4gICAgICAgICdwcm9wZXJ0eUFubm90YXRpb25zJzpcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2Fycml2YWxEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ0Fycml2YWwgRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICdlZGl0b3InOiAnRGF0ZVBpY2tlcicsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAnbmFtZSc6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdSYW5nZURhdGVWYWxpZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmFtcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUmFuZ2VDb21wb25lbnQ6ICdkZXBhcnR1cmVEYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdkZXBhcnR1cmVEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogJ0RlcGFydHVyZSBEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2luZGV4JzogMSxcbiAgICAgICAgICAgICAgICAgICAgJ2VkaXRvcic6ICdEYXRlUGlja2VyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbGlkYXRvcnMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICduYW1lJzogJ05vbkVtcHR5JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICduYW1lJzogJ1JhbmdlRGF0ZVZhbGlkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAncGFyYW1zJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXhSYW5nZUNvbXBvbmVudDogJ2Fycml2YWxEYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdudW1iZXJPZk5pZ2h0cycsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdOby4gbmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAyLFxuICAgICAgICAgICAgICAgICAgICAnZWRpdG9yJzogJ051bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICd2YWxpZGF0b3JzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAnbmFtZSc6ICdOb25FbXB0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdudW1iZXJPZlBBWCcsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6ICdOby4gUEFYJyxcbiAgICAgICAgICAgICAgICAgICAgJ2luZGV4JzogMyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbGlkYXRvcnMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnTm9uRW1wdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvck1lc3NhZ2UnOiAnUGxlYXNlIHByb3ZpZGUgeW91ciBudW1iZXIgb2YgcGFzc2FnZXJzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICB9O1xuICAgIGZvcm06IHsgYXJyaXZhbERhdGU6IERhdGUsIGRlcGFydHVyZURhdGU6IERhdGUsIG51bWJlck9mTmlnaHRzOiBudW1iZXIsIG51bWJlck9mUEFYOiBudW1iZXIgfSA9IHtcbiAgICAgICAgYXJyaXZhbERhdGU6IG51bGwsXG4gICAgICAgIGRlcGFydHVyZURhdGU6IG51bGwsXG4gICAgICAgIG51bWJlck9mTmlnaHRzOiAwLFxuICAgICAgICBudW1iZXJPZlBBWDogMSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnSW5pdCBMb2dpbicpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGdvdG9TaWdudXAoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGFnZScsICdzaWdudXAnXSlcbiAgICB9XG59Il19