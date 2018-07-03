import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
})

export class AppComponent {
    constructor(private router: Router,
                private route: ActivatedRoute) {
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
            }
        })
    }
}
