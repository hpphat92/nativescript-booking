"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var moment = require("moment");
var app_constant_1 = require("~/app.constant");
require("rxjs/add/operator/map");
var api_1 = require("~/shared/api");
var page_service_1 = require("~/page/page.service");
nativescript_angular_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(route, router, bookingService, pageService, routerExtensions) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.bookingService = bookingService;
        this.pageService = pageService;
        this.routerExtensions = routerExtensions;
        this.busy = false;
        this.searchCriteria = {};
        this.total = 0;
        this.paging = {
            pageIndex: 0,
            pageSize: 10,
        };
        this.listData = [];
        this.searchInfo = {
            searching: false,
            timeElapsed: '',
            startTimeReq: 0
        };
        this.subscription = this.route.queryParams.subscribe(function (e) {
            _this.searchCriteria = e || {};
        });
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search(this.searchCriteria).subscribe(function (resp) {
            _this.listData = resp;
        }, function () {
        });
    };
    SearchResultComponent.prototype.search = function (model, noReload) {
        var _this = this;
        if (!noReload) {
            this.busy = true;
        }
        this.searchInfo.startTimeReq = +(new Date());
        var arrivalDate = +moment(+model.arrivalDate) || +moment(model.arrivalDate);
        var departureDate = +moment(+model.departureDate) || +moment(model.departureDate);
        return this.bookingService.bookingSearchProperties(moment(arrivalDate).format(app_constant_1.default.typeFormat.date), moment(departureDate).format(app_constant_1.default.typeFormat.date), model.numberOfPAX, '', '0', true, this.paging.pageIndex + 1, this.paging.pageSize)
            .map(function (resp) {
            if (!noReload) {
                _this.busy = false;
            }
            _this.searchInfo.searching = false;
            _this.searchInfo.timeElapsed = (((+new Date()) - _this.searchInfo.startTimeReq) / 1000).toFixed(2);
            _this.searchInfo.startTimeReq = 0;
            _this.total = resp.data.total;
            _this.listData = resp.data.entities.concat(resp.data.entities, resp.data.entities, resp.data.entities, resp.data.entities, resp.data.entities, resp.data.entities, resp.data.entities, resp.data.entities, resp.data.entities, resp.data.entities);
            return resp.data.entities;
        }, function () {
            _this.searchInfo.searching = false;
            _this.searchInfo.timeElapsed = (((+new Date()) - _this.searchInfo.startTimeReq) / 1000).toFixed(2);
            _this.searchInfo.startTimeReq = 0;
        });
    };
    SearchResultComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    SearchResultComponent.prototype.onItemTap = function (args) {
        var selectedItem = this.listData[args.index];
        this.router.navigate(['hotel-detail'], {
            queryParams: tslib_1.__assign({}, this.searchCriteria, { id: selectedItem.id })
        });
    };
    SearchResultComponent.prototype.ngOnDestroy = function () {
        this.subscription && this.subscription.unsubscribe();
        if (global.android) {
            global.gc();
        }
    };
    SearchResultComponent.prototype.onPullToRefreshInitiated = function (args) {
        var _this = this;
        var listView = args.object;
        this.search(this.searchCriteria, true).subscribe(function (resp) {
            _this.listData = resp;
            listView.notifyPullToRefreshFinished();
        }, function () {
            listView.notifyPullToRefreshFinished();
        });
    };
    SearchResultComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'search-result-component',
            moduleId: module.id,
            templateUrl: './search-result.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            api_1.BookingService,
            page_service_1.default,
            nativescript_angular_1.RouterExtensions])
    ], SearchResultComponent);
    return SearchResultComponent;
}());
exports.SearchResultComponent = SearchResultComponent;
