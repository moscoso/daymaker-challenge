import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppStateDispatcher } from './state/dispatcher';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    public appPages = [
    {
        title: 'Home',
        url: '/home',
        icon: 'home'
    },
    {
        title: 'List',
        url: '/list',
        icon: 'list'
    }];

    public opportunities: any[] = [];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private dispatch: AppStateDispatcher,
    ) {
        this.initializeApp();
    }

    ngOnInit(): void {
        this.dispatch.requestOpportunitiesList();

        this.dispatch.getState()
            .subscribe(state => {
                this.opportunities = state.daymaker.opportunities;
            });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
