System.register(['angular2/core', 'angular2/router', './albums.service', './album.info.component', './album.filter.pipe'], function(exports_1, context_1) {
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
    var core_1, router_1, albums_service_1, album_info_component_1, album_filter_pipe_1;
    var AlbumsComponent;
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
            function (album_info_component_1_1) {
                album_info_component_1 = album_info_component_1_1;
            },
            function (album_filter_pipe_1_1) {
                album_filter_pipe_1 = album_filter_pipe_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(_router, _albumsService) {
                    this._router = _router;
                    this._albumsService = _albumsService;
                    this.pageTitle = "Albums";
                    this.albumSearchFilter = "";
                }
                AlbumsComponent.prototype.ngOnInit = function () {
                    this.getAlbums();
                };
                AlbumsComponent.prototype.getAlbums = function () {
                    var _this = this;
                    this._albumsService.getAlbums()
                        .subscribe(function (albums) { return _this.albums = albums; }, function (error) { return _this.errorMessage = error; });
                };
                AlbumsComponent.prototype.onBack = function () {
                    this._router.navigate(['Home']);
                };
                AlbumsComponent.prototype.onAlbumClicked = function (album) {
                    //alert(album.title);
                    this._router.navigate(["AlbumDetails", { id: album.album_id }]);
                };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/albums/albums.component.html',
                        directives: [album_info_component_1.AlbumInfoComponent],
                        pipes: [album_filter_pipe_1.AlbumFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, albums_service_1.AlbumsService])
                ], AlbumsComponent);
                return AlbumsComponent;
                var _a;
            }());
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});
//# sourceMappingURL=albums.component.js.map