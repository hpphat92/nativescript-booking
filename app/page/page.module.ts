import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { PageComponent } from '~/page/page.component';
import { NativeScriptRouterModule, NSModuleFactoryLoader } from 'nativescript-angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import PageService from '~/page/page.service';
import { Routes } from '@angular/router';
import { ReviewBookingModule } from '~/page/review-booking/review-booking.module';

const routers: Routes = [
    {
        path: '',
        loadChildren: './page/search-main/search-main.module#SearchMainModule'
    },
    {
        path: 'search-result',
        loadChildren: './page/search-result/search-result.module#SearchResultModule'
    },
    {
        path: 'hotel-detail',
        loadChildren: './page/hotel-detail/hotel-detail.module#HotelDetailModule'

    },
    {
        path: 'confirm-booking',
        loadChildren: './page/confirm-booking/confirm-booking.module#ConfirmBookingModule'
    },
    {
        path: 'booking-detail/:id',
        loadChildren: './page/booking-detail/booking-detail.module#BookingDetailModule'
    },
    {
        path: 'review-booking',
        loadChildren: './page/review-booking/review-booking.module#ReviewBookingModule'
    },
];

@NgModule({
    imports: [
        NativeScriptUIListViewModule,
        NativeScriptModule,
        NativeScriptUIDataFormModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routers),
    ],
    declarations: [
        PageComponent,
    ],
    exports: [
        PageComponent,
    ],
    providers: [
        PageService,
    ]
})
export class PageModule {
}