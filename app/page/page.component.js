"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    PageComponent = __decorate([
        core_1.Component({
            selector: 'page',
            moduleId: module.id,
            templateUrl: './page.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], PageComponent);
    return PageComponent;
}());
exports.PageComponent = PageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFRekM7SUFDSSx1QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQztJQUVNLDRDQUFvQixHQUEzQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sNkNBQXFCLEdBQTVCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFWUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUU4QixlQUFNO09BRHpCLGFBQWEsQ0FXekI7SUFBRCxvQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGFnZScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVUb0ZpcnN0Q2hpbGQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3BhZ2UvZmlyc3QnXSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9TZWNvbmRDaGlsZCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZS9zZWNvbmQnXSk7XG4gICAgfVxufSJdfQ==