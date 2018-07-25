"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PageComponent = /** @class */ (function () {
    function PageComponent(router) {
        this.router = router;
    }
    PageComponent.prototype.navigateToFirstChild = function () {
        this.router.navigate(['/page/first']);
    };
    PageComponent.prototype.navigateToSecondChild = function () {
        this.router.navigate(['/page/second']);
    };
    PageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'page',
            moduleId: module.id,
            templateUrl: './page.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], PageComponent);
    return PageComponent;
}());
exports.PageComponent = PageComponent;
