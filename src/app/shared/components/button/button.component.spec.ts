import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsButtonComponent } from './button.component';

describe('WsButtonComponent', () => {
	let component: WsButtonComponent;
	let fixture: ComponentFixture<WsButtonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WsButtonComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WsButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
