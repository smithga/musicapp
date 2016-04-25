import {ArtistFilterPipe} from './artist.filter.pipe';
import {IArtist, Artist} from '../models/artist';

describe('artist.filter.pipe.spec', ()=> {
   
   beforeEach(() => {
       this.pipe = new ArtistFilterPipe();

       this.artists = new Array<IArtist>();
       this.artists.push(new Artist(1, "Pink Floyd", "", ""));
       this.artists.push(new Artist(2, "Muse", "", ""));
       this.artists.push(new Artist(3, "Pearl Jam", "", ""));
       this.artists.push(new Artist(4, "Breaking Benjamin", "", ""));       
   })
   
   it('filter on "ea"', ()=>{
       let result = this.pipe.transform(this.artists, ["ea"]);
       expect(result.length).toEqual(2);
   });
   
   it('filter on "pearl"', ()=>{
       let result = this.pipe.transform(this.artists, ["pearl"]);
       expect(result.length).toEqual(1);
   });   

   it('no results', ()=>{
       let result = this.pipe.transform(this.artists, ["@!#"]);
       expect(result.length).toEqual(0);
   });   
   
});
