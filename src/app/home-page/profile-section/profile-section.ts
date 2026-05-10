import { Component, computed, inject } from "@angular/core"
import { ProfileService } from "../../shared/services/profile-service";
import { ProfileCard } from "./profile-card/profile-card";
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'profile-section',
  imports: [ProfileCard],
  templateUrl: './profile-section.html',
  styleUrl: './profile-section.css',
})
export class ProfileSection {
}