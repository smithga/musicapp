import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { IArtist } from '../models/artist';
import { IAlbum } from '../../albums/models/album';
import { ArtistsService } from '../services/artists.service';
import { AlbumsService } from '../../albums/services/albums.service';
import { AlbumsListComponent } from '../../albums/list/albums.list.component';
import {ArtistInfoComponent} from '../info/artist.info.component';
import {PanelComponent} from '../../shared/panel.component';

@Component({
    templateUrl: 'app/artists/details/artist.details.component.html',
    directives: [ArtistInfoComponent,
                 AlbumsListComponent,
                 PanelComponent]
})
export class ArtistDetailsComponent implements OnInit {
    artist: IArtist;
    errorMessage: string;
    albums: IAlbum[];
    
    constructor(private _artistsService: ArtistsService, private _albumServices: AlbumsService, private _router: Router, private _routeParams: RouteParams) {}
    
    ngOnInit() : void {
        if (!this.artist) {
            let id = +this._routeParams.get('id');
            this.getArtist(id);
        }
    }
    
    getArtist(id: number): void {
        this._artistsService.getArtist(id).subscribe(
            artist => {
              this.artist = artist;
              this.getAlbums(artist.artist_id);
            },
            error => this.errorMessage = <any>error);
    }

    getAlbums(id: number): void {
        this._albumServices.getAlbumsForArtist(id).subscribe(
            albums => this.albums = albums,
            error => this.errorMessage = <any>error);        
    }

    onBack(): void {
        this._router.navigate(["Artists"]);  
    }
    
    public onAlbumClicked(album: IAlbum): void {
        this._router.navigate(["AlbumDetails", {id:album.album_id}]);
    }

}