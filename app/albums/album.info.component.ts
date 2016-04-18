import { Component, Input, Output, EventEmitter } from 'angular2/core';

import { IAlbum } from './album';

@Component({
    selector: 'album-info',
    templateUrl: 'app/albums/album.info.component.html',
    styleUrls: ['app/albums/album.info.component.css'],
})
export class AlbumInfoComponent {
    @Input() album: IAlbum;
    @Output() albumClicked: EventEmitter<IAlbum> = new EventEmitter<IAlbum>();
    
    public onClick() : void {
        this.albumClicked.emit(this.album);
    } 
}