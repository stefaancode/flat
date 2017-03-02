import { TrackdetailComponent } from './tracks/trackdetail/trackdetail.component';
import { TracklistComponent } from './tracks/tracklist/tracklist.component';
import { AboutComponent } from './about/about.component'
import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found.component';
import { TrackRouteActivator } from './tracks/trackdetail/track-route-activator.service'
import { TracksComponent } from './tracks/tracks.component';


export const appRoutes: Routes = [

    // {path: 'tracks/:id', component: TrackdetailComponent, canActivate},
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'tracks', component: TracksComponent, children : [
        {path: 'tracklist', component: TracklistComponent, outlet: 'list'},
        {path: ':id', component: TrackdetailComponent, outlet: 'detail'}
    ]}
    
];