import { NgModule } from '@angular/core';
import { SearchMainComponent } from '~/page/search-main/search-main.component';

@NgModule({
    declarations: [
        SearchMainComponent,
    ],
    exports: [
        SearchMainComponent
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class SearchMainModule { }