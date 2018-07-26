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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUczQztJQURBO1FBRVcseUJBQW9CLEdBQUcsSUFBSSxDQUFDO0lBVXZDLENBQUM7SUFSRyxzQkFBVyw0Q0FBbUI7YUFBOUI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLEVBQUUsQ0FBQztRQUMzQyxDQUFDO2FBRUQsVUFBK0IsR0FBRztZQUM5QixJQUFJLENBQUMsb0JBQW9CLHdCQUFRLElBQUksQ0FBQyxvQkFBb0IsRUFBSyxHQUFHLENBQUUsQ0FBQztRQUN6RSxDQUFDOzs7T0FKQTtJQUxnQixXQUFXO1FBRC9CLGlCQUFVLEVBQUU7T0FDUSxXQUFXLENBVy9CO0lBQUQsa0JBQUM7Q0FBQSxBQVhELElBV0M7a0JBWG9CLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgX3NlbGVjdGVkQm9va2luZ0luZm8gPSBudWxsO1xuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEJvb2tpbmdJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRCb29raW5nSW5mbyB8fCB7fTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkQm9va2luZ0luZm8odmFsKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQm9va2luZ0luZm8gPSB7IC4uLnRoaXMuX3NlbGVjdGVkQm9va2luZ0luZm8sIC4uLnZhbCB9O1xuICAgIH1cblxufSJdfQ==