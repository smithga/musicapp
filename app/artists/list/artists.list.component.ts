import {Component,Input,Output,EventEmitter,OnInit} from 'angular2/core';

import {IAlbum} from '../../albums/models/album';
import {IArtist} from '../models/artist';
import {ArtistFilterPipe} from '../pipes/artist.filter.pipe';
import {ArtistsService} from '../services/artists.service';
import {ArtistInfoComponent} from '../info/artist.info.component';

@Component({
    selector: 'artists-list',
    templateUrl: 'app/artists/list/artists.list.component.html',
    pipes: [ArtistFilterPipe],
    directives: [ArtistInfoComponent]    
})
export class ArtistsListComponent implements OnInit {
    public errorMessage: string;
    public artists: IArtist[];
    @Input() filter: string;
    @Output() artistClicked: EventEmitter<IArtist> = new EventEmitter<IArtist>();

    constructor(private _artistsService: ArtistsService) {}

    ngOnInit(): void {
        this.getArtists();
    }

    getArtists() {
        console.log('getArtists()');
        this._artistsService.getArtists()
            .subscribe(
            artists => this.artists = artists,
            error =>  this.errorMessage = <any>error); 
    }

    public onArtistClicked(artist: IArtist) {
        this.artistClicked.emit(artist);
    }
}