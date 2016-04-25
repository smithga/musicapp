System.register(['./artist.filter.pipe', '../models/artist'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _this = this;
    var artist_filter_pipe_1, artist_1;
    return {
        setters:[
            function (artist_filter_pipe_1_1) {
                artist_filter_pipe_1 = artist_filter_pipe_1_1;
            },
            function (artist_1_1) {
                artist_1 = artist_1_1;
            }],
        execute: function() {
            describe('artist.filter.pipe.spec', function () {
                beforeEach(function () {
                    _this.pipe = new artist_filter_pipe_1.ArtistFilterPipe();
                    _this.artists = new Array();
                    _this.artists.push(new artist_1.Artist(1, "Pink Floyd", "", ""));
                    _this.artists.push(new artist_1.Artist(2, "Muse", "", ""));
                    _this.artists.push(new artist_1.Artist(3, "Pearl Jam", "", ""));
                    _this.artists.push(new artist_1.Artist(4, "Breaking Benjamin", "", ""));
                });
                it('filter on "ea"', function () {
                    var result = _this.pipe.transform(_this.artists, ["ea"]);
                    expect(result.length).toEqual(2);
                });
                it('filter on "pearl"', function () {
                    var result = _this.pipe.transform(_this.artists, ["pearl"]);
                    expect(result.length).toEqual(1);
                });
                it('no results', function () {
                    var result = _this.pipe.transform(_this.artists, ["@!#"]);
                    expect(result.length).toEqual(0);
                });
            });
        }
    }
});
//# sourceMappingURL=artist.filter.pipe.spec.js.map