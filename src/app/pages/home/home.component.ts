import { Component } from '@angular/core';
import { ProfileSection } from './profile-section/profile-section.component';
import { ProfileCard } from './profile-card/profile-card.component';

@Component({
  selector: 'app-home',
  imports: [ProfileCard, ProfileSection],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class Home {}
