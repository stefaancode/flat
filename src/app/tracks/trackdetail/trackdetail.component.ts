import { ActivatedRoute } from '@angular/router';
import { TrackService } from '../shared/trackservice';
import { Component, OnInit } from '@angular/core';
import { Track } from '../shared/track';

@Component({
  selector: 'app-trackdetail',
  templateUrl: './trackdetail.component.html',
  styleUrls: ['./trackdetail.component.css']
})
export class TrackdetailComponent implements OnInit{
  tracks: Track[];
  currentTrack: Track;
  constructor(private trackservice: TrackService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: {id: string}) => {
      this.currentTrack = this.trackservice.getTrackByID(params.id);
    });
  }

  
}
