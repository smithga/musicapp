System.register(['angular2/core', 'angular2/router', './albums.service', '../artists/artists.service'], function(exports_1, context_1) {
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
    var core_1, router_1, albums_service_1, artists_service_1;
    var AlbumDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (albums_service_1_1) {
                albums_service_1 = albums_service_1_1;
            },
            function (artists_service_1_1) {
                artists_service_1 = artists_service_1_1;
            }],
        execute: function() {
            AlbumDetailsComponent = (function () {
                function AlbumDetailsComponent(_albumsService, _artistsService, _router, _routeParams) {
                    this._albumsService = _albumsService;
                    this._artistsService = _artistsService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                AlbumDetailsComponent.prototype.ngOnInit = function () {
                    if (!this.album) {
                        var id = +this._routeParams.get('id');
                        this.getAlbum(id);
                    }
                };
                AlbumDetailsComponent.prototype.getAlbum = function (id) {
                    var _this = this;
                    console.log('getAlbum');
                    var x = this._albumsService.getAlbum(id).subscribe(function (album) {
                        _this.album = album;
                        _this.getArtist(album.artist_id);
                    }, function (error) { return _this.errorMessage = error; });
                };
                AlbumDetailsComponent.prototype.getArtist = function (id) {
                    var _this = this;
                    console.log('getArtist');
                    this._artistsService.getArtist(id).subscribe(function (artist) { return _this.artist = artist; }, function (error) { return _this.errorMessage = error; });
                };
                AlbumDetailsComponent.prototype.onBack = function () {
                    this._router.navigate(["Albums"]);
                };
                AlbumDetailsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/albums/album.details.component.html'
                    }), 
                    __metadata('design:paramtypes', [albums_service_1.AlbumsService, artists_service_1.ArtistsService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _b) || Object])
                ], AlbumDetailsComponent);
                return AlbumDetailsComponent;
                var _a, _b;
            }());
            exports_1("AlbumDetailsComponent", AlbumDetailsComponent);
        }
    }
});
//# sourceMappingURL=album.details.component.js.map