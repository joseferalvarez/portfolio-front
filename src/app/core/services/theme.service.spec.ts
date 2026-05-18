import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('Theme Service', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start as default', () => {
    expect(service.theme()).toBe('default');
  });

  it('should toggle theme from dark to light and vice versa', () => {
    service.toggleTheme();
    expect(service.theme()).toBe('light');

    service.toggleTheme();
    expect(service.theme()).toBe('dark');
  });
});
