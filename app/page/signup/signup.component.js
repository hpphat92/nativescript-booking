"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.album = {
            bandName: 'Ed Sheeran',
            albumName: 'X',
            year: '2017',
            owned: true,
            myRating: '9.5'
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onButtonTap = function () {
    };
    SignupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'signup',
            moduleId: module.id,
            templateUrl: './signup.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
