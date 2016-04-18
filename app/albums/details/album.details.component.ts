import { Component, OnInit } from 'angular2/core';
import { RouteParams, Location } from 'angular2/router';

import { AlbumsService } from '../services/albums.service';
import { ArtistsService } from '../../artists/services/artists.service';
import { IAlbum } from '../models/album';
import { IArtist } from '../../artists/models/artist';

@Component({
    templateUrl: 'app/albums/details/album.details.component.html'
})
export class AlbumDetailsComponent implements OnInit {
    errorMessage: string;
    album: IAlbum;
    artist: IArtist;
    
    constructor(private _albumsService: AlbumsService, 
                private _artistsService: ArtistsService, 
                private _routeParams: RouteParams,
                private _location: Location) {}
    
    ngOnInit() :void {
        if (!this.album) {
            let id = +this._routeParams.get('id');
            this.getAlbum(id);
        }
    }
    
    getAlbum(id: number): void {
        let x = this._albumsService.getAlbum(id).subscribe(
            album => {
              this.album = album;
              this.getArtist(album.artist_id);  
            },
            error => this.errorMessage = <any>error);
    }

    getArtist(id: number) : void {
        this._artistsService.getArtist(id).subscribe(
            artist => this.artist = artist,
            error => this.errorMessage = <any>error);        
    }
    
    onBack(): void {
        this._location.back();  
    }
    
}