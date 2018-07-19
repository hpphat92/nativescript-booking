"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
require("rxjs/add/operator/map");
var api_1 = require("~/shared/api");
var page_service_1 = require("~/page/page.service");
var applicationModule = require("tns-core-modules/application");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var ConfirmBookingComponent = /** @class */ (function () {
    function ConfirmBookingComponent(route, router, bookingService, pageService, routerExtensions) {
        this.route = route;
        this.router = router;
        this.bookingService = bookingService;
        this.pageService = pageService;
        this.routerExtensions = routerExtensions;
        this.processingBooking = false;
        this.isCompleted = false;
        this.progressValue = 0;
        // public form = {
        //     firstName: '',
        //     lastName: '',
        //     birthdate: null,
        //     gender: 0,
        //     email: '',
        //     passportNumber: '',
        //     phoneNumber: '',
        //     nationality: '',
        //     firstAddress: '',
        //     secondAddress: '',
        //     postalCode: '',
        //     remarks: ''
        // };
        this.form = {
            firstName: 'Hong',
            lastName: 'Phat',
            birthdate: null,
            gender: 'Male',
            email: 'hpphat1992@gmail.com',
            passportNumber: '122311223213221322',
            phoneNumber: '+84616252615265',
            nationality: 'Viet Nam',
            firstAddress: '51 Hoang Viet P.4',
            secondAddress: 'Tan Binh, HCMC',
            postalCode: '10000',
            remarks: ''
        };
    }
    ConfirmBookingComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ConfirmBookingComponent.prototype.onEditorUpdate = function (args) {
        if (args.propertyName == 'birthdate') {
            this.changeDateFormatting(args.editor);
        }
    };
    ConfirmBookingComponent.prototype.changeEditorSpacing = function (editor) {
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
    ConfirmBookingComponent.prototype.changeDateFormatting = function (editor) {
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
    ConfirmBookingComponent.prototype.showConfirmDialog = function () {
        var _this = this;
        var options = {
            title: 'Confirm booking',
            message: ' Are you sure want to process the booking? Those steps can be undone via direcly call to us at +0109919191198.',
            okButtonText: 'Yes',
            cancelButtonText: 'No'
        };
        dialogs_1.confirm(options).then(function (isOk) {
            if (isOk) {
                _this.pageService.selectedBookingInfo = {
                    user: _this.form,
                    remarks: _this.form.remarks
                };
                var callTimeout_1 = _this.timeout();
                var model = _this.pageService.selectedBookingInfo;
                _this.bookingService.bookingReserve(model.id, model)
                    .subscribe(function () {
                    callTimeout_1(function () {
                        _this.showDialogCompleted();
                    });
                });
            }
        });
    };
    ConfirmBookingComponent.prototype.showDialogCompleted = function () {
        var _this = this;
        var options = {
            title: 'Booking request status',
            message: 'Your request has been recorded. Enjoy your trip :)',
            okButtonText: 'Back to home'
        };
        dialogs_1.alert(options).then(function () {
            _this.router.navigate(['']);
        });
    };
    ConfirmBookingComponent.prototype.timeout = function () {
        var _this = this;
        this.progressValue = 0;
        this.processingBooking = true;
        var timedOut = null;
        var runLoop = function () {
            timedOut = setTimeout(function () {
                _this.progressValue += Math.random() * 10;
                if (_this.progressValue > 99) {
                    _this.progressValue = 99;
                    return;
                }
                runLoop();
            }, Math.random() * 1000);
        };
        runLoop();
        return function (cb) {
            timedOut && clearTimeout(timedOut);
            setTimeout(function () {
                cb && cb();
            }, 300);
            _this.progressValue = 100;
        };
    };
    ConfirmBookingComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'confirm-booking-component',
            moduleId: module.id,
            templateUrl: './confirm-booking.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            api_1.BookingService,
            page_service_1.default,
            nativescript_angular_1.RouterExtensions])
    ], ConfirmBookingComponent);
    return ConfirmBookingComponent;
}());
exports.ConfirmBookingComponent = ConfirmBookingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1ib29raW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm0tYm9va2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9GO0FBQ3BGLDBDQUF5RDtBQUN6RCw2REFBeUU7QUFHekUsaUNBQStCO0FBQy9CLG9DQUE4QztBQUM5QyxvREFBOEM7QUFFOUMsZ0VBQWtFO0FBQ2xFLHVEQUFxRTtBQVVyRTtJQWtDSSxpQ0FBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLGdCQUFrQztRQUpsQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFyQy9DLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUN6QixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsS0FBSztRQUVFLFNBQUksR0FBRztZQUNWLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLGNBQWMsRUFBRSxvQkFBb0I7WUFDcEMsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixXQUFXLEVBQUUsVUFBVTtZ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QyxDQUFDO1lBQ1IsS0FBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDN0IsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQXZJUSx1QkFBdUI7UUFMbkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7U0FDbEQsQ0FBQztpREFtQzZCLHVCQUFjO1lBQ2IsZUFBTTtZQUNFLG9CQUFjO1lBQ2pCLHNCQUFXO1lBQ04sdUNBQWdCO09BdEM3Qyx1QkFBdUIsQ0F3SW5DO0lBQUQsOEJBQUM7Q0FBQSxBQXhJRCxJQXdJQztBQXhJWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50LCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQXBwQ29uc3RhbnQgZnJvbSAnfi9hcHAuY29uc3RhbnQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgQm9va2luZ1NlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9hcGknO1xuaW1wb3J0IFBhZ2VTZXJ2aWNlIGZyb20gJ34vcGFnZS9wYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsZVBob3RvdmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1maWxlLXBob3Rvdmlldyc7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbk1vZHVsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IGFjdGlvbiwgY29uZmlybSwgYWxlcnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuXG5kZWNsYXJlIHZhciBqYXZhOiBhbnk7XG5kZWNsYXJlIHZhciBOU0RhdGVGb3JtYXR0ZXI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb25maXJtLWJvb2tpbmctY29tcG9uZW50JyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLWJvb2tpbmcuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtQm9va2luZ0NvbXBvbmVudCB7XG4gICAgcHVibGljIHByb2Nlc3NpbmdCb29raW5nID0gZmFsc2U7XG4gICAgcHVibGljIGlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgcHVibGljIHByb2dyZXNzVmFsdWUgPSAwO1xuICAgIC8vIHB1YmxpYyBmb3JtID0ge1xuICAgIC8vICAgICBmaXJzdE5hbWU6ICcnLFxuICAgIC8vICAgICBsYXN0TmFtZTogJycsXG4gICAgLy8gICAgIGJpcnRoZGF0ZTogbnVsbCxcbiAgICAvLyAgICAgZ2VuZGVyOiAwLFxuICAgIC8vICAgICBlbWFpbDogJycsXG4gICAgLy8gICAgIHBhc3Nwb3J0TnVtYmVyOiAnJyxcbiAgICAvLyAgICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgIC8vICAgICBuYXRpb25hbGl0eTogJycsXG4gICAgLy8gICAgIGZpcnN0QWRkcmVzczogJycsXG4gICAgLy8gICAgIHNlY29uZEFkZHJlc3M6ICcnLFxuICAgIC8vICAgICBwb3N0YWxDb2RlOiAnJyxcbiAgICAvLyAgICAgcmVtYXJrczogJydcbiAgICAvLyB9O1xuXG4gICAgcHVibGljIGZvcm0gPSB7XG4gICAgICAgIGZpcnN0TmFtZTogJ0hvbmcnLFxuICAgICAgICBsYXN0TmFtZTogJ1BoYXQnLFxuICAgICAgICBiaXJ0aGRhdGU6IG51bGwsXG4gICAgICAgIGdlbmRlcjogJ01hbGUnLFxuICAgICAgICBlbWFpbDogJ2hwcGhhdDE5OTJAZ21haWwuY29tJyxcbiAgICAgICAgcGFzc3BvcnROdW1iZXI6ICcxMjIzMTEyMjMyMTMyMjEzMjInLFxuICAgICAgICBwaG9uZU51bWJlcjogJys4NDYxNjI1MjYxNTI2NScsXG4gICAgICAgIG5hdGlvbmFsaXR5OiAnVmlldCBOYW0nLFxuICAgICAgICBmaXJzdEFkZHJlc3M6ICc1MSBIb2FuZyBWaWV0IFAuNCcsXG4gICAgICAgIHNlY29uZEFkZHJlc3M6ICdUYW4gQmluaCwgSENNQycsXG4gICAgICAgIHBvc3RhbENvZGU6ICcxMDAwMCcsXG4gICAgICAgIHJlbWFya3M6ICcnXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBib29raW5nU2VydmljZTogQm9va2luZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkVkaXRvclVwZGF0ZShhcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLnByb3BlcnR5TmFtZSA9PSAnYmlydGhkYXRlJykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEYXRlRm9ybWF0dGluZyhhcmdzLmVkaXRvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUVkaXRvclNwYWNpbmcoZWRpdG9yKSB7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbk1vZHVsZS5pb3MpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbERlZiA9IGVkaXRvci5ncmlkTGF5b3V0LmRlZmluaXRpb25Gb3JWaWV3KGVkaXRvci52YWx1ZUxhYmVsKTtcbiAgICAgICAgICAgIGxhYmVsRGVmLmNvbnRlbnRPZmZzZXQgPSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogLTI1LFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWRpdG9yLmdldEhlYWRlclZpZXcoKS5zZXRQYWRkaW5nKDEyLCAxMiwgMTIsIDQ4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlRGF0ZUZvcm1hdHRpbmcoZWRpdG9yKSB7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbk1vZHVsZS5pb3MpIHtcbiAgICAgICAgICAgIHZhciBkYXRlRm9ybWF0dGVyID0gTlNEYXRlRm9ybWF0dGVyLmFsbG9jKCkuaW5pdCgpO1xuICAgICAgICAgICAgZGF0ZUZvcm1hdHRlci5kYXRlRm9ybWF0ID0gJ3l5eXktTU0tZGQnO1xuICAgICAgICAgICAgZWRpdG9yLmRhdGVGb3JtYXR0ZXIgPSBkYXRlRm9ybWF0dGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNpbXBsZURhdGVGb3JtYXQgPSBuZXcgamF2YS50ZXh0LlNpbXBsZURhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBqYXZhLnV0aWwuTG9jYWxlLlVTKTtcbiAgICAgICAgICAgIGVkaXRvci5zZXREYXRlRm9ybWF0KHNpbXBsZURhdGVGb3JtYXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dDb25maXJtRGlhbG9nKCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBib29raW5nJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcgQXJlIHlvdSBzdXJlIHdhbnQgdG8gcHJvY2VzcyB0aGUgYm9va2luZz8gVGhvc2Ugc3RlcHMgY2FuIGJlIHVuZG9uZSB2aWEgZGlyZWNseSBjYWxsIHRvIHVzIGF0ICswMTA5OTE5MTkxMTk4LicsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbmZpcm0ob3B0aW9ucykudGhlbigoaXNPaykgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VTZXJ2aWNlLnNlbGVjdGVkQm9va2luZ0luZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHRoaXMuZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrczogdGhpcy5mb3JtLnJlbWFya3NcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBjYWxsVGltZW91dCA9IHRoaXMudGltZW91dCgpO1xuICAgICAgICAgICAgICAgIGxldCBtb2RlbCA9IHRoaXMucGFnZVNlcnZpY2Uuc2VsZWN0ZWRCb29raW5nSW5mbztcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2tpbmdTZXJ2aWNlLmJvb2tpbmdSZXNlcnZlKG1vZGVsLmlkLCBtb2RlbClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsVGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nQ29tcGxldGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93RGlhbG9nQ29tcGxldGVkKCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQm9va2luZyByZXF1ZXN0IHN0YXR1cycsXG4gICAgICAgICAgICBtZXNzYWdlOiAnWW91ciByZXF1ZXN0IGhhcyBiZWVuIHJlY29yZGVkLiBFbmpveSB5b3VyIHRyaXAgOiknLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnQmFjayB0byBob21lJ1xuICAgICAgICB9O1xuICAgICAgICBhbGVydChvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGltZW91dCgpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nQm9va2luZyA9IHRydWU7XG4gICAgICAgIGxldCB0aW1lZE91dCA9IG51bGw7XG4gICAgICAgIGxldCBydW5Mb29wID0gKCkgPT4ge1xuXG4gICAgICAgICAgICB0aW1lZE91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSArPSBNYXRoLnJhbmRvbSgpICogMTA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NWYWx1ZSA+IDk5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IDk5O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1bkxvb3AoKTtcbiAgICAgICAgICAgIH0sIE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgcnVuTG9vcCgpO1xuXG4gICAgICAgIHJldHVybiAoY2I/KSA9PiB7XG4gICAgICAgICAgICB0aW1lZE91dCAmJiBjbGVhclRpbWVvdXQodGltZWRPdXQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAxMDA7XG4gICAgICAgIH1cbiAgICB9XG59Il19