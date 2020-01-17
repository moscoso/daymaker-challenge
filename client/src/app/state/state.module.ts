import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DayMakerReducer as DaymakerReducer } from './reducer';
import { AppStateDispatcher } from './dispatcher';
import { AppEffects } from './effects';

@NgModule({
    imports: [

        EffectsModule.forRoot([
            AppEffects,
        ]),

        StoreModule.forRoot({
            daymaker: DaymakerReducer,
        }),

        StoreDevtoolsModule.instrument({ maxAge: 25, name: `Daymaker` }),

    ],
    providers: [
        AppStateDispatcher,
    ]
})
export class AppStateModule {}
