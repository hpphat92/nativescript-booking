import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import AppConstant from '~/app.constant';
import { ApiModule, Configuration, BASE_PATH } from '~/shared/api';

let domain = {
    toString: () => AppConstant.domain,
    valueof: () => AppConstant.domain,
};

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpModule,
        AppRoutingModule,
        ApiModule.forRoot((): Configuration => {
            return new Configuration({
                apiKeys: {},
            });
        }),
        // PageModule,
        // HomeModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        { provide: BASE_PATH, useValue: domain },
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
}
