System.register(['./album.filter.pipe', '../models/album'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _this = this;
    var album_filter_pipe_1, album_1;
    return {
        setters:[
            function (album_filter_pipe_1_1) {
                album_filter_pipe_1 = album_filter_pipe_1_1;
            },
            function (album_1_1) {
                album_1 = album_1_1;
            }],
        execute: function() {
            describe('album.filter.pipe.spec', function () {
                beforeEach(function () {
                    _this.pipe = new album_filter_pipe_1.AlbumFilterPipe();
                    _this.albums = new Array();
                    _this.albums.push(new album_1.Album(1, 1, "", "Drones", ""));
                    _this.albums.push(new album_1.Album(2, 1, "", "2nd Law", ""));
                    _this.albums.push(new album_1.Album(3, 1, "", "Black and Holes and Revelations", ""));
                    _this.albums.push(new album_1.Album(4, 2, "", "Phobia", ""));
                });
                it('filter on "o"', function () {
                    var result = _this.pipe.transform(_this.albums, ["o"]);
                    expect(result.length).toEqual(3);
                });
                it('filter on "e"', function () {
                    var result = _this.pipe.transform(_this.albums, ["e"]);
                    expect(result.length).toEqual(2);
                });
                it('no results', function () {
                    var result = _this.pipe.transform(_this.albums, ["@!#"]);
                    expect(result.length).toEqual(0);
                });
            });
        }
    }
});
//# sourceMappingURL=album.filter.pipe.spec.js.map