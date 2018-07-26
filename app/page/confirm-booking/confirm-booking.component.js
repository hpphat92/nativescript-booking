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
                }, function (err) {
                    dialogs_1.alert({
                        title: 'Error',
                        message: err,
                        okButtonText: 'Back to home'
                    }).then(function () {
                        _this.router.navigate(['']);
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
            }, 1000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1ib29raW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm0tYm9va2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9GO0FBQ3BGLDBDQUF5RDtBQUN6RCw2REFBeUU7QUFHekUsaUNBQStCO0FBQy9CLG9DQUE4QztBQUM5QyxvREFBOEM7QUFFOUMsZ0VBQWtFO0FBQ2xFLHVEQUFxRTtBQVVyRTtJQWtDSSxpQ0FBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLGdCQUFrQztRQUpsQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFyQy9DLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUN6QixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsS0FBSztRQUVFLFNBQUksR0FBRztZQUNWLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLGNBQWMsRUFBRSxvQkFBb0I7WUFDcEMsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixXQUFXLEVBQUUsVUFBVTtZ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QUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7UUFDRixPQUFPLEVBQUUsQ0FBQztRQUVWLE1BQU0sQ0FBQyxVQUFDLEVBQUc7WUFDUCxRQUFRLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLFVBQVUsQ0FBQztnQkFDUCxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7WUFDZixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxLQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztRQUM3QixDQUFDLENBQUE7SUFDTCxDQUFDO0lBL0lRLHVCQUF1QjtRQUxuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtDQUFrQztTQUNsRCxDQUFDO2lEQW1DNkIsdUJBQWM7WUFDYixlQUFNO1lBQ0Usb0JBQWM7WUFDakIsc0JBQVc7WUFDTix1Q0FBZ0I7T0F0QzdDLHVCQUF1QixDQWdKbkM7SUFBRCw4QkFBQztDQUFBLEFBaEpELElBZ0pDO0FBaEpZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50LCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEFwcENvbnN0YW50IGZyb20gJ34vYXBwLmNvbnN0YW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyBCb29raW5nU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL2FwaSc7XHJcbmltcG9ydCBQYWdlU2VydmljZSBmcm9tICd+L3BhZ2UvcGFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmlsZVBob3RvdmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1maWxlLXBob3Rvdmlldyc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBhY3Rpb24sIGNvbmZpcm0sIGFsZXJ0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzJztcclxuXHJcbmRlY2xhcmUgdmFyIGphdmE6IGFueTtcclxuZGVjbGFyZSB2YXIgTlNEYXRlRm9ybWF0dGVyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29uZmlybS1ib29raW5nLWNvbXBvbmVudCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tYm9va2luZy5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtQm9va2luZ0NvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgcHJvY2Vzc2luZ0Jvb2tpbmcgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgcHVibGljIHByb2dyZXNzVmFsdWUgPSAwO1xyXG4gICAgLy8gcHVibGljIGZvcm0gPSB7XHJcbiAgICAvLyAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgYmlydGhkYXRlOiBudWxsLFxyXG4gICAgLy8gICAgIGdlbmRlcjogMCxcclxuICAgIC8vICAgICBlbWFpbDogJycsXHJcbiAgICAvLyAgICAgcGFzc3BvcnROdW1iZXI6ICcnLFxyXG4gICAgLy8gICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgIC8vICAgICBuYXRpb25hbGl0eTogJycsXHJcbiAgICAvLyAgICAgZmlyc3RBZGRyZXNzOiAnJyxcclxuICAgIC8vICAgICBzZWNvbmRBZGRyZXNzOiAnJyxcclxuICAgIC8vICAgICBwb3N0YWxDb2RlOiAnJyxcclxuICAgIC8vICAgICByZW1hcmtzOiAnJ1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICBwdWJsaWMgZm9ybSA9IHtcclxuICAgICAgICBmaXJzdE5hbWU6ICdIb25nJyxcclxuICAgICAgICBsYXN0TmFtZTogJ1BoYXQnLFxyXG4gICAgICAgIGJpcnRoZGF0ZTogbnVsbCxcclxuICAgICAgICBnZW5kZXI6ICdNYWxlJyxcclxuICAgICAgICBlbWFpbDogJ2hwcGhhdDE5OTJAZ21haWwuY29tJyxcclxuICAgICAgICBwYXNzcG9ydE51bWJlcjogJzEyMjMxMTIyMzIxMzIyMTMyMicsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6ICcrODQ2MTYyNTI2MTUyNjUnLFxyXG4gICAgICAgIG5hdGlvbmFsaXR5OiAnVmlldCBOYW0nLFxyXG4gICAgICAgIGZpcnN0QWRkcmVzczogJzUxIEhvYW5nIFZpZXQgUC40JyxcclxuICAgICAgICBzZWNvbmRBZGRyZXNzOiAnVGFuIEJpbmgsIEhDTUMnLFxyXG4gICAgICAgIHBvc3RhbENvZGU6ICcxMDAwMCcsXHJcbiAgICAgICAgcmVtYXJrczogJydcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBib29raW5nU2VydmljZTogQm9va2luZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkVkaXRvclVwZGF0ZShhcmdzKSB7XHJcbiAgICAgICAgaWYgKGFyZ3MucHJvcGVydHlOYW1lID09ICdiaXJ0aGRhdGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0ZUZvcm1hdHRpbmcoYXJncy5lZGl0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZUVkaXRvclNwYWNpbmcoZWRpdG9yKSB7XHJcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uTW9kdWxlLmlvcykge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWxEZWYgPSBlZGl0b3IuZ3JpZExheW91dC5kZWZpbml0aW9uRm9yVmlldyhlZGl0b3IudmFsdWVMYWJlbCk7XHJcbiAgICAgICAgICAgIGxhYmVsRGVmLmNvbnRlbnRPZmZzZXQgPSB7XHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAtMjUsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVkaXRvci5nZXRIZWFkZXJWaWV3KCkuc2V0UGFkZGluZygxMiwgMTIsIDEyLCA0OCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlRGF0ZUZvcm1hdHRpbmcoZWRpdG9yKSB7XHJcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uTW9kdWxlLmlvcykge1xyXG4gICAgICAgICAgICB2YXIgZGF0ZUZvcm1hdHRlciA9IE5TRGF0ZUZvcm1hdHRlci5hbGxvYygpLmluaXQoKTtcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdHRlci5kYXRlRm9ybWF0ID0gJ3l5eXktTU0tZGQnO1xyXG4gICAgICAgICAgICBlZGl0b3IuZGF0ZUZvcm1hdHRlciA9IGRhdGVGb3JtYXR0ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHNpbXBsZURhdGVGb3JtYXQgPSBuZXcgamF2YS50ZXh0LlNpbXBsZURhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBqYXZhLnV0aWwuTG9jYWxlLlVTKTtcclxuICAgICAgICAgICAgZWRpdG9yLnNldERhdGVGb3JtYXQoc2ltcGxlRGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93Q29uZmlybURpYWxvZygpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtIGJvb2tpbmcnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnIEFyZSB5b3Ugc3VyZSB3YW50IHRvIHByb2Nlc3MgdGhlIGJvb2tpbmc/IFRob3NlIHN0ZXBzIGNhbiBiZSB1bmRvbmUgdmlhIGRpcmVjbHkgY2FsbCB0byB1cyBhdCArMDEwOTkxOTE5MTE5OC4nLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdZZXMnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm8nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uZmlybShvcHRpb25zKS50aGVuKChpc09rKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VTZXJ2aWNlLnNlbGVjdGVkQm9va2luZ0luZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogdGhpcy5mb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFya3M6IHRoaXMuZm9ybS5yZW1hcmtzXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbGxUaW1lb3V0ID0gdGhpcy50aW1lb3V0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLnBhZ2VTZXJ2aWNlLnNlbGVjdGVkQm9va2luZ0luZm87XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2tpbmdTZXJ2aWNlLmJvb2tpbmdSZXNlcnZlKG1vZGVsLmlkLCBtb2RlbClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nQ29tcGxldGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnQmFjayB0byBob21lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93RGlhbG9nQ29tcGxldGVkKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Jvb2tpbmcgcmVxdWVzdCBzdGF0dXMnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnWW91ciByZXF1ZXN0IGhhcyBiZWVuIHJlY29yZGVkLiBFbmpveSB5b3VyIHRyaXAgOiknLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdCYWNrIHRvIGhvbWUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhbGVydChvcHRpb25zKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpbWVvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmdCb29raW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdGltZWRPdXQgPSBudWxsO1xyXG4gICAgICAgIGxldCBydW5Mb29wID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGltZWRPdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSArPSBNYXRoLnJhbmRvbSgpICogMTA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1ZhbHVlID4gOTkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSA5OTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5Mb29wKCk7XHJcbiAgICAgICAgICAgIH0sIE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJ1bkxvb3AoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChjYj8pID0+IHtcclxuICAgICAgICAgICAgdGltZWRPdXQgJiYgY2xlYXJUaW1lb3V0KHRpbWVkT3V0KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gMTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==