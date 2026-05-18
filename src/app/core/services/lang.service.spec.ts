import { TestBed } from '@angular/core/testing';
import { LangService } from './lang.service';
import { Lang } from '../models/lang';

describe('Language Service', () => {
  let service: LangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with default values', () => {
    expect(service.lang()).toBe('en');
  });

  it('should change the language to es', () => {
    service.setLang('es');
    expect(service.lang()).toBe('es');
  });

  it("if language is not 'en' or 'es' should be set to 'en'", () => {
    service.setLang('fr' as Lang);
    expect(service.lang()).toBe('en');
  });
});
