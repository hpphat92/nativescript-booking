"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card;
(function (Card) {
    Card.TypeEnum = {
        Default: 'Default',
        Carousel: 'Carousel'
    };
    Card.SpecialTypeEnum = {
        None: 'None',
        Root: 'Root',
        MainMenu: 'MainMenu'
    };
})(Card = exports.Card || (exports.Card = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUEwQ0EsSUFBaUIsSUFBSSxDQVlwQjtBQVpELFdBQWlCLElBQUk7SUFFSixhQUFRLEdBQUc7UUFDcEIsT0FBTyxFQUFFLFNBQXFCO1FBQzlCLFFBQVEsRUFBRSxVQUFzQjtLQUNuQyxDQUFBO0lBRVksb0JBQWUsR0FBRztRQUMzQixJQUFJLEVBQUUsTUFBeUI7UUFDL0IsSUFBSSxFQUFFLE1BQXlCO1FBQy9CLFFBQVEsRUFBRSxVQUE2QjtLQUMxQyxDQUFBO0FBQ0wsQ0FBQyxFQVpnQixJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFZcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVHJhYmJsZSBCYWNrZW5kIEFQSVxyXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IFN3YWdnZXIgQ29kZWdlbiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuKVxyXG4gKlxyXG4gKiBPcGVuQVBJIHNwZWMgdmVyc2lvbjogdjFcclxuICogXHJcbiAqXHJcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgdGhlIHN3YWdnZXIgY29kZSBnZW5lcmF0b3IgcHJvZ3JhbS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItY29kZWdlbi5naXRcclxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxyXG4gKi9cclxuaW1wb3J0IHsgQXNzb2NpYXRlZFF1ZXN0aW9uIH0gZnJvbSAnLi9hc3NvY2lhdGVkUXVlc3Rpb24nO1xyXG5pbXBvcnQgeyBDYXJkQWN0aW9uIH0gZnJvbSAnLi9jYXJkQWN0aW9uJztcclxuaW1wb3J0IHsgQ2FyZENvbGxlY3Rpb25UZW1wbGF0ZSB9IGZyb20gJy4vY2FyZENvbGxlY3Rpb25UZW1wbGF0ZSc7XHJcbmltcG9ydCB7IENhcmRHcm91cCB9IGZyb20gJy4vY2FyZEdyb3VwJztcclxuaW1wb3J0IHsgUGFydG5lciB9IGZyb20gJy4vcGFydG5lcic7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJkIHtcclxuICAgIGJsb2NrVGl0bGU/OiBzdHJpbmc7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICBpbWFnZVVybD86IHN0cmluZztcclxuICAgIHN1YnRpdGxlPzogc3RyaW5nO1xyXG4gICAgaXNSb290PzogYm9vbGVhbjtcclxuICAgIHR5cGU/OiBDYXJkLlR5cGVFbnVtO1xyXG4gICAgc3BlY2lhbFR5cGU/OiBDYXJkLlNwZWNpYWxUeXBlRW51bTtcclxuICAgIGlzQmxvY2s/OiBib29sZWFuO1xyXG4gICAgaXNNYW5kYXRvcnk/OiBib29sZWFuO1xyXG4gICAgcGFydG5lcklkPzogc3RyaW5nO1xyXG4gICAgcGFydG5lcj86IFBhcnRuZXI7XHJcbiAgICB0ZW1wbGF0ZUlkPzogc3RyaW5nO1xyXG4gICAgdGVtcGxhdGU/OiBDYXJkQ29sbGVjdGlvblRlbXBsYXRlO1xyXG4gICAgcGFyZW50Q2FyZEFjdGlvbnM/OiBBcnJheTxDYXJkQWN0aW9uPjtcclxuICAgIGNoaWxkQ2FyZEFjdGlvbnM/OiBBcnJheTxDYXJkQWN0aW9uPjtcclxuICAgIGFzc29jaWF0ZWRRdWVzdGlvbnM/OiBBcnJheTxBc3NvY2lhdGVkUXVlc3Rpb24+O1xyXG4gICAgY2FyZEdyb3VwSWQ/OiBzdHJpbmc7XHJcbiAgICBjYXJkR3JvdXA/OiBDYXJkR3JvdXA7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGNyZWF0ZWRUaW1lPzogRGF0ZTtcclxuICAgIHVwZGF0ZWRUaW1lPzogRGF0ZTtcclxufVxyXG5leHBvcnQgbmFtZXNwYWNlIENhcmQge1xyXG4gICAgZXhwb3J0IHR5cGUgVHlwZUVudW0gPSAnRGVmYXVsdCcgfCAnQ2Fyb3VzZWwnO1xyXG4gICAgZXhwb3J0IGNvbnN0IFR5cGVFbnVtID0ge1xyXG4gICAgICAgIERlZmF1bHQ6ICdEZWZhdWx0JyBhcyBUeXBlRW51bSxcclxuICAgICAgICBDYXJvdXNlbDogJ0Nhcm91c2VsJyBhcyBUeXBlRW51bVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IHR5cGUgU3BlY2lhbFR5cGVFbnVtID0gJ05vbmUnIHwgJ1Jvb3QnIHwgJ01haW5NZW51JztcclxuICAgIGV4cG9ydCBjb25zdCBTcGVjaWFsVHlwZUVudW0gPSB7XHJcbiAgICAgICAgTm9uZTogJ05vbmUnIGFzIFNwZWNpYWxUeXBlRW51bSxcclxuICAgICAgICBSb290OiAnUm9vdCcgYXMgU3BlY2lhbFR5cGVFbnVtLFxyXG4gICAgICAgIE1haW5NZW51OiAnTWFpbk1lbnUnIGFzIFNwZWNpYWxUeXBlRW51bVxyXG4gICAgfVxyXG59XHJcbiJdfQ==