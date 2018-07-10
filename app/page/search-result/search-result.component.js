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
var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(route, router, bookingService, routerExtensions) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.bookingService = bookingService;
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
    SearchResultComponent.prototype.search = function (model) {
        var _this = this;
        this.busy = true;
        this.searchInfo.startTimeReq = +(new Date());
        var arrivalDate = +moment(+model.arrivalDate) || +moment(model.arrivalDate);
        var departureDate = +moment(+model.departureDate) || +moment(model.departureDate);
        return this.bookingService.bookingSearchProperties(moment(arrivalDate).format(app_constant_1.default.typeFormat.date), moment(departureDate).format(app_constant_1.default.typeFormat.date), model.numberOfPAX, '', '0', true, this.paging.pageIndex + 1, this.paging.pageSize)
            .map(function (resp) {
            _this.busy = false;
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
            nativescript_angular_1.RouterExtensions])
    ], SearchResultComponent);
    return SearchResultComponent;
}());
exports.SearchResultComponent = SearchResultComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0Y7QUFDcEYsMENBQXlEO0FBQ3pELDZEQUF3RDtBQUN4RCwrQkFBaUM7QUFDakMsK0NBQXlDO0FBQ3pDLGlDQUErQjtBQUMvQixvQ0FBOEM7QUFPOUM7SUFnQkksK0JBQW9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxjQUE4QixFQUM5QixnQkFBa0M7UUFIdEQsaUJBUUM7UUFSbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBakIvQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFdBQU0sR0FBRztZQUNaLFNBQVMsRUFBRSxDQUFDO1lBQ1osUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO1FBQ0ssYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxDQUFDO1NBQ2xCLENBQUM7UUFNRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWxDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDNUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUFFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sc0NBQU0sR0FBYixVQUFjLEtBQUs7UUFBbkIsaUJBNEJDO1FBM0JHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0MsSUFBSSxXQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVFLElBQUksYUFBYSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDdkQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDekQsS0FBSyxDQUFDLFdBQVcsRUFDakIsRUFBRSxFQUNGLEdBQUcsRUFDSCxJQUFJLEVBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDdkI7YUFDSSxHQUFHLENBQUMsVUFBQyxJQUFTO1lBQ1gsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLFFBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5USxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsQ0FBQyxFQUFFO1lBQ0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLHlDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNuQyxXQUFXLHVCQUNKLElBQUksQ0FBQyxjQUFjLElBQ3RCLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRSxHQUN0QjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pELENBQUM7SUEvRVEscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7aURBaUI2Qix1QkFBYztZQUNiLGVBQU07WUFDRSxvQkFBYztZQUNaLHVDQUFnQjtPQW5CN0MscUJBQXFCLENBZ0ZqQztJQUFELDRCQUFDO0NBQUEsQUFoRkQsSUFnRkM7QUFoRlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBBcHBDb25zdGFudCBmcm9tICd+L2FwcC5jb25zdGFudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBCb29raW5nU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL2FwaSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLXJlc3VsdC1jb21wb25lbnQnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbjtcbiAgICBwdWJsaWMgYnVzeSA9IGZhbHNlO1xuICAgIHB1YmxpYyBzZWFyY2hDcml0ZXJpYSA9IHt9O1xuICAgIHB1YmxpYyB0b3RhbCA9IDA7XG4gICAgcHVibGljIHBhZ2luZyA9IHtcbiAgICAgICAgcGFnZUluZGV4OiAwLFxuICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgfTtcbiAgICBwdWJsaWMgbGlzdERhdGEgPSBbXTtcbiAgICBwdWJsaWMgc2VhcmNoSW5mbyA9IHtcbiAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgICAgdGltZUVsYXBzZWQ6ICcnLFxuICAgICAgICBzdGFydFRpbWVSZXE6IDBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJvb2tpbmdTZXJ2aWNlOiBCb29raW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hDcml0ZXJpYSA9IGUgfHwge307XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWFyY2godGhpcy5zZWFyY2hDcml0ZXJpYSkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gcmVzcDtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VhcmNoKG1vZGVsKSB7XG4gICAgICAgIHRoaXMuYnVzeSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VhcmNoSW5mby5zdGFydFRpbWVSZXEgPSArKG5ldyBEYXRlKCkpO1xuICAgICAgICBsZXQgYXJyaXZhbERhdGUgPSArbW9tZW50KCttb2RlbC5hcnJpdmFsRGF0ZSkgfHwgK21vbWVudChtb2RlbC5hcnJpdmFsRGF0ZSk7XG4gICAgICAgIGxldCBkZXBhcnR1cmVEYXRlID0gK21vbWVudCgrbW9kZWwuZGVwYXJ0dXJlRGF0ZSkgfHwgK21vbWVudChtb2RlbC5kZXBhcnR1cmVEYXRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9va2luZ1NlcnZpY2UuYm9va2luZ1NlYXJjaFByb3BlcnRpZXMoXG4gICAgICAgICAgICBtb21lbnQoYXJyaXZhbERhdGUpLmZvcm1hdChBcHBDb25zdGFudC50eXBlRm9ybWF0LmRhdGUpLFxuICAgICAgICAgICAgbW9tZW50KGRlcGFydHVyZURhdGUpLmZvcm1hdChBcHBDb25zdGFudC50eXBlRm9ybWF0LmRhdGUpLFxuICAgICAgICAgICAgbW9kZWwubnVtYmVyT2ZQQVgsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICcwJyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0aGlzLnBhZ2luZy5wYWdlSW5kZXggKyAxLFxuICAgICAgICAgICAgdGhpcy5wYWdpbmcucGFnZVNpemVcbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXN5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJbmZvLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5mby50aW1lRWxhcHNlZCA9ICgoKCtuZXcgRGF0ZSgpKSAtIHRoaXMuc2VhcmNoSW5mby5zdGFydFRpbWVSZXEpIC8gMTAwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEluZm8uc3RhcnRUaW1lUmVxID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzcC5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSBbLi4ucmVzcC5kYXRhLmVudGl0aWVzLCAuLi5yZXNwLmRhdGEuZW50aXRpZXMsIC4uLnJlc3AuZGF0YS5lbnRpdGllcywgLi4ucmVzcC5kYXRhLmVudGl0aWVzLCAuLi5yZXNwLmRhdGEuZW50aXRpZXMsIC4uLnJlc3AuZGF0YS5lbnRpdGllcywgLi4ucmVzcC5kYXRhLmVudGl0aWVzLCAuLi5yZXNwLmRhdGEuZW50aXRpZXMsIC4uLnJlc3AuZGF0YS5lbnRpdGllcywgLi4ucmVzcC5kYXRhLmVudGl0aWVzLCAuLi5yZXNwLmRhdGEuZW50aXRpZXNdO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmRhdGEuZW50aXRpZXM7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJbmZvLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5mby50aW1lRWxhcHNlZCA9ICgoKCtuZXcgRGF0ZSgpKSAtIHRoaXMuc2VhcmNoSW5mby5zdGFydFRpbWVSZXEpIC8gMTAwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEluZm8uc3RhcnRUaW1lUmVxID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5saXN0RGF0YVthcmdzLmluZGV4XTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob3RlbC1kZXRhaWwnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnNlYXJjaENyaXRlcmlhLFxuICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZEl0ZW0uaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gJiYgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG59Il19