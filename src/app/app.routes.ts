import { Routes } from '@angular/router';
import { Home } from '@pages/home/home.component';
import { Contact } from '@pages/contact/contact.component';
import { localeResolver } from '@resolvers/locale.resolver';
import { localeGuard } from '@guards/locale.guard';

export const routes: Routes = [
  {
    path: ':lang',
    canActivate: [localeGuard],
    resolve: {
      lang: localeResolver,
    },
    children: [
      { path: '', component: Home },
      { path: 'contact', component: Contact },
    ],
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
