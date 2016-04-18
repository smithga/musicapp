import { Component, OnInit, Input } from 'angular2/core';
import { Router } from 'angular2/router';

import { IAlbum } from '../models/album';
import { AlbumsListComponent } from '../list/albums.list.component';

@Component({
    templateUrl: 'app/albums/index/albums.component.html',
    directives: [AlbumsListComponent]
})
export class AlbumsComponent {
    public pageTitle: string = "Albums";
    public albumSearchFilter: string = "";
        
    constructor(private _router: Router) {}
            
    public onBack(): void {
        this._router.navigate(['Home']);
    }
    
    public onAlbumClicked(album: IAlbum): void {
        console.dir(album);
        this._router.navigate(["AlbumDetails", {id:album.album_id}]);
    }
}