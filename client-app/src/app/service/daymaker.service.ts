import { Injectable, } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DaymakerService {


    serviceURL = environment.serviceURL;

    constructor(
        private http: HttpClient,
    ) {}

    getClaim(givePoolID: number) {
        return this.http.get(`${this.serviceURL}/claim/${givePoolID}`);

    }

    getGivePool(opportunityID: number, gender: 'm' | 'f' | null, minAge: number, maxAge: number) {
        let route = `${this.serviceURL}/pool/${opportunityID}?`;

        const filterGender = gender != null;
        if (filterGender) {
            route += `gender=${gender}&`;
        }

        const filterMinAge = minAge != null;
        if (filterMinAge) {
            route += `minAge=${minAge}&`;
        }

        const filterMaxAge = maxAge != null;
        if (filterMaxAge) {
            route += `maxAge=${maxAge}&`;
        }
        return this.http.get(route);
    }

    getOpportunities(): Observable < any > {
        return this.http.get(`${this.serviceURL}/opportunities`);
    }
}
