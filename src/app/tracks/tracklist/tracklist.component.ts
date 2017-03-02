import { Router } from '@angular/router';
import { TrackService } from '../shared/trackservice';
import { Component, OnInit } from '@angular/core';
import { Track } from '../shared/track';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {
  tracks: Track[] = [];
  
  constructor(private trackservice: TrackService, private router: Router) { }

  ngOnInit() {
    this.tracks = this.trackservice.getAllTracks();
   
  }

  

   showDetail(id) {
     this.router.navigate(['/tracks', {outlets: {'detail': [id]}}]);
   }
  

}
