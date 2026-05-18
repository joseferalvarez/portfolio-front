import { TestBed } from '@angular/core/testing';
import { Profile } from './profile.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';

describe('Profile Service', () => {
  let service: Profile;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(Profile);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with default values', () => {
    expect(service.profileCard()).toBeUndefined();
    expect(service.profileSection()).toBeUndefined();
    expect(service.profileProjects()).toBeUndefined();
  });

  it('profile card must retrieve data', () => {
    const mockData = {
      name: 'John',
      lastname: 'Doe',
      avatar: 'https://example.com/avatar.jpg',
      bio: 'Software Engineer with 2 years of experience',
      curriculum: 'https://example.com/cv.pdf',
      social_accounts: [
        {
          name: 'GitHub',
          url: 'https://github.com/johndoe',
          icon: 'https://example.com/github.svg',
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/johndoe',
          icon: 'https://example.com/linkedin.svg',
        },
      ],
    };

    const req = httpMock.expectOne(
      `${environment.apiUrl}/api/v1/home/card/en/${environment.profileId}`,
    );

    req.flush(mockData);

    expect(service.profileCard()).toEqual(mockData);
  });
});
