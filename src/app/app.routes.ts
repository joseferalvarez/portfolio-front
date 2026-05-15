import { Routes } from '@angular/router';
import { Home } from '@pages/home/home.component';
import { localeResolver } from '@resolvers/locale.resolver';
import { localeGuard } from '@guards/locale.guard';

export const routes: Routes = [
  {
    path: ':lang',
    canActivate: [localeGuard],
    resolve: {
      lang: localeResolver,
    },
    children: [{ path: '', component: Home }],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'en',
  },
  {
    path: '**',
    redirectTo: 'en',
  },
];
