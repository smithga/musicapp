System.register(['angular2/core', 'angular2/testing', 'angular2/http', 'angular2/http/testing', './albums.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _this = this;
    var core_1, testing_1, http_1, testing_2, albums_service_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (albums_service_1_1) {
                albums_service_1 = albums_service_1_1;
            }],
        execute: function() {
            testing_1.describe('albums.service', function () {
                testing_1.beforeEachProviders(function () {
                    return [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
                        albums_service_1.AlbumsService
                    ];
                });
                testing_1.beforeEach(function () {
                    _this.albums = [
                        {
                            album_id: 1,
                            artist_id: 1,
                            image_url: "",
                            title: "Drone",
                            year: ""
                        },
                        {
                            "album_id": 2,
                            "artist_id": 1,
                            "image_url": "muse-2nd_law.jpg",
                            "title": "2nd Law",
                            "year": "2015"
                        },
                    ];
                });
                testing_1.it('retrieve all albums', testing_1.inject([http_1.XHRBackend, albums_service_1.AlbumsService], function (mockBackend, albumsService) {
                    //return new Promise((pass, fail) => {
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: _this.albums
                        })));
                    });
                    albumsService.getAlbums().subscribe(function (albums) {
                        testing_1.expect(albums.length).toEqual(2);
                    });
                    //expect(albumsService).not.toThrow();
                    //var album: IAlbum = service.getAlbum(1);
                    //expect(album.title).toEqual('Drones');
                    //});
                }));
                testing_1.it('retrieve one album', testing_1.inject([http_1.XHRBackend, albums_service_1.AlbumsService], function (mockBackend, albumsService) {
                    //return new Promise((pass, fail) => {
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: _this.albums
                        })));
                    });
                    albumsService.getAlbum(2).subscribe(function (albums) {
                        testing_1.expect(albums.title).toBe("2nd Law");
                    });
                    //expect(albumsService).not.toThrow();
                    //var album: IAlbum = service.getAlbum(1);
                    //expect(album.title).toEqual('Drones');
                    //});
                }));
            });
        }
    }
});
//# sourceMappingURL=albums.service.spec.js.map