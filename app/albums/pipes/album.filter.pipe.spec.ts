import {AlbumFilterPipe} from './album.filter.pipe';
import {IAlbum, Album} from '../models/album';

describe('album.filter.pipe.spec', ()=> {
   
   beforeEach(() => {
       this.pipe = new AlbumFilterPipe();

       this.albums = new Array<IAlbum>();
       this.albums.push(new Album(1, 1, "", "Drones", ""));
       this.albums.push(new Album(2, 1, "", "2nd Law", ""));
       this.albums.push(new Album(3, 1, "", "Black and Holes and Revelations", ""));
       this.albums.push(new Album(4, 2, "", "Phobia", ""));
   })
   
   it('filter on "o"', ()=>{
       let result = this.pipe.transform(this.albums, ["o"]);
       expect(result.length).toEqual(3);
   });
   
   it('filter on "e"', ()=>{
       let result = this.pipe.transform(this.albums, ["e"]);
       expect(result.length).toEqual(2);
   });   

   it('no results', ()=>{
       let result = this.pipe.transform(this.albums, ["@!#"]);
       expect(result.length).toEqual(0);
   });   
   
});
