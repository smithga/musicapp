import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IAlbum } from '../models/album';

@Injectable()
export class AlbumsService {
    private _albumsUrl = 'api/albums.json';

    constructor(private _http: Http) { }
    
    getAlbums(): Observable<IAlbum[]> {
        console.log(`getAlbums(): ${this._albumsUrl}`);
        return this._http.get(this._albumsUrl)
            .map((response: Response) => <IAlbum[]> response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAlbum(id: number): Observable<IAlbum> {
        console.log('getAlbum()');
        return this.getAlbums()
            .map((albums: IAlbum[]) => albums.find(p => p.album_id === id));       
    }

    getAlbumsForArtist(id: number): Observable<IAlbum[]> {
        return this.getAlbums()
            .map((albums: IAlbum[]) => albums.filter(p => p.artist_id === id));       
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}