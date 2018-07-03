"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var items_component_1 = require("~/home/item/items.component");
var item_detail_component_1 = require("~/home/item/item-detail.component");
var item_service_1 = require("~/home/item/item.service");
var ItemsModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function ItemsModule() {
    }
    ItemsModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent
            ],
            providers: [
                item_service_1.ItemService
            ],
            exports: [
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], ItemsModule);
    return ItemsModule;
}());
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLCtEQUE2RDtBQUM3RCwyRUFBd0U7QUFDeEUseURBQXVEO0FBb0J2RDtJQUhBOztNQUVFO0lBQ0Y7SUFDQSxDQUFDO0lBRFksV0FBVztRQWxCdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLEVBQ1I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7Z0JBQ2QsMkNBQW1CO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWM7Z0JBQ2QsMkNBQW1CO2FBQ3RCO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csV0FBVyxDQUN2QjtJQUFELGtCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tICd+L2hvbWUvaXRlbS9pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gJ34vaG9tZS9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gJ34vaG9tZS9pdGVtL2l0ZW0uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEl0ZW1zTW9kdWxlIHtcbn0iXX0=