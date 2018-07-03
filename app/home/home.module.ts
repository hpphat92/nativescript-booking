import { NgModule } from '@angular/core';
import { HomeComponent } from '~/home/home.component';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';

const routers: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptRouterModule.forChild(routers)
    ],
    declarations: [
        HomeComponent
    ],
    exports: []
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class HomeModule {
}