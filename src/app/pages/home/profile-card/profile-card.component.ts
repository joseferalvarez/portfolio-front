import { Component, computed, inject } from '@angular/core';
import { IconLink } from '@ui/icon-link/icon-link';
import { DownloadLink } from '@ui/button-icon/download-link';
import { Profile } from '@services/profile.service';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
  imports: [IconLink],
})
export class ProfileCard {
  private readonly _profileCard = inject(Profile);
  readonly profile = computed(() => this._profileCard.profileCard());
}
