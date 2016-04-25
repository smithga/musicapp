import {AppComponent} from './app.component';

describe('app component', () => {
    it('returns correct name', () =>{
        let cpnt: AppComponent = new AppComponent();
        let result: string = cpnt.pageTitle();
        expect(result).toEqual("Music Store");
    });
});