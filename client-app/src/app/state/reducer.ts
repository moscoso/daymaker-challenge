import { AppState, APP_INIT_STATE, DaymakerState } from './state';
import { AppAction, AppActionType } from './actions';

export function DayMakerReducer(state = APP_INIT_STATE, action: AppAction): DaymakerState {
    const payload = action.payload;
    switch (action.type) {
        case AppActionType.OPPORTUNITIES_REQUESTED:
        case AppActionType.CHILD_CLAIM_POSTED:
            return {
                ...state,
                fetchInProgress: true,
                    error: null
            };
        case AppActionType.OPPORTUNITIES_RECEIVED:
            return {
                ...state,
                opportunities: payload.data,
                    fetchInProgress: false,
            };
        case AppActionType.OPPORTUNITIES_FETCH_FAILED:
        case AppActionType.GIVE_POOL_FETCH_FAILED:
        case AppActionType.CHILD_CLAIM_FAILED:
            return {
                ...state,
                fetchInProgress: false,
                    error: action.payload.error,
            };
        case AppActionType.OPPORTUNITY_SELECTED:
            return {
                ...state,
                fetchInProgress: true,
                    error: null,
                    currentOpportunityID: payload.opportunityID,
            };
        case AppActionType.GIVE_POOL_RECEIVED:
            return {
                ...state,
                fetchInProgress: false,
                    children: payload.data,
            };
        case AppActionType.GIVE_POOL_FILTER_CHANGED:
            return {
                ...state,
                gender: payload.gender,
                    minAge: payload.minAge,
                    maxAge: payload.maxAge,
            };
        default:
            return state;
    }
}
