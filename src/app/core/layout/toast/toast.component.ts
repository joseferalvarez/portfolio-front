import { Component, inject } from '@angular/core';
import { LucideBadgeCheck } from '@lucide/angular';
import { ToastService } from '@services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  imports: [LucideBadgeCheck],
})
export class ToastComponent {
  private readonly _toastService = inject(ToastService);
  readonly message = this._toastService.message;
}
