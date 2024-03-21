import { Component, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

	get blockToast() {
		return this.toastService.blockToast;
	}
	
	constructor(public toastService: ToastService) { }

	ngOnInit(): void {
	}

	isTemplate(toast: any) {
		return toast.textOrTpl instanceof TemplateRef;
	}

}

