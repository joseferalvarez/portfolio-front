import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

const allowedLangs = ['en', 'es'];

export const localeGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const lang = route.paramMap.get('lang') || 'en';

  if (!allowedLangs.includes(lang)) router.navigate([`/${allowedLangs[0]}`]);

  return true;
};
