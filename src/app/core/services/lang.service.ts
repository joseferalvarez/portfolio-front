import { Injectable, computed, signal } from '@angular/core';
import { Lang } from '../models/lang';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private readonly _lang = signal<Lang>('en');

  readonly lang = computed(() => this._lang());

  setLang(lang: Lang) {
    if (!['en', 'es'].includes(lang)) lang = 'en';
    else this._lang.set(lang);
  }
}
