System.register(['angular2/core', '../artists/artist'], function(exports_1, context_1) {
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
    var core_1, artist_1;
    var ArtistInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_1_1) {
                artist_1 = artist_1_1;
            }],
        execute: function() {
            ArtistInfoComponent = (function () {
                function ArtistInfoComponent() {
                    this.artistClicked = new core_1.EventEmitter();
                }
                ArtistInfoComponent.prototype.onClick = function () {
                    this.artistClicked.emit(this.artist);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', (typeof (_a = typeof artist_1.IArtist !== 'undefined' && artist_1.IArtist) === 'function' && _a) || Object)
                ], ArtistInfoComponent.prototype, "artist", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ArtistInfoComponent.prototype, "artistClicked", void 0);
                ArtistInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'artist-info',
                        templateUrl: 'app/artists/artist.info.component.html',
                        styleUrls: ['app/artists/artist.info.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArtistInfoComponent);
                return ArtistInfoComponent;
                var _a;
            }());
            exports_1("ArtistInfoComponent", ArtistInfoComponent);
        }
    }
});
//# sourceMappingURL=artist.info.component.js.map