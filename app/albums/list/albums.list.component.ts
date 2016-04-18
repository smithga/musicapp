import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';
import { RouteConfig, Router } from 'angular2/router';

import { IAlbum } from '../models/album';
import { AlbumsService } from '../services/albums.service';
import { AlbumInfoComponent } from '../info/album.info.component';
import { AlbumFilterPipe } from '../pipes/album.filter.pipe';
import { IArtist } from '../../artists/models/artist';

@Component({
    selector: 'albums-list',
    templateUrl: 'app/albums/list/albums.list.component.html',
    pipes: [AlbumFilterPipe],
    directives: [AlbumInfoComponent]
})
export class AlbumsListComponent implements OnInit {
    public errorMessage: string;
    public albumSearchFilter: string = "";
    public albums: IAlbum[];
    @Input() artist: IArtist;
    @Input() filter: string;
    @Output() albumClicked: EventEmitter<IAlbum> = new EventEmitter<IAlbum>();

    constructor(private _router: Router, private _albumsService: AlbumsService) {}
    
    ngOnInit(): void {
        if(this.artist) {
            this.getAlbumsByArtist();
        } else {
            this.getAlbums();
        }
    }
    
    getAlbums() {
        this._albumsService.getAlbums()
            .subscribe(
            albums => this.albums = albums,
            error =>  this.errorMessage = <any>error); 
    }
    
    getAlbumsByArtist() {
        this._albumsService.getAlbumsForArtist(this.artist.artist_id)
            .subscribe(
            albums => this.albums = albums,
            error =>  this.errorMessage = <any>error);         
    }
    
    onAlbumClicked(album: IAlbum) {
        this.albumClicked.emit(album);
    }
    
}