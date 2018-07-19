import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NgModule } from '@angular/core';
import { SearchMainComponent } from '~/page/search-main/search-main.component';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

const routers: Routes = [
    {
        path: '',
        component: SearchMainComponent,
    },
];

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUIListViewModule,
        NativeScriptUIDataFormModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routers)
    ],
    declarations: [
        SearchMainComponent
    ],
    exports: [
    ],
})
export class SearchMainModule {
}