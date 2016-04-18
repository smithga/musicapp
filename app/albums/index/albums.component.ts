import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { IAlbum } from '../models/album';
import { AlbumsService } from '../services/albums.service';
import { AlbumInfoComponent } from '../info/album.info.component';
import { AlbumFilterPipe } from '../pipes/album.filter.pipe';

@Component({
    templateUrl: 'app/albums/index/albums.component.html',
    directives: [AlbumInfoComponent],
    pipes: [AlbumFilterPipe]
})
export class AlbumsComponent implements OnInit {
    public pageTitle: string = "Albums";
    public errorMessage: string;
    public albumSearchFilter: string = "";
    public albums: IAlbum[];
    
    constructor(private _router: Router, private _albumsService: AlbumsService) {}
    
    ngOnInit() : void {
        this.getAlbums();
    }
    
    getAlbums() {
        this._albumsService.getAlbums()
            .subscribe(
            albums => this.albums = albums,
            error =>  this.errorMessage = <any>error); 
    }
    
    public onBack(): void {
        this._router.navigate(['Home']);
    }
    
    public onAlbumClicked(album: IAlbum): void {
        //alert(album.title);
        this._router.navigate(["AlbumDetails", {id:album.album_id}]);
    }
}