import { Component, input } from '@angular/core';

@Component({
  selector: 'icon-link',
  templateUrl: './icon-link.html',
  styleUrl: './icon-link.css',
})
export class IconLink {
  readonly icon = input('icon');
  readonly url = input('url');
}
