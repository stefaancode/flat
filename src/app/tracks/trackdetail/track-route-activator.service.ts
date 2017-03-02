import { TrackService } from '../shared/trackservice';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class TrackRouteActivator implements CanActivate {
    constructor(private trackservice: TrackService, private router: Router  ){

    }

    canActivate(route: ActivatedRouteSnapshot){
        const trackExists = !!this.trackservice.getTrack(+route.params['id'])
        if (!trackExists) 
            this.router.navigate(['/404'])
        return trackExists;
    }
}