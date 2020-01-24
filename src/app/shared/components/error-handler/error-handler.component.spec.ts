import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlerComponent } from './error-handler.component';
import { ButtonComponent } from '../button/button.component';

describe('ErrorHandlerComponent', () => {
	let component: ErrorHandlerComponent;
	let fixture: ComponentFixture<ErrorHandlerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ErrorHandlerComponent, ButtonComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ErrorHandlerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
