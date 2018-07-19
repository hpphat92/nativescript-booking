import { Routes } from '@angular/router';
import { BookingDetailComponent } from '~/page/booking-detail/booking-detail.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

const routers: Routes = [
    {
        path: '',
        component: BookingDetailComponent,
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
        BookingDetailComponent
    ],
    exports: [
    ],
})
export class BookingDetailModule {
}