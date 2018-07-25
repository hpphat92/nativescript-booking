"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var PageService = /** @class */ (function () {
    function PageService() {
        this._selectedBookingInfo = null;
    }
    Object.defineProperty(PageService.prototype, "selectedBookingInfo", {
        get: function () {
            return this._selectedBookingInfo || {};
        },
        set: function (val) {
            this._selectedBookingInfo = tslib_1.__assign({}, this._selectedBookingInfo, val);
        },
        enumerable: true,
        configurable: true
    });
    PageService = tslib_1.__decorate([
        core_1.Injectable()
    ], PageService);
    return PageService;
}());
exports.default = PageService;
