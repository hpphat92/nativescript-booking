"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            moduleId: module.id,
            templateUrl: './home.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRDtBQUNyRCwwQ0FBeUM7QUFDekMscUNBQTRDO0FBQzVDLDhEQUE0RTtBQU81RTtJQUNJLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBRU0scUNBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQ0ksTUFBTSxDQUFDLGdCQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLGlDQUFTLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLG9CQUFTLENBQUM7SUFDckIsQ0FBQztJQUNELHNDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRWtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjswREFBQztJQXBCekUsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FFOEIsZUFBTTtPQUR6QixhQUFhLENBcUJ6QjtJQUFELG9CQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnb3RvTG9naW5QYWdlKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BhZ2UnLCAnbG9naW4nXSlcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpc0lPUztcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNBbmRyb2lkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gaXNBbmRyb2lkO1xuICAgIH1cbiAgICBzaG93U2lkZURyYXdlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xufSJdfQ==