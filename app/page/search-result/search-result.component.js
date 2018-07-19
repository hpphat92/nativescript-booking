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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0Y7QUFDcEYsMENBQXlEO0FBQ3pELDZEQUF5RTtBQUN6RSwrQkFBaUM7QUFDakMsK0NBQXlDO0FBQ3pDLGlDQUErQjtBQUMvQixvQ0FBOEM7QUFDOUMsb0RBQThDO0FBQzlDLHNDQUFlLENBQUMsZUFBZSxFQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQU8zRjtJQWdCSSwrQkFBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLGdCQUFrQztRQUp0RCxpQkFTQztRQVRtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFsQi9DLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBTSxHQUFHO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFDSyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZUFBVSxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLENBQUM7U0FDbEIsQ0FBQztRQU9FLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsY0FB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QUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNsRCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixRQUFRLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUMzQyxDQUFDLEVBQUU7WUFDQyxRQUFRLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqR1EscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7aURBaUI2Qix1QkFBYztZQUNiLGVBQU07WUFDRSxvQkFBYztZQUNqQixzQkFBVztZQUNOLHVDQUFnQjtPQXBCN0MscUJBQXFCLENBa0dqQztJQUFELDRCQUFDO0NBQUEsQUFsR0QsSUFrR0M7QUFsR1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEFwcENvbnN0YW50IGZyb20gJ34vYXBwLmNvbnN0YW50JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IEJvb2tpbmdTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvYXBpJztcbmltcG9ydCBQYWdlU2VydmljZSBmcm9tICd+L3BhZ2UvcGFnZS5zZXJ2aWNlJztcbnJlZ2lzdGVyRWxlbWVudChcIlB1bGxUb1JlZnJlc2hcIiwoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLXJlc3VsdC1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbjtcbiAgICBwdWJsaWMgYnVzeSA9IGZhbHNlO1xuICAgIHB1YmxpYyBzZWFyY2hDcml0ZXJpYSA9IHt9O1xuICAgIHB1YmxpYyB0b3RhbCA9IDA7XG4gICAgcHVibGljIHBhZ2luZyA9IHtcbiAgICAgICAgcGFnZUluZGV4OiAwLFxuICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgfTtcbiAgICBwdWJsaWMgbGlzdERhdGEgPSBbXTtcbiAgICBwdWJsaWMgc2VhcmNoSW5mbyA9IHtcbiAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgICAgdGltZUVsYXBzZWQ6ICcnLFxuICAgICAgICBzdGFydFRpbWVSZXE6IDBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJvb2tpbmdTZXJ2aWNlOiBCb29raW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYSA9IGUgfHwge307XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWFyY2godGhpcy5zZWFyY2hDcml0ZXJpYSkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gcmVzcDtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VhcmNoKG1vZGVsLCBub1JlbG9hZD8pIHtcbiAgICAgICAgaWYoIW5vUmVsb2FkKXtcbiAgICAgICAgICAgIHRoaXMuYnVzeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hJbmZvLnN0YXJ0VGltZVJlcSA9ICsobmV3IERhdGUoKSk7XG4gICAgICAgIGxldCBhcnJpdmFsRGF0ZSA9ICttb21lbnQoK21vZGVsLmFycml2YWxEYXRlKSB8fCArbW9tZW50KG1vZGVsLmFycml2YWxEYXRlKTtcbiAgICAgICAgbGV0IGRlcGFydHVyZURhdGUgPSArbW9tZW50KCttb2RlbC5kZXBhcnR1cmVEYXRlKSB8fCArbW9tZW50KG1vZGVsLmRlcGFydHVyZURhdGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5ib29raW5nU2VydmljZS5ib29raW5nU2VhcmNoUHJvcGVydGllcyhcbiAgICAgICAgICAgIG1vbWVudChhcnJpdmFsRGF0ZSkuZm9ybWF0KEFwcENvbnN0YW50LnR5cGVGb3JtYXQuZGF0ZSksXG4gICAgICAgICAgICBtb21lbnQoZGVwYXJ0dXJlRGF0ZSkuZm9ybWF0KEFwcENvbnN0YW50LnR5cGVGb3JtYXQuZGF0ZSksXG4gICAgICAgICAgICBtb2RlbC5udW1iZXJPZlBBWCxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJzAnLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHRoaXMucGFnaW5nLnBhZ2VJbmRleCArIDEsXG4gICAgICAgICAgICB0aGlzLnBhZ2luZy5wYWdlU2l6ZVxuICAgICAgICApXG4gICAgICAgICAgICAubWFwKChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZighbm9SZWxvYWQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJbmZvLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5mby50aW1lRWxhcHNlZCA9ICgoKCtuZXcgRGF0ZSgpKSAtIHRoaXMuc2VhcmNoSW5mby5zdGFydFRpbWVSZXEpIC8gMTAwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEluZm8uc3RhcnRUaW1lUmVxID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzcC5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSBbLi4ucmVzcC5kYXRhLmVudGl0aWVzLCAuLi5yZXNwLmRhdGEuZW50aXRpZXMsIC4uLnJlc3AuZGF0YS5lbnRpdGllcywgLi4ucmVzcC5kYXRhLmVudGl0aWVzLCAuLi5yZXNwLmRhdGEuZW50aXRpZXMsIC4uLnJlc3AuZGF0YS5lbnRpdGllcywgLi4ucmVzcC5kYXRhLmVudGl0aWVzLCAuLi5yZXNwLmRhdGEuZW50aXRpZXMsIC4uLnJlc3AuZGF0YS5lbnRpdGllcywgLi4ucmVzcC5kYXRhLmVudGl0aWVzLCAuLi5yZXNwLmRhdGEuZW50aXRpZXNdO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmRhdGEuZW50aXRpZXM7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJbmZvLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5mby50aW1lRWxhcHNlZCA9ICgoKCtuZXcgRGF0ZSgpKSAtIHRoaXMuc2VhcmNoSW5mby5zdGFydFRpbWVSZXEpIC8gMTAwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEluZm8uc3RhcnRUaW1lUmVxID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5saXN0RGF0YVthcmdzLmluZGV4XTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob3RlbC1kZXRhaWwnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNlYXJjaENyaXRlcmlhLFxuICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZEl0ZW0uaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gJiYgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgaWYgKGdsb2JhbC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAoZ2xvYmFsIGFzIGFueSkuZ2MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoYXJncykge1xuICAgICAgICBjb25zdCBsaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLnNlYXJjaCh0aGlzLnNlYXJjaENyaXRlcmlhLCB0cnVlKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSByZXNwO1xuICAgICAgICAgICAgbGlzdFZpZXcubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19