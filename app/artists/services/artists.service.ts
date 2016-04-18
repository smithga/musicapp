import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IArtist } from '../models/artist';

@Injectable()
export class ArtistsService {
    private _artistsUrl = 'api/artists.json';

    constructor(private _http: Http) { }
    
    getArtists(): Observable<IArtist[]> {
        return this._http.get(this._artistsUrl)
            .map((response: Response) => <IArtist[]> response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getArtist(id: number): Observable<IArtist> {
        return this.getArtists()
            .map((artists: IArtist[]) => artists.find(p => p.artist_id === id));       
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}