import { Injectable, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LangService } from './lang.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { IProfileCard, IProfileSection, IProfileProject } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class Profile {
  private readonly _lang = inject(LangService);
  private readonly _http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;
  private readonly profileId = environment.profileId;
  private readonly lang = computed(() => this._lang.lang());

  readonly profileCard = toSignal(
    this._http.get<IProfileCard>(
      `${this.apiUrl}/api/v1/home/card/${this.lang()}/${this.profileId}`,
    ),
    { initialValue: null },
  );

  readonly profileSection = toSignal(
    this._http.get<IProfileSection>(
      `${this.apiUrl}/api/v1/home/section/profile/${this.lang()}/${this.profileId}`,
    ),
    { initialValue: null },
  );

  readonly profileProjects = toSignal(
    this._http.get<IProfileProject>(
      `${this.apiUrl}/api/v1/home/section/projects/${this.lang()}/${this.profileId}`,
    ),
    { initialValue: null },
  );
}
