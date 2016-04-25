System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Artist;
    return {
        setters:[],
        execute: function() {
            Artist = (function () {
                function Artist(artist_id, name, image_url, biography) {
                    this.artist_id = artist_id;
                    this.name = name;
                    this.image_url = image_url;
                    this.biography = biography;
                }
                return Artist;
            }());
            exports_1("Artist", Artist);
        }
    }
});
//# sourceMappingURL=artist.js.map