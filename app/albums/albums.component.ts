import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { IAlbum } from './album';
import { AlbumsService } from './albums.service';
import { AlbumInfoComponent } from './album.info.component';
import { AlbumFilterPipe } from './album.filter.pipe';

@Component({
    templateUrl: 'app/albums/albums.component.html',
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