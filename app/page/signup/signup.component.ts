
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'signup',
    moduleId: module.id,
    templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
    album: { bandName: string, albumName: string, year: string, owned: boolean, myRating: string } = {
        bandName: 'Ed Sheeran',
        albumName: 'X',
        year: '2017',
        owned: true,
        myRating: '9.5'
    };

    constructor() {
        console.log('Init Login');
    }

    ngOnInit(): void {
    }

    onButtonTap() {

    }
}