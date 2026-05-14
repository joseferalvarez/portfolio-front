import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'profile-section',
  imports: [ProfileCard],
  templateUrl: './profile-section.html',
  styleUrl: './profile-section.css',
})
export class ProfileSection {}
