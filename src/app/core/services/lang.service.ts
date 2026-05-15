import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private readonly _lang = signal<Lang>('en');

  readonly lang = computed(() => this._lang());

  setLang(lang: Lang) {
    this._lang.set(lang);
  }
}
