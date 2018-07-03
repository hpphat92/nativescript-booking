"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        console.log('Init Login');
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onButtonTap = function () {
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup',
            moduleId: module.id,
            templateUrl: './signup.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBa0Q7QUFPbEQ7SUFTSTtRQVJBLFVBQUssR0FBNEY7WUFDN0YsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLEdBQUc7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQztRQUdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQscUNBQVcsR0FBWDtJQUVBLENBQUM7SUFsQlEsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzs7T0FDVyxlQUFlLENBbUIzQjtJQUFELHNCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lnbnVwJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFsYnVtOiB7IGJhbmROYW1lOiBzdHJpbmcsIGFsYnVtTmFtZTogc3RyaW5nLCB5ZWFyOiBzdHJpbmcsIG93bmVkOiBib29sZWFuLCBteVJhdGluZzogc3RyaW5nIH0gPSB7XG4gICAgICAgIGJhbmROYW1lOiAnRWQgU2hlZXJhbicsXG4gICAgICAgIGFsYnVtTmFtZTogJ1gnLFxuICAgICAgICB5ZWFyOiAnMjAxNycsXG4gICAgICAgIG93bmVkOiB0cnVlLFxuICAgICAgICBteVJhdGluZzogJzkuNSdcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbml0IExvZ2luJyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKSB7XG5cbiAgICB9XG59Il19