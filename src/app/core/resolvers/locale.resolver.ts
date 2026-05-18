import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { LangService } from '@services/lang.service';
import { Lang } from '@models/lang';

export const localeResolver: ResolveFn<Lang> = (route) => {
  const languageService = inject(LangService);
  const language = route.paramMap.get('lang');

  if (!language) languageService.setLang('en');
  languageService.setLang(language as Lang);

  return languageService.lang();
};
