import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from '@layout/navigation/navigation';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  templateUrl: './app.html',
})
export class App {
  themeService = inject(ThemeService);
  theme = computed(() => this.themeService.theme());
  toggleTheme = () => this.themeService.toggleTheme();
}
