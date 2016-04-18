import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    templateUrl: 'app/artists/artists.component.html'
})
export class ArtistsComponent {
    public pageTitle: string = "Artists";
    
    constructor(private _router: Router) {}
    
    public onBack() : void {
        this._router.navigate(["Home"]);
    }
}