import {provide} from 'angular2/core';

import {
    beforeEach,
    beforeEachProviders,
    describe,
    expect,
    it,
    inject,
    injectAsync
} from 'angular2/testing';

import {BaseRequestOptions, Response, ResponseOptions, Http, HTTP_PROVIDERS, XHRBackend} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';

import {IArtist} from '../models/artist';
import {ArtistsService} from './artists.service';

describe('artists.service', () => {

    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, { useClass: MockBackend }),
            ArtistsService
        ];
    });


    beforeEach(() => {
        this.artists = [
            {
                artist_id: 1,
                name: "Muse",
                image_url: "muse.jpg",
                biography: "bio1"
            },
            {
                artist_id: 2,
                name: "Breaking Benjamin",
                image_url: "breaking_benjamin.jpg",
                biography: "bio2"
            },
        ];
    });

    it('retrieve all artists', inject([XHRBackend, ArtistsService], (mockBackend, artistsService: ArtistsService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: this.artists
                    }
                    )));
            });

        artistsService.getArtists().subscribe(
            (artists: IArtist[]) => {
                expect(artists).toBeDefined();
                expect(artists.length).toEqual(2);
            }
        );
    }));

    it('retrieve one artist', inject([XHRBackend, ArtistsService], (mockBackend, artistsService: ArtistsService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: this.artists
                    }
                    )));
            });

        artistsService.getArtist(2).subscribe(
            (artist: IArtist) => {
                expect(artist).toBeDefined();
                expect(artist.name).toBe("Breaking Benjamin");
            }
        );
    }));


});