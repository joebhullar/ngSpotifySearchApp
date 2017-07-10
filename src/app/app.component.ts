import { Component } from '@angular/core';
import {SpotifyService} from './services/spotify.service';

@Component({
  // What is module.id? What do we need it?
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [SpotifyService]
})
export class AppComponent  { name = 'Angular'; }
 