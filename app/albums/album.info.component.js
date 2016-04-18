System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AlbumInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AlbumInfoComponent = (function () {
                function AlbumInfoComponent() {
                    this.albumClicked = new core_1.EventEmitter();
                }
                AlbumInfoComponent.prototype.onClick = function () {
                    this.albumClicked.emit(this.album);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AlbumInfoComponent.prototype, "album", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], AlbumInfoComponent.prototype, "albumClicked", void 0);
                AlbumInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'album-info',
                        templateUrl: 'app/albums/album.info.component.html',
                        styleUrls: ['app/albums/album.info.component.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlbumInfoComponent);
                return AlbumInfoComponent;
                var _a;
            }());
            exports_1("AlbumInfoComponent", AlbumInfoComponent);
        }
    }
});
//# sourceMappingURL=album.info.component.js.map