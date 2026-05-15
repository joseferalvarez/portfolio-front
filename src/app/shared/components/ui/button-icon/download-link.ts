import { Component, input } from '@angular/core';
import { LucideDownload } from '@lucide/angular';

@Component({
  selector: 'download-link',
  templateUrl: './download-link.html',
  styleUrl: './download-link.css',
  imports: [LucideDownload],
})
export class DownloadLink {
  readonly text = input('text');
  readonly url = input('url');
}
