import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookDialog } from './edit-book.dialog';

describe('DialogEditBookDialog', () => {
  let component: EditBookDialog;
  let fixture: ComponentFixture<EditBookDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditBookDialog],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
