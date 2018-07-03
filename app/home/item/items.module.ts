import { NgModule } from '@angular/core';
import { ItemsComponent } from '~/home/item/items.component';
import { ItemDetailComponent } from '~/home/item/item-detail.component';
import { ItemService } from '~/home/item/item.service';

@NgModule({
    imports: [
    ],
    declarations: [
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [
        ItemService
    ],
    exports: [
        ItemsComponent,
        ItemDetailComponent,
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class ItemsModule {
}