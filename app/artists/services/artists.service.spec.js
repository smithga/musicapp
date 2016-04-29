System.register(['angular2/core', 'angular2/testing', 'angular2/http', 'angular2/http/testing', './artists.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _this = this;
    var core_1, testing_1, http_1, testing_2, artists_service_1;
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
            function (artists_service_1_1) {
                artists_service_1 = artists_service_1_1;
            }],
        execute: function() {
            testing_1.describe('artists.service', function () {
                testing_1.beforeEachProviders(function () {
                    return [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
                        artists_service_1.ArtistsService
                    ];
                });
                testing_1.beforeEach(function () {
                    _this.artists = [
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
                testing_1.it('retrieve all artists', testing_1.inject([http_1.XHRBackend, artists_service_1.ArtistsService], function (mockBackend, artistsService) {
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: _this.artists
                        })));
                    });
                    artistsService.getArtists().subscribe(function (artists) {
                        testing_1.expect(artists).toBeDefined();
                        testing_1.expect(artists.length).toEqual(2);
                    });
                }));
                testing_1.it('retrieve one artist', testing_1.inject([http_1.XHRBackend, artists_service_1.ArtistsService], function (mockBackend, artistsService) {
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: _this.artists
                        })));
                    });
                    artistsService.getArtist(2).subscribe(function (artist) {
                        testing_1.expect(artist).toBeDefined();
                        testing_1.expect(artist.name).toBe("Breaking Benjamin");
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=artists.service.spec.js.map