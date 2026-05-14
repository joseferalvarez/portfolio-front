import { Component, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { JsonPipe } from '@angular/common';
import { IProfileCard } from '../../../shared/interfaces/profile-card';
import { toSignal } from '@angular/core/rxjs-interop';
import { IconLink } from '../../../ui/icon-link/icon-link';
import { DownloadLink } from '../../../ui/button-icon/download-link';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
  imports: [IconLink, DownloadLink],
})
export class ProfileCard {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;
  private readonly profileId = environment.profileId;
  protected readonly profile = toSignal(
    this.http.get<IProfileCard>(`${this.apiUrl}/api/v1/home/card/en/${this.profileId}`),
  );

  protected readonly name = computed(() => this.profile()?.name);
  protected readonly lastname = computed(() => this.profile()?.lastname);
  protected readonly avatar = computed(() => this.profile()?.avatar);
  protected readonly bio = computed(() => this.profile()?.bio);
  protected readonly curriculum = computed(() => this.profile()?.curriculum);
  protected readonly socialAccounts = computed(() => this.profile()?.social_accounts);
}
