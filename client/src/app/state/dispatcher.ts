import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { take, filter } from 'rxjs/operators';
import { AppState } from './state';
import {
    GivePoolFilterChangedAction,
    OpportunitySelectedAction,
    OpportunitiesRequestedAction,
    ChildClaimPostedAction,
    InvalidRouteActivated
} from './actions';

@Injectable()
export class AppStateDispatcher {
    constructor(
        private store: Store < AppState >
    ) {}

    public requestOpportunitiesList(): void {
        return this.store.dispatch(new OpportunitiesRequestedAction());
    }

    public selectOpportunity(opportunityID: number): void {
        return this.store.dispatch(new OpportunitySelectedAction(opportunityID));
    }

    public invalidateRoute(route: string): void {
        return this.store.dispatch(new InvalidRouteActivated(route));
    }

    public claimChild(childID: number): void {
        return this.store.dispatch(new ChildClaimPostedAction(childID));
    }

    public changeFilter(gender, minAge, maxAge): void {
        return this.store.dispatch(new GivePoolFilterChangedAction(gender, minAge, maxAge));
    }


    public getState(): Observable < AppState > {
        return this.store.select((state: AppState) => state);
    }

    public getStateSnapshot(): Promise < AppState > {
        return this.store.select((state: AppState) => state).pipe(take(1)).toPromise();
    }

    /**
     * Returns a promise of AppState only when there are opportunities
     */
    public getOpportunitiesSnapshot(): Promise < AppState > {
        return this.store.select((state: AppState) => state)
            .pipe(filter(state => state.daymaker.opportunities.length > 0), take(1)).toPromise();
    }
}
