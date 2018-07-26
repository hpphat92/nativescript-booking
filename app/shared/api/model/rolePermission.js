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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZVBlcm1pc3Npb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb2xlUGVybWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQXNCQSxJQUFpQixjQUFjLENBYzlCO0FBZEQsV0FBaUIsY0FBYztJQUVkLG1DQUFvQixHQUFHO1FBQ2hDLFFBQVEsRUFBRSxVQUFrQztRQUM1QyxVQUFVLEVBQUUsWUFBb0M7UUFDaEQsVUFBVSxFQUFFLFlBQW9DO1FBQ2hELE9BQU8sRUFBRSxTQUFpQztRQUMxQyxVQUFVLEVBQUUsWUFBb0M7UUFDaEQsT0FBTyxFQUFFLFNBQWlDO1FBQzFDLFNBQVMsRUFBRSxXQUFtQztRQUM5QyxTQUFTLEVBQUUsV0FBbUM7UUFDOUMsTUFBTSxFQUFFLFFBQWdDO1FBQ3hDLFNBQVMsRUFBRSxXQUFtQztLQUNqRCxDQUFBO0FBQ0wsQ0FBQyxFQWRnQixjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQWM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVHJhYmJsZSBCYWNrZW5kIEFQSVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBTd2FnZ2VyIENvZGVnZW4gaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItY29kZWdlbilcbiAqXG4gKiBPcGVuQVBJIHNwZWMgdmVyc2lvbjogdjFcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgdGhlIHN3YWdnZXIgY29kZSBnZW5lcmF0b3IgcHJvZ3JhbS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuL3JvbGUnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb24ge1xuICAgIHJvbGVJZD86IHN0cmluZztcbiAgICBzeXN0ZW1QZXJtaXNzaW9uPzogUm9sZVBlcm1pc3Npb24uU3lzdGVtUGVybWlzc2lvbkVudW07XG4gICAgcm9sZT86IFJvbGU7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgY3JlYXRlZFRpbWU/OiBEYXRlO1xuICAgIHVwZGF0ZWRUaW1lPzogRGF0ZTtcbn1cbmV4cG9ydCBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb24ge1xuICAgIGV4cG9ydCB0eXBlIFN5c3RlbVBlcm1pc3Npb25FbnVtID0gJ0xpc3ROb3RlJyB8ICdDcmVhdGVOb3RlJyB8ICdVcGRhdGVOb3RlJyB8ICdHZXROb3RlJyB8ICdEZWxldGVOb3RlJyB8ICdMaXN0QXBwJyB8ICdDcmVhdGVBcHAnIHwgJ1VwZGF0ZUFwcCcgfCAnR2V0QXBwJyB8ICdEZWxldGVBcHAnO1xuICAgIGV4cG9ydCBjb25zdCBTeXN0ZW1QZXJtaXNzaW9uRW51bSA9IHtcbiAgICAgICAgTGlzdE5vdGU6ICdMaXN0Tm90ZScgYXMgU3lzdGVtUGVybWlzc2lvbkVudW0sXG4gICAgICAgIENyZWF0ZU5vdGU6ICdDcmVhdGVOb3RlJyBhcyBTeXN0ZW1QZXJtaXNzaW9uRW51bSxcbiAgICAgICAgVXBkYXRlTm90ZTogJ1VwZGF0ZU5vdGUnIGFzIFN5c3RlbVBlcm1pc3Npb25FbnVtLFxuICAgICAgICBHZXROb3RlOiAnR2V0Tm90ZScgYXMgU3lzdGVtUGVybWlzc2lvbkVudW0sXG4gICAgICAgIERlbGV0ZU5vdGU6ICdEZWxldGVOb3RlJyBhcyBTeXN0ZW1QZXJtaXNzaW9uRW51bSxcbiAgICAgICAgTGlzdEFwcDogJ0xpc3RBcHAnIGFzIFN5c3RlbVBlcm1pc3Npb25FbnVtLFxuICAgICAgICBDcmVhdGVBcHA6ICdDcmVhdGVBcHAnIGFzIFN5c3RlbVBlcm1pc3Npb25FbnVtLFxuICAgICAgICBVcGRhdGVBcHA6ICdVcGRhdGVBcHAnIGFzIFN5c3RlbVBlcm1pc3Npb25FbnVtLFxuICAgICAgICBHZXRBcHA6ICdHZXRBcHAnIGFzIFN5c3RlbVBlcm1pc3Npb25FbnVtLFxuICAgICAgICBEZWxldGVBcHA6ICdEZWxldGVBcHAnIGFzIFN5c3RlbVBlcm1pc3Npb25FbnVtXG4gICAgfVxufVxuIl19