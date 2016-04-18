import {  PipeTransform, Pipe } from 'angular2/core';
import { IArtist } from '../models/artist';

@Pipe({
    name: 'artistFilter'
})
export class ArtistFilterPipe implements PipeTransform {

    transform(value: IArtist[], args: string[]): IArtist[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((artist:IArtist)=> 
            artist.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}