import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private blockToastData: boolean = false;

	get blockToast() {
		return this.blockToastData;
	}

	toasts: any[] = [];

	constructor() { }

	show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
		this.clear();
		if (this.blockToast) return;
		this.toasts.push({ textOrTpl, ...options });
	}

	remove(toast: any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}

	setBlockToastStatus(status: boolean) {
		this.blockToastData = status;
	}
}

