import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from "./navigation/navigation";
import { ThemeService } from './shared/services/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  templateUrl: './app.html'
})
export class App {
  themeService = inject(ThemeService);
  theme = this.themeService.theme;
  toggleTheme = () => this.themeService.toggleTheme();
}
