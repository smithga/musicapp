System.register(['angular2/core', 'angular2/router', '../services/artists.service', '../info/artist.info.component', '../../albums/list/albums.list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, artists_service_1, artist_info_component_1, albums_list_component_1;
    var ArtistsComponent;
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
            function (albums_list_component_1_1) {
                albums_list_component_1 = albums_list_component_1_1;
            }],
        execute: function() {
            ArtistsComponent = (function () {
                function ArtistsComponent(_router, _artistsService) {
                    this._router = _router;
                    this._artistsService = _artistsService;
                    this.pageTitle = "Artists";
                }
                ArtistsComponent.prototype.ngOnInit = function () {
                    this.getArtists();
                };
                ArtistsComponent.prototype.getArtists = function () {
                    var _this = this;
                    this._artistsService.getArtists()
                        .subscribe(function (artists) { return _this.artists = artists; }, function (error) { return _this.errorMessage = error; });
                };
                ArtistsComponent.prototype.onBack = function () {
                    this._router.navigate(["Home"]);
                };
                ArtistsComponent.prototype.onArtistClicked = function (artist) {
                    this._router.navigate(["ArtistDetails", { id: artist.artist_id }]);
                };
                ArtistsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/artists/index/artists.component.html',
                        directives: [artist_info_component_1.ArtistInfoComponent,
                            albums_list_component_1.AlbumsListComponent],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, artists_service_1.ArtistsService])
                ], ArtistsComponent);
                return ArtistsComponent;
            }());
            exports_1("ArtistsComponent", ArtistsComponent);
        }
    }
});
//# sourceMappingURL=artists.component.js.map