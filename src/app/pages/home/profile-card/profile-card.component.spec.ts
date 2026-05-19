import { TestBed } from '@angular/core/testing';
import { ProfileCard } from './profile-card.component';

describe('ProfileCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCard],
    }).compileComponents();
  });

  it('should render', () => {
    const fixture = TestBed.createComponent(ProfileCard);
    const profileCard = fixture.componentInstance;
    expect(profileCard).toBeTruthy();
  });

  it('should render profile data', () => {
    const fixture = TestBed.createComponent(ProfileCard);
    const profileCard = fixture.componentInstance;

    expect(profileCard.profile()).toBeNull();
  });
});
