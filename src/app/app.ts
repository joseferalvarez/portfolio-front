import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from '@layout/navigation/navigation';
import { ThemeService } from '@services/theme.service';
import { ToastComponent } from '@layout/toast/toast.component';
import { ToastService } from '@services/toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, ToastComponent],
  templateUrl: './app.html',
})
export class App {
  themeService = inject(ThemeService);
  theme = computed(() => this.themeService.theme());
  toggleTheme = () => this.themeService.toggleTheme();

  toastService = inject(ToastService);

  sendToast = (message: string) => this.toastService.sendToast(message);
}
