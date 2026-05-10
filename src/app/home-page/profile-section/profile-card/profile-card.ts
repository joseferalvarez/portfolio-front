import { Component, inject, Signal } from "@angular/core";
import { ProfileService } from "../../../shared/services/profile-service";

@Component({
  selector: "profile-card",
  templateUrl: "./profile-card.html",
  styleUrl: "./profile-card.css"
})
export class ProfileCard {
  private readonly profileService = inject(ProfileService);

  readonly name = this.profileService.name;
  readonly bio = this.profileService.bio;
  readonly avatarUrl = this.profileService.avatarUrl;
  readonly socialAccounts = this.profileService.socialAccounts;
}