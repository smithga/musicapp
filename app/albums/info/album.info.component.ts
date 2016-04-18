import { Component, Input, Output, EventEmitter } from 'angular2/core';

import { IAlbum } from '../models/album';

@Component({
    selector: 'album-info',
    templateUrl: 'app/albums/info/album.info.component.html',
    styleUrls: ['app/albums/info/album.info.component.css'],
})
export class AlbumInfoComponent {
    @Input() album: IAlbum;
    @Output() albumClicked: EventEmitter<IAlbum> = new EventEmitter<IAlbum>();
    
    public onClick() : void {
        this.albumClicked.emit(this.album);
    } 
}