import { DaymakerService } from '../service/daymaker.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
    AppActionType,
    OpportunitiesReceivedAction,
    OpportunitiesFetchFailedAction,
    AppAction,
    GivePoolReceivedAction,
    GivePoolFetchFailedAction,
    ChildClaimSucceededAction,
    ChildClaimFailedAction,
    ChildClaimedAlreadyAction
} from './actions';
import { pluck, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './state';




@Injectable()
export class AppEffects {

    constructor(
        private daymaker: DaymakerService,
        private store$: Store < AppState > ,
        private actions$: Actions,
        private alertController: AlertController,
        private router: Router,
    ) {}


    @Effect()
    opportunitiesRequested$: Observable < AppAction > = this.actions$
        .pipe(
            ofType(AppActionType.OPPORTUNITIES_REQUESTED),
            switchMap(async () => {
                return this.daymaker.getOpportunities().pipe(take(1)).toPromise()
                    .then(data => {
                        return new OpportunitiesReceivedAction(data);
                    })
                    .catch(error => {
                        return new OpportunitiesFetchFailedAction(error);
                    });
            })
        );

    @Effect()
    requestGivePool$: Observable < AppAction > = this.actions$
        .pipe(
            ofType(AppActionType.OPPORTUNITY_SELECTED, AppActionType.GIVE_POOL_FILTER_CHANGED),
            withLatestFrom(this.store$),
            switchMap(async ([action, storeState]) => {
                const opportunityID = storeState.daymaker.currentOpportunityID;
                const gender = storeState.daymaker.gender;
                const minAge = storeState.daymaker.minAge;
                const maxAge = storeState.daymaker.maxAge;
                return this.daymaker.getGivePool(opportunityID, gender, minAge, maxAge).pipe(take(1)).toPromise()
                    .then(data => {
                        return new GivePoolReceivedAction(data);
                    })
                    .catch(error => {
                        return new GivePoolFetchFailedAction(error);
                    });
            })
        );

    @Effect()
    claimRequested$: Observable < AppAction > = this.actions$
        .pipe(
            ofType(AppActionType.CHILD_CLAIM_POSTED),
            pluck('payload'),
            switchMap(async (payload: any) => {
                return this.daymaker.getClaim(payload.givePoolID).pipe(take(1)).toPromise()
                    .then((response: any) => {
                        if (response.code == null) {
                            return new ChildClaimSucceededAction(response);
                        } else if (response.code === 'ER_DUP_ENTRY') {
                            return new ChildClaimedAlreadyAction();
                        } else {
                            return new ChildClaimFailedAction(response);
                        }
                    })
                    .catch(error => {
                        this.alertClaimFailed();
                        return new ChildClaimFailedAction(error);
                    });
            })
        );

    @Effect({ dispatch: false })
    claimSucceeded$: Observable < AppAction > = this.actions$
        .pipe(
            ofType(AppActionType.CHILD_CLAIM_SUCCEEDED),
            tap(() => {
                this.alertClaimSuccess();
            })
        );

    @Effect({ dispatch: false })
    claimFailed$: Observable < AppAction > = this.actions$
        .pipe(
            ofType(AppActionType.CHILD_CLAIM_FAILED),
            tap(() => {
                this.alertClaimFailed();
            })
        );

    @Effect({ dispatch: false })
    claimedAlready$: Observable < AppAction > = this.actions$
        .pipe(
            ofType(AppActionType.CHILD_CLAIMED_ALREADY),
            tap(() => {
                this.alertClaimedAlready();
            })
        );

    @Effect({ dispatch: false })
    invalidRouteActivated$: Observable < AppAction > = this.actions$
        .pipe(
            ofType(AppActionType.INVALID_ROUTE_ACTIVATED),
            tap(() => {
                const options = {
                    message: `Sorry. Unless you’ve got a time machine, that content is unavailable.`,
                    buttons: [{
                        cssClass: 'confirm',
                        text: 'Go home',
                        handler: () => {
                            this.router.navigateByUrl('/');
                        }
                    }]
                };
                this.alertController.create(options).then(alert => alert.present());
            })
        );

    alertClaimSuccess(): void {
        const options = {
            message: `Thank you! Your claim has been made. Thanks for being a given being and a force of love!`,
            buttons: [{
                cssClass: 'confirm',
                text: 'Congrats ❤️',
            }]
        };
        this.alertController.create(options).then(alert => alert.present());
    }

    alertClaimedAlready(): void {
        const options = {
            message: `This giving opportunity is no longer available! Please try another giving opportunity!`,
            buttons: [{
                cssClass: 'abort',
                text: 'Darn!',
            }]
        };
        this.alertController.create(options).then(alert => alert.present());
    }

    alertClaimFailed(): void {
        const options = {
            message: `Uh Oh! Something went wrong. Your claim was not confirmed and did not go through. Please try again later!`,
            buttons: [{
                cssClass: 'abort',
                text: 'Cancel!',
            }]
        };
        this.alertController.create(options).then(alert => alert.present());
    }
}
