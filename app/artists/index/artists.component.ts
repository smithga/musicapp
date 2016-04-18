import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { IArtist } from '../models/artist';
import {ArtistsListComponent} from '../list/artists.list.component';

@Component({
    templateUrl: 'app/artists/index/artists.component.html',
    directives: [ArtistsListComponent],
})
export class ArtistsComponent {
    public pageTitle: string = "Artists";
    
    constructor(private _router: Router) {}
        
    public onBack() : void {
        this._router.navigate(["Home"]);
    }
    
    public onArtistClicked(artist: IArtist): void {
        console.log('ArtistClicked');
        this._router.navigate(["ArtistDetails", {id:artist.artist_id}]);
    }
}