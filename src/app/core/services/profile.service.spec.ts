import { TestBed } from '@angular/core/testing';
import { Profile } from './profile.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { LangService } from './lang.service';

describe('Profile Service', () => {
  let langService: LangService;
  let service: Profile;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), LangService, Profile],
    });
    langService = TestBed.inject(LangService);
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(Profile);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with default values', () => {
    expect(service.profileCard()).toBeNull();
    expect(service.profileSection()).toBeNull();
    expect(service.profileProjects()).toBeNull();
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

  it('profile section must retrieve data', () => {
    const mockData = {
      position: 'Software Engineer',
      description: 'Software Engineer with 2 years of experience',
    };

    const req = httpMock.expectOne(
      `${environment.apiUrl}/api/v1/home/section/profile/en/${environment.profileId}`,
    );

    req.flush(mockData);

    expect(service.profileSection()).toEqual(mockData);
  });

  it('profile projects must retrieve data', () => {
    const mockData = [
      {
        name: 'Project 1',
        description: 'Description 1',
        image: 'https://example.com/project1.jpg',
        url: 'https://example.com/project1',
      },
      {
        name: 'Project 2',
        description: 'Description 2',
        image: 'https://example.com/project2.jpg',
        url: 'https://example.com/project2',
      },
    ];

    const req = httpMock.expectOne(
      `${environment.apiUrl}/api/v1/home/section/projects/en/${environment.profileId}`,
    );

    req.flush(mockData);

    expect(service.profileProjects()).toEqual(mockData);
  });
});
