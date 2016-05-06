
export interface IAlbum {
    album_id: number;
    artist_id: number;
    image_url: string;
    title: string;
    year: string;
}

export class Album {
    constructor(public album_id: number, public artist_id: number, public image_url: string, public title: string, public year: string) {}
}