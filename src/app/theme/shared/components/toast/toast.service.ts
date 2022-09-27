import { EventEmitter, Injectable, Output, TemplateRef } from '@angular/core';
// interface Toast {
//   id: string;
//   delay: number;
// }

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  //  @Output() toggleToast: EventEmitter<Toast> = new EventEmitter();
  constructor() { }

  // toast(event) {
  //   this.toggleToast.emit(event);
  // }

  // Push new Toasts to array with content and options
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
