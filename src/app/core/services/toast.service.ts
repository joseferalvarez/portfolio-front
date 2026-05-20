import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  message = signal('¡Message sent successfully! I will get back to you as soon as possible.');

  sendToast(message: string) {
    this.message.set(message);

    setTimeout(() => {
      this.message.set('');
    }, 3000);
  }
}
