import { Injectable } from '@angular/core';

@Injectable()
export default class PageService {
    public _selectedBookingInfo = null;

    public get selectedBookingInfo() {
        return this._selectedBookingInfo || {};
    }

    public set selectedBookingInfo(val) {
        this._selectedBookingInfo = { ...this._selectedBookingInfo, ...val };
    }

}