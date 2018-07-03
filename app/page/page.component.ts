import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'page',
    moduleId: module.id,
    templateUrl: './page.component.html',
})
export class PageComponent {
    constructor(private router: Router) {
    }

    public navigateToFirstChild() {
        this.router.navigate(['/page/first']);
    }

    public navigateToSecondChild() {
        this.router.navigate(['/page/second']);
    }
}