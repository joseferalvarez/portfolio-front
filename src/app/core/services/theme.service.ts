import { Injectable, signal, computed } from '@angular/core';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _theme = signal<Theme>('default');
  readonly theme = computed(() => this._theme());

  toggleTheme() {
    this._theme.update((theme) => {
      switch (theme) {
        case 'default':
          if (!window.matchMedia) return 'light';
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
        case 'dark':
          return 'light';
        case 'light':
          return 'dark';
      }
    });
  }
}
