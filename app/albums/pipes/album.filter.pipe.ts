import {  PipeTransform, Pipe } from 'angular2/core';
import { IAlbum } from '../models/album';

@Pipe({
    name: 'albumFilter'
})
export class AlbumFilterPipe implements PipeTransform {

    transform(value: IAlbum[], args: string[]): IAlbum[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((album:IAlbum)=> 
            album.title.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}