System.register(['angular2/core', 'angular2/router', '../list/albums.list.component', '../../shared/panel.component'], function(exports_1, context_1) {
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
    var core_1, router_1, albums_list_component_1, panel_component_1;
    var AlbumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (albums_list_component_1_1) {
                albums_list_component_1 = albums_list_component_1_1;
            },
            function (panel_component_1_1) {
                panel_component_1 = panel_component_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(_router) {
                    this._router = _router;
                    this.pageTitle = "Albums";
                    this.albumSearchFilter = "";
                }
                AlbumsComponent.prototype.onBack = function () {
                    this._router.navigate(['Home']);
                };
                AlbumsComponent.prototype.onAlbumClicked = function (album) {
                    console.dir(album);
                    this._router.navigate(["AlbumDetails", { id: album.album_id }]);
                };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/albums/index/albums.component.html',
                        directives: [albums_list_component_1.AlbumsListComponent,
                            panel_component_1.PanelComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AlbumsComponent);
                return AlbumsComponent;
            }());
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});
//# sourceMappingURL=albums.component.js.map