import {Injectable} from '@angular/core';
import { Track } from './track';

@Injectable()
export class TrackService {
    tracks: Track[] = [ 
        {id: 1, artist: 'Bonobo', title: 'Second Sun', year: '2008', youtubeID: 'ew4FWW1q200'},
        {id: 2, artist: 'Caribou', title: 'Melody Day', year: '2010', youtubeID: 'M7Oe1DN5VDA'},
        {id: 3, artist: 'Chymera', title: 'Caprica Burning', year: '2009', youtubeID: 'M7Oe1DN5VDA' },
        {id: 4, artist: 'Jessie Ware', title: 'Sweet Talk', year: '2016', youtubeID: 'M7Oe1DN5VDA'},
        {id: 5, artist: 'Chymera', title: 'Umbrella', year: '2010', youtubeID: 'M7Oe1DN5VDA'},
        {id: 6, artist: 'James Holden', title: 'A Break In The Clouds', year: '2009', youtubeID: 'M7Oe1DN5VDA'},
        {id: 7, artist: 'Minilogue', title: 'The Leopard - Extrawelt Remix', year: '2008', youtubeID: 'M7Oe1DN5VDA'},
        {id: 8, artist: 'Gill Scott-Heron & Jamie XX', title: 'NY Is Killing Me', year: '2015', youtubeID: 'M7Oe1DN5VDA'},
        {id: 9, artist: 'A Tribe Called Quest', title: 'Electric Relaxation', year: '2001', youtubeID: 'M7Oe1DN5VDA'},
        {id: 10, artist: 'Fugees', title: 'Ready Or Not', year: '1998', youtubeID: 'M7Oe1DN5VDA'}
     ]
    getAllTracks() {
        return this.tracks;
    }
    
    getTrackByID(id) {
        return this.tracks.find(track => track.id === Number(id));
    }
}
