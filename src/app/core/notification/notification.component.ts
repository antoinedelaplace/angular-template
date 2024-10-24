import { Component, ComponentRef, Input } from '@angular/core';

import { NotificationService } from './notification.service';

export type NotificationType = 'error' | 'success' | 'warning';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	standalone: true
})
export class NotificationComponent {
	@Input() message!: string;
	@Input() type!: NotificationType;

	public notificationRef!: ComponentRef<NotificationComponent>;

	constructor(private notificationService: NotificationService) {}

	close(): void {
		this.notificationService.closeNotification(this.notificationRef);
	}
}
