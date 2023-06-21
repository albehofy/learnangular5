import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-artist-item',
  templateUrl: './app-artist-item.component.html',
})
export class AppArtistItemComponent {
  @Input('artist') artist:any;
}
