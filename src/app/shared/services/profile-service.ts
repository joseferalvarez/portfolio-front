import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { inject, computed } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly http = inject(HttpClient);
  readonly profile = toSignal(this.loadData());

  readonly name = computed(() => this.profile()?.name || "")
  readonly bio = computed(() => this.profile()?.bio || "")
  readonly avatarUrl = computed(() => this.profile()?.avatarUrl || "")
  readonly socialAccounts = computed(() => {

    if (!this.profile()) return [];

    return [
      (this.profile()?.email && { provider: "email", url: this.profile()?.email }),
      (this.profile()?.githubUrl && { provider: "github", url: this.profile()?.githubUrl }),
      ...this.profile()?.socialAccounts || []
    ] as SocialAccount[];
  })

  loadData(): Observable<Profile> {
    return this.http.get<Profile>("http://localhost:3000/api/v1/github/user/joseferalvarez");
  }
}