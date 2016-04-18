System.register(['angular2/core', 'angular2/router', '../services/artists.service', '../info/artist.info.component', '../../albums/services/albums.service', '../../albums/list/albums.list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, artists_service_1, artist_info_component_1, albums_service_1, albums_list_component_1;
    var ArtistDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (artists_service_1_1) {
                artists_service_1 = artists_service_1_1;
            },
            function (artist_info_component_1_1) {
                artist_info_component_1 = artist_info_component_1_1;
            },
            function (albums_service_1_1) {
                albums_service_1 = albums_service_1_1;
            },
            function (albums_list_component_1_1) {
                albums_list_component_1 = albums_list_component_1_1;
            }],
        execute: function() {
            ArtistDetailsComponent = (function () {
                function ArtistDetailsComponent(_artistsService, _albumServices, _router, _routeParams) {
                    this._artistsService = _artistsService;
                    this._albumServices = _albumServices;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                ArtistDetailsComponent.prototype.ngOnInit = function () {
                    if (!this.artist) {
                        var id = +this._routeParams.get('id');
                        this.getArtist(id);
                    }
                };
                ArtistDetailsComponent.prototype.getArtist = function (id) {
                    var _this = this;
                    this._artistsService.getArtist(id).subscribe(function (artist) {
                        _this.artist = artist;
                        _this.getAlbums(artist.artist_id);
                    }, function (error) { return _this.errorMessage = error; });
                };
                ArtistDetailsComponent.prototype.getAlbums = function (id) {
                    var _this = this;
                    this._albumServices.getAlbumsForArtist(id).subscribe(function (albums) { return _this.albums = albums; }, function (error) { return _this.errorMessage = error; });
                };
                ArtistDetailsComponent.prototype.onBack = function () {
                    this._router.navigate(["Artists"]);
                };
                ArtistDetailsComponent.prototype.onAlbumClicked = function (album) {
                    this._router.navigate(["AlbumDetails", { id: album.album_id }]);
                };
                ArtistDetailsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/artists/details/artist.details.component.html',
                        directives: [artist_info_component_1.ArtistInfoComponent,
                            albums_list_component_1.AlbumsListComponent]
                    }), 
                    __metadata('design:paramtypes', [artists_service_1.ArtistsService, albums_service_1.AlbumsService, router_1.Router, router_1.RouteParams])
                ], ArtistDetailsComponent);
                return ArtistDetailsComponent;
            }());
            exports_1("ArtistDetailsComponent", ArtistDetailsComponent);
        }
    }
});
//# sourceMappingURL=artist.details.component.js.map