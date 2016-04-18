System.register(['angular2/core', '../pipes/artist.filter.pipe', '../services/artists.service', '../info/artist.info.component'], function(exports_1, context_1) {
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
    var core_1, artist_filter_pipe_1, artists_service_1, artist_info_component_1;
    var ArtistsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_filter_pipe_1_1) {
                artist_filter_pipe_1 = artist_filter_pipe_1_1;
            },
            function (artists_service_1_1) {
                artists_service_1 = artists_service_1_1;
            },
            function (artist_info_component_1_1) {
                artist_info_component_1 = artist_info_component_1_1;
            }],
        execute: function() {
            ArtistsListComponent = (function () {
                function ArtistsListComponent(_artistsService) {
                    this._artistsService = _artistsService;
                    this.artistClicked = new core_1.EventEmitter();
                }
                ArtistsListComponent.prototype.ngOnInit = function () {
                    this.getArtists();
                };
                ArtistsListComponent.prototype.getArtists = function () {
                    var _this = this;
                    console.log('getArtists()');
                    this._artistsService.getArtists()
                        .subscribe(function (artists) { return _this.artists = artists; }, function (error) { return _this.errorMessage = error; });
                };
                ArtistsListComponent.prototype.onArtistClicked = function (artist) {
                    this.artistClicked.emit(artist);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ArtistsListComponent.prototype, "filter", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ArtistsListComponent.prototype, "artistClicked", void 0);
                ArtistsListComponent = __decorate([
                    core_1.Component({
                        selector: 'artists-list',
                        templateUrl: 'app/artists/list/artists.list.component.html',
                        pipes: [artist_filter_pipe_1.ArtistFilterPipe],
                        directives: [artist_info_component_1.ArtistInfoComponent]
                    }), 
                    __metadata('design:paramtypes', [artists_service_1.ArtistsService])
                ], ArtistsListComponent);
                return ArtistsListComponent;
            }());
            exports_1("ArtistsListComponent", ArtistsListComponent);
        }
    }
});
//# sourceMappingURL=artists.list.component.js.map