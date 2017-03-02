import { TrackRouteActivator } from './tracks/trackdetail/track-route-activator.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing'

import { TrackService } from './tracks/shared/trackservice';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';
import { YoutubePlayerMiniModule }  from 'ng2-youtube-player-mini'

import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { TrackdetailComponent } from './tracks/trackdetail/trackdetail.component';
import { TracklistComponent } from './tracks/tracklist/tracklist.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent} from './shared/not-found.component';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    TrackdetailComponent,
    TracklistComponent,
    AboutComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    YoutubePlayerMiniModule
  ],
  providers: [TrackService, TrackRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
