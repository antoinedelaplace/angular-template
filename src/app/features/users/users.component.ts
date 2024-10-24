import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators
} from '@angular/forms';

import { Store } from '@ngrx/store';

import { selectAllUsers } from './store';
import { addUser } from './store/user.actions';
import { User } from './store/user.model';

import { NotificationService } from '../../core/notification/notification.service';

@Component({
	selector: 'app-users',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './users.component.html'
})
export class UsersComponent {
	public users = signal<User[]>([]);
	public userForm: FormGroup<{
		name: FormControl<string>;
		email: FormControl<string>;
	}>;

	public constructor(
		private store: Store,
		private fb: FormBuilder,
		private notificationService: NotificationService
	) {
		this.userForm = this.fb.nonNullable.group({
			name: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]]
		});
		this.store.select(selectAllUsers).subscribe(users => this.users.set(users));
	}

	public addUser(): void {
		if (this.userForm.valid) {
			this.store.dispatch(
				addUser({
					user: { ...this.userForm.getRawValue(), id: Math.random().toString() }
				})
			);
			this.showSuccessNotification();
			this.userForm.reset();
		} else {
			this.showErrorNotification();
		}
	}

	public showSuccessNotification(): void {
		this.notificationService.showNotification(
			'User have been added!',
			'success'
		);
	}

	public showErrorNotification(): void {
		this.notificationService.showNotification('Form is not valid', 'warning');
	}
}
