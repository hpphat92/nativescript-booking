import { NgModule } from '@angular/core';
import { SignupComponent } from '~/page/signup/signup.component';

@NgModule({
    declarations: [
        SignupComponent,
    ],
    exports: [
        SignupComponent
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class SignupModule { }