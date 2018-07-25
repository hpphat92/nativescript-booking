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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1ib29raW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm0tYm9va2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9GO0FBQ3BGLDBDQUF5RDtBQUN6RCw2REFBeUU7QUFHekUsaUNBQStCO0FBQy9CLG9DQUE4QztBQUM5QyxvREFBOEM7QUFFOUMsZ0VBQWtFO0FBQ2xFLHVEQUFxRTtBQVVyRTtJQWtDSSxpQ0FBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLGdCQUFrQztRQUpsQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFyQy9DLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUN6QixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsS0FBSztRQUVFLFNBQUksR0FBRztZQUNWLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLGNBQWMsRUFBRSxvQkFBb0I7WUFDcEMsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixXQUFXLEVBQUUsVUFBVTtZ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QUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7UUFDRixPQUFPLEVBQUUsQ0FBQztRQUVWLE1BQU0sQ0FBQyxVQUFDLEVBQUc7WUFDUCxRQUFRLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLFVBQVUsQ0FBQztnQkFDUCxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7WUFDZixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxLQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztRQUM3QixDQUFDLENBQUE7SUFDTCxDQUFDO0lBL0lRLHVCQUF1QjtRQUxuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtDQUFrQztTQUNsRCxDQUFDO2lEQW1DNkIsdUJBQWM7WUFDYixlQUFNO1lBQ0Usb0JBQWM7WUFDakIsc0JBQVc7WUFDTix1Q0FBZ0I7T0F0QzdDLHVCQUF1QixDQWdKbkM7SUFBRCw4QkFBQztDQUFBLEFBaEpELElBZ0pDO0FBaEpZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBBcHBDb25zdGFudCBmcm9tICd+L2FwcC5jb25zdGFudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBCb29raW5nU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL2FwaSc7XG5pbXBvcnQgUGFnZVNlcnZpY2UgZnJvbSAnfi9wYWdlL3BhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBGaWxlUGhvdG92aWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZpbGUtcGhvdG92aWV3JztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgYWN0aW9uLCBjb25maXJtLCBhbGVydCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncyc7XG5cbmRlY2xhcmUgdmFyIGphdmE6IGFueTtcbmRlY2xhcmUgdmFyIE5TRGF0ZUZvcm1hdHRlcjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbmZpcm0tYm9va2luZy1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tYm9va2luZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1Cb29raW5nQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgcHJvY2Vzc2luZ0Jvb2tpbmcgPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBwdWJsaWMgcHJvZ3Jlc3NWYWx1ZSA9IDA7XG4gICAgLy8gcHVibGljIGZvcm0gPSB7XG4gICAgLy8gICAgIGZpcnN0TmFtZTogJycsXG4gICAgLy8gICAgIGxhc3ROYW1lOiAnJyxcbiAgICAvLyAgICAgYmlydGhkYXRlOiBudWxsLFxuICAgIC8vICAgICBnZW5kZXI6IDAsXG4gICAgLy8gICAgIGVtYWlsOiAnJyxcbiAgICAvLyAgICAgcGFzc3BvcnROdW1iZXI6ICcnLFxuICAgIC8vICAgICBwaG9uZU51bWJlcjogJycsXG4gICAgLy8gICAgIG5hdGlvbmFsaXR5OiAnJyxcbiAgICAvLyAgICAgZmlyc3RBZGRyZXNzOiAnJyxcbiAgICAvLyAgICAgc2Vjb25kQWRkcmVzczogJycsXG4gICAgLy8gICAgIHBvc3RhbENvZGU6ICcnLFxuICAgIC8vICAgICByZW1hcmtzOiAnJ1xuICAgIC8vIH07XG5cbiAgICBwdWJsaWMgZm9ybSA9IHtcbiAgICAgICAgZmlyc3ROYW1lOiAnSG9uZycsXG4gICAgICAgIGxhc3ROYW1lOiAnUGhhdCcsXG4gICAgICAgIGJpcnRoZGF0ZTogbnVsbCxcbiAgICAgICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgICAgIGVtYWlsOiAnaHBwaGF0MTk5MkBnbWFpbC5jb20nLFxuICAgICAgICBwYXNzcG9ydE51bWJlcjogJzEyMjMxMTIyMzIxMzIyMTMyMicsXG4gICAgICAgIHBob25lTnVtYmVyOiAnKzg0NjE2MjUyNjE1MjY1JyxcbiAgICAgICAgbmF0aW9uYWxpdHk6ICdWaWV0IE5hbScsXG4gICAgICAgIGZpcnN0QWRkcmVzczogJzUxIEhvYW5nIFZpZXQgUC40JyxcbiAgICAgICAgc2Vjb25kQWRkcmVzczogJ1RhbiBCaW5oLCBIQ01DJyxcbiAgICAgICAgcG9zdGFsQ29kZTogJzEwMDAwJyxcbiAgICAgICAgcmVtYXJrczogJydcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJvb2tpbmdTZXJ2aWNlOiBCb29raW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRWRpdG9yVXBkYXRlKGFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MucHJvcGVydHlOYW1lID09ICdiaXJ0aGRhdGUnKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURhdGVGb3JtYXR0aW5nKGFyZ3MuZWRpdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlRWRpdG9yU3BhY2luZyhlZGl0b3IpIHtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uTW9kdWxlLmlvcykge1xuICAgICAgICAgICAgdmFyIGxhYmVsRGVmID0gZWRpdG9yLmdyaWRMYXlvdXQuZGVmaW5pdGlvbkZvclZpZXcoZWRpdG9yLnZhbHVlTGFiZWwpO1xuICAgICAgICAgICAgbGFiZWxEZWYuY29udGVudE9mZnNldCA9IHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAtMjUsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlZGl0b3IuZ2V0SGVhZGVyVmlldygpLnNldFBhZGRpbmcoMTIsIDEyLCAxMiwgNDgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VEYXRlRm9ybWF0dGluZyhlZGl0b3IpIHtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uTW9kdWxlLmlvcykge1xuICAgICAgICAgICAgdmFyIGRhdGVGb3JtYXR0ZXIgPSBOU0RhdGVGb3JtYXR0ZXIuYWxsb2MoKS5pbml0KCk7XG4gICAgICAgICAgICBkYXRlRm9ybWF0dGVyLmRhdGVGb3JtYXQgPSAneXl5eS1NTS1kZCc7XG4gICAgICAgICAgICBlZGl0b3IuZGF0ZUZvcm1hdHRlciA9IGRhdGVGb3JtYXR0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2ltcGxlRGF0ZUZvcm1hdCA9IG5ldyBqYXZhLnRleHQuU2ltcGxlRGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIGphdmEudXRpbC5Mb2NhbGUuVVMpO1xuICAgICAgICAgICAgZWRpdG9yLnNldERhdGVGb3JtYXQoc2ltcGxlRGF0ZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0NvbmZpcm1EaWFsb2coKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtIGJvb2tpbmcnLFxuICAgICAgICAgICAgbWVzc2FnZTogJyBBcmUgeW91IHN1cmUgd2FudCB0byBwcm9jZXNzIHRoZSBib29raW5nPyBUaG9zZSBzdGVwcyBjYW4gYmUgdW5kb25lIHZpYSBkaXJlY2x5IGNhbGwgdG8gdXMgYXQgKzAxMDk5MTkxOTExOTguJyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ1llcycsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm8nXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uZmlybShvcHRpb25zKS50aGVuKChpc09rKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPaykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZVNlcnZpY2Uuc2VsZWN0ZWRCb29raW5nSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogdGhpcy5mb3JtLFxuICAgICAgICAgICAgICAgICAgICByZW1hcmtzOiB0aGlzLmZvcm0ucmVtYXJrc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGNhbGxUaW1lb3V0ID0gdGhpcy50aW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5wYWdlU2VydmljZS5zZWxlY3RlZEJvb2tpbmdJbmZvO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9va2luZ1NlcnZpY2UuYm9va2luZ1Jlc2VydmUobW9kZWwuaWQsIG1vZGVsKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEaWFsb2dDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdCYWNrIHRvIGhvbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dEaWFsb2dDb21wbGV0ZWQoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdCb29raW5nIHJlcXVlc3Qgc3RhdHVzJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdZb3VyIHJlcXVlc3QgaGFzIGJlZW4gcmVjb3JkZWQuIEVuam95IHlvdXIgdHJpcCA6KScsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdCYWNrIHRvIGhvbWUnXG4gICAgICAgIH07XG4gICAgICAgIGFsZXJ0KG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aW1lb3V0KCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnByb2Nlc3NpbmdCb29raW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRpbWVkT3V0ID0gbnVsbDtcbiAgICAgICAgbGV0IHJ1bkxvb3AgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRpbWVkT3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1ZhbHVlICs9IE1hdGgucmFuZG9tKCkgKiAxMDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1ZhbHVlID4gOTkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gOTk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnVuTG9vcCgpO1xuICAgICAgICAgICAgfSwgTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgICB9O1xuICAgICAgICBydW5Mb29wKCk7XG5cbiAgICAgICAgcmV0dXJuIChjYj8pID0+IHtcbiAgICAgICAgICAgIHRpbWVkT3V0ICYmIGNsZWFyVGltZW91dCh0aW1lZE91dCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAxMDA7XG4gICAgICAgIH1cbiAgICB9XG59Il19