import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBookDialog } from './checkout-book.dialog';

describe('CheckoutBookDialog', () => {
  let component: CheckoutBookDialog;
  let fixture: ComponentFixture<CheckoutBookDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutBookDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutBookDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
