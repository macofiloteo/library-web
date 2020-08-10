import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookDialog } from './add-book.dialog';

describe('DialogAddBookDialog', () => {
  let component: AddBookDialog;
  let fixture: ComponentFixture<AddBookDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
