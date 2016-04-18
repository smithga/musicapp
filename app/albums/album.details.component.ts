import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { AlbumsService } from './albums.service';
import { ArtistsService } from '../artists/artists.service';
import { IAlbum } from './album';
import { IArtist } from '../artists/artist';

@Component({
    templateUrl: 'app/albums/album.details.component.html'
})
export class AlbumDetailsComponent implements OnInit {
    errorMessage: string;
    album: IAlbum;
    artist: IArtist;
    
    constructor(private _albumsService: AlbumsService, private _artistsService: ArtistsService, private _router: Router, private _routeParams: RouteParams) {}
    
    ngOnInit() :void {
        if (!this.album) {
            let id = +this._routeParams.get('id');
            this.getAlbum(id);
        }
    }
    
    getAlbum(id: number): void {
        console.log('getAlbum');
        let x = this._albumsService.getAlbum(id).subscribe(
            album => {
              this.album = album;
              this.getArtist(album.artist_id);  
            },
            error => this.errorMessage = <any>error);
    }

    getArtist(id: number) : void {
        console.log('getArtist');
        this._artistsService.getArtist(id).subscribe(
            artist => this.artist = artist,
            error => this.errorMessage = <any>error);        
    }
    
    onBack(): void {
        this._router.navigate(["Albums"]);  
    }
    
}