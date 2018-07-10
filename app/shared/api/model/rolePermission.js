"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RolePermission;
(function (RolePermission) {
    RolePermission.SystemPermissionEnum = {
        ListNote: 'ListNote',
        CreateNote: 'CreateNote',
        UpdateNote: 'UpdateNote',
        GetNote: 'GetNote',
        DeleteNote: 'DeleteNote',
        ListApp: 'ListApp',
        CreateApp: 'CreateApp',
        UpdateApp: 'UpdateApp',
        GetApp: 'GetApp',
        DeleteApp: 'DeleteApp'
    };
})(RolePermission = exports.RolePermission || (exports.RolePermission = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZVBlcm1pc3Npb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb2xlUGVybWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQXNCQSxJQUFpQixjQUFjLENBYzlCO0FBZEQsV0FBaUIsY0FBYztJQUVkLG1DQUFvQixHQUFHO1FBQ2hDLFFBQVEsRUFBRSxVQUFrQztRQUM1QyxVQUFVLEVBQUUsWUFBb0M7UUFDaEQsVUFBVSxFQUFFLFlBQW9DO1FBQ2hELE9BQU8sRUFBRSxTQUFpQztRQUMxQyxVQUFVLEVBQUUsWUFBb0M7UUFDaEQsT0FBTyxFQUFFLFNBQWlDO1FBQzFDLFNBQVMsRUFBRSxXQUFtQztRQUM5QyxTQUFTLEVBQUUsV0FBbUM7UUFDOUMsTUFBTSxFQUFFLFFBQWdDO1FBQ3hDLFNBQVMsRUFBRSxXQUFtQztLQUNqRCxDQUFBO0FBQ0wsQ0FBQyxFQWRnQixjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQWM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUcmFiYmxlIEJhY2tlbmQgQVBJXHJcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgU3dhZ2dlciBDb2RlZ2VuIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4pXHJcbiAqXHJcbiAqIE9wZW5BUEkgc3BlYyB2ZXJzaW9uOiB2MVxyXG4gKiBcclxuICpcclxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSB0aGUgc3dhZ2dlciBjb2RlIGdlbmVyYXRvciBwcm9ncmFtLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuLmdpdFxyXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXHJcbiAqL1xyXG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi9yb2xlJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uIHtcclxuICAgIHJvbGVJZD86IHN0cmluZztcclxuICAgIHN5c3RlbVBlcm1pc3Npb24/OiBSb2xlUGVybWlzc2lvbi5TeXN0ZW1QZXJtaXNzaW9uRW51bTtcclxuICAgIHJvbGU/OiBSb2xlO1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBjcmVhdGVkVGltZT86IERhdGU7XHJcbiAgICB1cGRhdGVkVGltZT86IERhdGU7XHJcbn1cclxuZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbiB7XHJcbiAgICBleHBvcnQgdHlwZSBTeXN0ZW1QZXJtaXNzaW9uRW51bSA9ICdMaXN0Tm90ZScgfCAnQ3JlYXRlTm90ZScgfCAnVXBkYXRlTm90ZScgfCAnR2V0Tm90ZScgfCAnRGVsZXRlTm90ZScgfCAnTGlzdEFwcCcgfCAnQ3JlYXRlQXBwJyB8ICdVcGRhdGVBcHAnIHwgJ0dldEFwcCcgfCAnRGVsZXRlQXBwJztcclxuICAgIGV4cG9ydCBjb25zdCBTeXN0ZW1QZXJtaXNzaW9uRW51bSA9IHtcclxuICAgICAgICBMaXN0Tm90ZTogJ0xpc3ROb3RlJyBhcyBTeXN0ZW1QZXJtaXNzaW9uRW51bSxcclxuICAgICAgICBDcmVhdGVOb3RlOiAnQ3JlYXRlTm90ZScgYXMgU3lzdGVtUGVybWlzc2lvbkVudW0sXHJcbiAgICAgICAgVXBkYXRlTm90ZTogJ1VwZGF0ZU5vdGUnIGFzIFN5c3RlbVBlcm1pc3Npb25FbnVtLFxyXG4gICAgICAgIEdldE5vdGU6ICdHZXROb3RlJyBhcyBTeXN0ZW1QZXJtaXNzaW9uRW51bSxcclxuICAgICAgICBEZWxldGVOb3RlOiAnRGVsZXRlTm90ZScgYXMgU3lzdGVtUGVybWlzc2lvbkVudW0sXHJcbiAgICAgICAgTGlzdEFwcDogJ0xpc3RBcHAnIGFzIFN5c3RlbVBlcm1pc3Npb25FbnVtLFxyXG4gICAgICAgIENyZWF0ZUFwcDogJ0NyZWF0ZUFwcCcgYXMgU3lzdGVtUGVybWlzc2lvbkVudW0sXHJcbiAgICAgICAgVXBkYXRlQXBwOiAnVXBkYXRlQXBwJyBhcyBTeXN0ZW1QZXJtaXNzaW9uRW51bSxcclxuICAgICAgICBHZXRBcHA6ICdHZXRBcHAnIGFzIFN5c3RlbVBlcm1pc3Npb25FbnVtLFxyXG4gICAgICAgIERlbGV0ZUFwcDogJ0RlbGV0ZUFwcCcgYXMgU3lzdGVtUGVybWlzc2lvbkVudW1cclxuICAgIH1cclxufVxyXG4iXX0=