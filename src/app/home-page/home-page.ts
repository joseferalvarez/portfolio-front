import { Component } from '@angular/core';
import { ProfileSection } from './profile-section/profile-section';

@Component({
  selector: 'app-home-page',
  imports: [ProfileSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage { }
