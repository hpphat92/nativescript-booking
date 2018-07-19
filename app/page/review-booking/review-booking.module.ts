import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReviewBookingComponent } from '~/page/review-booking/review-booking.component';

const routers: Routes = [
    {
        path: '',
        component: ReviewBookingComponent,
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
        ReviewBookingComponent
    ],
    exports: [
    ],
})
export class ReviewBookingModule {
}