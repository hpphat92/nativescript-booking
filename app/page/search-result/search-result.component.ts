import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import * as moment from 'moment';
import AppConstant from '~/app.constant';
import 'rxjs/add/operator/map';
import { BookingService } from '~/shared/api';

@Component({
    selector: 'search-result-component',
    moduleId: module.id,
    templateUrl: './search-result.component.html',
})
export class SearchResultComponent implements OnInit, OnDestroy {
    public subscription;
    public busy = false;
    public searchCriteria = {};
    public total = 0;
    public paging = {
        pageIndex: 0,
        pageSize: 10,
    };
    public listData = [];
    public searchInfo = {
        searching: false,
        timeElapsed: '',
        startTimeReq: 0
    };

    constructor(private route: ActivatedRoute,
                private router: Router,
                private bookingService: BookingService,
                private routerExtensions: RouterExtensions) {
        this.subscription = this.route.queryParams.subscribe((e) => {
            this.searchCriteria = e || {};

        })
    }

    ngOnInit(): void {
        this.search(this.searchCriteria).subscribe((resp) => {
            this.listData = resp;
        }, () => {
        });
    }

    public search(model) {
        this.busy = true;
        this.searchInfo.startTimeReq = +(new Date());
        return this.bookingService.bookingSearchProperties(
            moment(+model.arrivalDate).format(AppConstant.typeFormat.date),
            moment(+model.departureDate).format(AppConstant.typeFormat.date),
            model.numberOfPAX,
            '',
            '0',
            true,
            this.paging.pageIndex + 1,
            this.paging.pageSize
        )
            .map((resp: any) => {
                this.busy = false;
                this.searchInfo.searching = false;
                this.searchInfo.timeElapsed = (((+new Date()) - this.searchInfo.startTimeReq) / 1000).toFixed(2);
                this.searchInfo.startTimeReq = 0;
                this.total = resp.data.total;
                this.listData = [...resp.data.entities,...resp.data.entities,...resp.data.entities,...resp.data.entities,...resp.data.entities,...resp.data.entities,...resp.data.entities,...resp.data.entities,...resp.data.entities,...resp.data.entities,...resp.data.entities];
                return resp.data.entities;
            }, () => {
                this.searchInfo.searching = false;
                this.searchInfo.timeElapsed = (((+new Date()) - this.searchInfo.startTimeReq) / 1000).toFixed(2);
                this.searchInfo.startTimeReq = 0;
            })
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    public onItemTap(args) {
        let selectedItem = this.listData[args.index];
        this.router.navigate(['hotel-detail'], {
            queryParams: {
                ...this.searchCriteria,
                id: selectedItem.id
            }
        })
    }

    ngOnDestroy(): void {
        this.subscription && this.subscription.unsubscribe();
    }
}