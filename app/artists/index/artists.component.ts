import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { IArtist } from '../models/artist';
import { ArtistsService } from '../services/artists.service';
import { ArtistInfoComponent } from '../info/artist.info.component';
import { AlbumsListComponent } from '../../albums/list/albums.list.component';
import { IAlbum } from '../../albums/models/album';

@Component({
    templateUrl: 'app/artists/index/artists.component.html',
    directives: [ArtistInfoComponent,
                 AlbumsListComponent],
})
export class ArtistsComponent implements OnInit {
    public pageTitle: string = "Artists";
    public errorMessage: string;
    public artists: IArtist[];
    public albums: IAlbum[];
    
    constructor(private _router: Router, private _artistsService: ArtistsService) {}
    
    ngOnInit(): void {
        this.getArtists();
    }
    
    getArtists() {
        this._artistsService.getArtists()
            .subscribe(
            artists => this.artists = artists,
            error =>  this.errorMessage = <any>error); 
    }
    
    public onBack() : void {
        this._router.navigate(["Home"]);
    }
    
    public onArtistClicked(artist: IArtist): void {
        this._router.navigate(["ArtistDetails", {id:artist.artist_id}]);
    }
}