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
