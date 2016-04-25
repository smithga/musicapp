
export interface IArtist {
    artist_id: number;
    name: string;
    image_url: string;
    biography: string;
}

export class Artist implements IArtist {
    constructor(public artist_id: number, public name: string, public image_url: string, public biography: string) {}
}