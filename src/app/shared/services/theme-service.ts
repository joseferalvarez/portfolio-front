import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  theme = signal<Theme>("default");

  toggleTheme() {
    this.theme.update((theme) => {
      switch (theme) {
        case "default":
          return window.matchMedia(
            '(prefers-color-scheme: dark)'
          ).matches ? "light" : "dark";
        case "dark":
          return "light";
        case "light":
          return "dark";
      }
    })
  }
}