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

import {IAlbum} from '../models/album';
import {AlbumsService} from './albums.service';

describe('albums.service', () => {

    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, { useClass: MockBackend }),
            AlbumsService
        ];
    });


    beforeEach(() => {
        this.albums = [
            {
                album_id: 1,
                artist_id: 1,
                image_url: "",
                title: "Drone",
                year: ""
            },
            {
                album_id: 2,
                artist_id: 1,
                image_url: "muse-2nd_law.jpg",
                title: "2nd Law",
                year: "2015"
            },
        ];
    });

    it('retrieve all albums', inject([XHRBackend, AlbumsService], (mockBackend, albumsService: AlbumsService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: this.albums
                    }
                    )));
            });

        albumsService.getAlbums().subscribe(
            (albums: IAlbum[]) => {
                expect(albums.length).toEqual(2);
            }
        );
    }));

    it('retrieve one album', inject([XHRBackend, AlbumsService], (mockBackend, albumsService: AlbumsService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: this.albums
                    }
                    )));
            });

        albumsService.getAlbum(2).subscribe(
            (albums: IAlbum) => {
                expect(albums.title).toBe("2nd Law");
            }
        );
    }));


});