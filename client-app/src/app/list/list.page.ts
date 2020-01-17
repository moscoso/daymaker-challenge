import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateDispatcher } from '../state/dispatcher';
import { AppState } from '../state/state';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {


    genderValue: 'm' | 'f' | null = null;

    rangeValue: any = { lower: 1, upper: 17 };


    title = '';

    items = [];

    minAge = 1;
    maxAge = 17;

    constructor(
        private dispatch: AppStateDispatcher,
        private router: Router,
        private alertController: AlertController,
    ) {

    }

    ngOnInit() {
        this.dispatch.getOpportunitiesSnapshot().then(state => {
            this.validateURL(state);
        });

        this.dispatch.getState().subscribe(state => {
            this.items = state.daymaker.children;
        });
    }

    validateURL(state: AppState) {
        const url = this.router.url;
        const plainURL = url.replace('/', '');

        let matchFound = false;
        for (const opportunity of state.daymaker.opportunities) {
            matchFound = opportunity.url === plainURL;
            if (matchFound) {
                this.title = opportunity.name;
                this.dispatch.selectOpportunity(opportunity.id);
                break;
            }
        }
        if (!matchFound) {
            this.dispatch.invalidateRoute(url);
        }
    }

    confirm1(poolID: number) {
        this.alertController.create({
            message: 'Are you sure you want to claim this child?',
            buttons: [{
                role: 'confirm',
                cssClass: 'confirm',
                text: 'CONFIRM',
                handler: () => {
                    this.confirm2(poolID);
                }
            }, {
                role: 'cancel',
                text: 'CANCEL',
                cssClass: 'abort',
            }]
        }).then(alert => alert.present());
    }

    confirm2(poolID: number) {
        this.alertController.create({
            message: 'Are you DOUBLE sure you want to claim this child?',
            buttons: [{
                role: 'confirm',
                text: 'CONFIRM',
                cssClass: 'confirm',
                handler: () => {
                    this.dispatch.claimChild(poolID);
                }
            }, {
                role: 'cancel',
                text: 'ABORT',
                cssClass: 'abort',
            }]
        }).then(alert => alert.present());
    }

    submitFilter(): void {
        this.minAge = this.rangeValue.lower;
        this.maxAge = this.rangeValue.upper;
        this.dispatch.changeFilter(this.genderValue, this.rangeValue.lower, this.rangeValue.upper);
    }
}
