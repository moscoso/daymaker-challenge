import { Action } from '@ngrx/store';

export enum AppActionType {
    OPPORTUNITIES_REQUESTED = 'Request opportunities list',
    OPPORTUNITIES_RECEIVED = 'Opportunities list received',
    OPPORTUNITIES_FETCH_FAILED = 'Opportunities list fetch failed',
    OPPORTUNITY_SELECTED = 'Opportunity Selected',
    INVALID_ROUTE_ACTIVATED = 'Invalid Route Activated',
    GIVE_POOL_RECEIVED = 'Give Pool Received',
    GIVE_POOL_FETCH_FAILED = 'Give Pool Fetch Failed',
    CHILD_CLAIM_STARTED = 'Child Claim Started',
    CHILD_CLAIM_POSTED = 'Child Claim Posted',
    CHILD_CLAIM_SUCCEEDED = 'Child Claim Succeeded',
    CHILD_CLAIM_FAILED = 'Child Claim Failed',
    CHILD_CLAIMED_ALREADY = 'Child Claim Failed because already claimed',
    GIVE_POOL_FILTER_CHANGED = 'Give Pool Filter Changed',
}


export class OpportunitiesRequestedAction implements Action {
    readonly type = AppActionType.OPPORTUNITIES_REQUESTED;
    public payload = {};
    constructor() {}
}

export class OpportunitiesReceivedAction implements Action {
    readonly type = AppActionType.OPPORTUNITIES_RECEIVED;
    public payload;
    constructor(public data: any) {
        this.payload = { data };
    }
}

export class OpportunitiesFetchFailedAction implements Action {
    readonly type = AppActionType.OPPORTUNITIES_FETCH_FAILED;
    public payload;
    constructor(error: any) {
        this.payload = { error };
    }
}

export class OpportunitySelectedAction implements Action {
    readonly type = AppActionType.OPPORTUNITY_SELECTED;
    public payload;
    constructor(opportunityID: number) {
        this.payload = { opportunityID };
    }
}

export class InvalidRouteActivated implements Action {
    readonly type = AppActionType.INVALID_ROUTE_ACTIVATED;
    public payload;
    constructor(route: string) {
        this.payload = { route };
    }
}

// export class GivePoolRequestedAction implements Action {
//     readonly type = AppActionType.GIVE_POOL_REQUESTED;
//     public payload;
//     constructor(opportunityID: number) {
//         this.payload = { opportunityID };
//     }
// }

export class GivePoolReceivedAction implements Action {
    readonly type = AppActionType.GIVE_POOL_RECEIVED;
    public payload;
    constructor(public data: any) {
        this.payload = { data };
    }
}

export class GivePoolFetchFailedAction implements Action {
    readonly type = AppActionType.GIVE_POOL_FETCH_FAILED;
    public payload;
    constructor(error: any) {
        this.payload = { error };
    }
}

export class ChildClaimStartedAction implements Action {
    readonly type = AppActionType.CHILD_CLAIM_STARTED;
    public payload = {};
    constructor() {}
}

export class UserConfirmedOnceAction implements Action {
    readonly type = AppActionType.CONFIRMED_ONCE;
    public payload = {};
}


export class UserConfirmedTwiceAction implements Action {
    readonly type = AppActionType.CONFIRMED_ONCE;
    public payload = {};
}

export class ChildClaimPostedAction implements Action {
    readonly type = AppActionType.CHILD_CLAIM_POSTED;
    public payload;
    constructor(givePoolID: number) {
        this.payload = { givePoolID };
    }
}

export class ChildClaimSucceededAction implements Action {
    readonly type = AppActionType.CHILD_CLAIM_SUCCEEDED;
    public payload;
    constructor(public data: any) {
        this.payload = { data };
    }
}

export class ChildClaimedAlreadyAction implements Action {
    readonly type = AppActionType.CHILD_CLAIMED_ALREADY;
    public payload = {};
    contructor() {}
}

export class ChildClaimFailedAction implements Action {
    readonly type = AppActionType.CHILD_CLAIM_FAILED;
    public payload;
    constructor(error: any) {
        this.payload = { error };
    }
}

export class GivePoolFilterChangedAction implements Action {
    readonly type = AppActionType.GIVE_POOL_FILTER_CHANGED;
    public payload;
    constructor(gender: 'm' | 'f' | null, minAge: number, maxAge: number) {
        this.payload = { gender, minAge, maxAge };
    }
}


export type AppAction =
    OpportunitiesRequestedAction |
    OpportunitiesReceivedAction |
    OpportunitiesFetchFailedAction |
    OpportunitySelectedAction |
    // GivePoolRequestedAction |
    GivePoolReceivedAction |
    GivePoolFetchFailedAction |
    ChildClaimStartedAction |
    ChildClaimPostedAction |
    ChildClaimSucceededAction |
    ChildClaimFailedAction |
    ChildClaimedAlreadyAction |
    GivePoolFilterChangedAction;
