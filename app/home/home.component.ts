import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { isAndroid, isIOS } from 'platform';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(private router: Router) {

    }

    public gotoLoginPage() {
        this.router.navigate(['page', 'login'])
    }

    public isIOS(): boolean {
        return isIOS;
    }

    public isAndroid(): boolean {
        return isAndroid;
    }
    showSideDrawer(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
}