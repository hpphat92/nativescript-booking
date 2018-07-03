import { NgModule } from '@angular/core';
import { PageComponent } from '~/page/page.component';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { SearchMainComponent } from '~/page/search-main/search-main.component';

const routers: Routes = [
    {
        path: '',
        component: SearchMainComponent,
    }
];

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUIDataFormModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routers)
    ],
    declarations: [
        PageComponent,
        SearchMainComponent
    ],
    exports: [
        PageComponent,
    ]
})
export class PageModule {
}