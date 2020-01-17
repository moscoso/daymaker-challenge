export interface AppState {
    daymaker: DaymakerState;
}

export interface DaymakerState {
    opportunities: any[];
    selectedGivePoolID: number | null;
    currentOpportunityID: number | null;
    children: any;
    fetchInProgress: boolean;
    error: any;
    gender: 'm' | 'f' | null;
    minAge: number;
    maxAge: number;
}

export const APP_INIT_STATE: DaymakerState = {
    opportunities: [],
    selectedGivePoolID: null,
    currentOpportunityID: null,
    children: [],
    fetchInProgress: false,
    gender: null,
    minAge: 1,
    maxAge: 17,
    error: null,
};
