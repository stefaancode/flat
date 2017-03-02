import { TrackService } from './shared/trackservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
  providers: [TrackService]
})
export class TracksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
