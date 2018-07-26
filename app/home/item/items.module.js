"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
    ItemsModule = tslib_1.__decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUN6QywrREFBNkQ7QUFDN0QsMkVBQXdFO0FBQ3hFLHlEQUF1RDtBQW9CdkQ7SUFIQTs7TUFFRTtJQUNGO0lBQ0EsQ0FBQztJQURZLFdBQVc7UUFsQnZCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxFQUNSO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLDJDQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVzthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGdDQUFjO2dCQUNkLDJDQUFtQjthQUN0QjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFdBQVcsQ0FDdkI7SUFBRCxrQkFBQztDQUFBLEFBREQsSUFDQztBQURZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnfi9ob21lL2l0ZW0vaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tICd+L2hvbWUvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tICd+L2hvbWUvaXRlbS9pdGVtLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEl0ZW1TZXJ2aWNlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBJdGVtc01vZHVsZSB7XG59Il19