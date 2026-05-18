import { UpperCasePipe } from '@angular/common';
import { Component, inject, computed } from '@angular/core';
import { Profile } from '@services/profile.service';

@Component({
  selector: 'profile-section',
  imports: [UpperCasePipe],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.css',
})
export class ProfileSection {
  protected readonly _profile = inject(Profile);

  protected readonly position = computed(() => {
    if (!this._profile.profileSection()) return 'Software Engineer'.split(' ');
    return this._profile.profileSection()?.position.split(' ');
  });
  protected readonly description = computed(() => {
    if (!this._profile.profileSection()) return [];
    return this._profile.profileSection()?.description.split('\n');
  });
}
