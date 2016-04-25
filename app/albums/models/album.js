System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Album;
    return {
        setters:[],
        execute: function() {
            Album = (function () {
                function Album(album_id, artist_id, image_url, title, year) {
                    this.album_id = album_id;
                    this.artist_id = artist_id;
                    this.image_url = image_url;
                    this.title = title;
                    this.year = year;
                }
                return Album;
            }());
            exports_1("Album", Album);
        }
    }
});
//# sourceMappingURL=album.js.map