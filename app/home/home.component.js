"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_1 = require("platform");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.gotoLoginPage = function () {
        this.router.navigate(['page', 'login']);
    };
    HomeComponent.prototype.isIOS = function () {
        return platform_1.isIOS;
    };
    HomeComponent.prototype.isAndroid = function () {
        return platform_1.isAndroid;
    };
    HomeComponent.prototype.showSideDrawer = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    tslib_1.__decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        tslib_1.__metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'home',
            moduleId: module.id,
            templateUrl: './home.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBcUQ7QUFDckQsMENBQXlDO0FBQ3pDLHFDQUE0QztBQUM1Qyw4REFBNEU7QUFPNUU7SUFDSSx1QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFbEMsQ0FBQztJQUVNLHFDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNJLE1BQU0sQ0FBQyxnQkFBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxpQ0FBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxvQkFBUyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxzQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzBDQUF5QixnQ0FBc0I7MERBQUM7SUFwQnpFLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7aURBRThCLGVBQU07T0FEekIsYUFBYSxDQXFCekI7SUFBRCxvQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ290b0xvZ2luUGFnZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYWdlJywgJ2xvZ2luJ10pXG4gICAgfVxuXG4gICAgcHVibGljIGlzSU9TKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gaXNJT1M7XG4gICAgfVxuXG4gICAgcHVibGljIGlzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlzQW5kcm9pZDtcbiAgICB9XG4gICAgc2hvd1NpZGVEcmF3ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbn0iXX0=