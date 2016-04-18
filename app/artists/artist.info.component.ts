import { Component, Input, Output, EventEmitter } from 'angular2/core';

import { IArtist } from '../artists/artist';

@Component({
    selector: 'artist-info',
    templateUrl: 'app/artists/artist.info.component.html',
    styleUrls: ['app/artists/artist.info.component.css']
})
export class ArtistInfoComponent {
    @Input() artist: IArtist;
    @Output() artistClicked: EventEmitter<IArtist> = new EventEmitter<IArtist>();
 
    public onClick() : void {
        this.artistClicked.emit(this.artist);
    }  
}