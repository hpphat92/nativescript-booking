import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NgModule } from '@angular/core';
import { HotelDetailComponent } from '~/page/hotel-detail/hotel-detail.component';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

const routers: Routes = [
    {
        path: '',
        component: HotelDetailComponent,
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
        HotelDetailComponent
    ],
    exports: [
    ],
})
export class HotelDetailModule {
}