import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx';   // Load all features
import { HTTP_PROVIDERS } from 'angular2/http';

import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/index/albums.component';
import { ArtistsComponent } from './artists/index/artists.component';
import { AlbumsService } from './albums/services/albums.service';
import { ArtistsService } from './artists/services/artists.service';
import { AlbumDetailsComponent } from './albums/details/album.details.component';
import { ArtistDetailsComponent } from './artists/details/artist.details.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,
                HTTP_PROVIDERS,
                AlbumsService,
                ArtistsService]
})
@RouteConfig([
    {path: "/home", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/albums", name: "Albums", component: AlbumsComponent },
    { path: "/artists", name: "Artists", component: ArtistsComponent },
    { path: "/albums/:id", name: "AlbumDetails", component: AlbumDetailsComponent },
    { path: "/arists/:id", name: "ArtistDetails", component: ArtistDetailsComponent }
])
export class AppComponent {
    pageTitle(): string {
        return "Music Store";
    }
}