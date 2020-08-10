import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'checkout-book-dialog',
  templateUrl: './checkout-book.dialog.html',
  styleUrls: ['./checkout-book.dialog.scss'],
})
export class CheckoutBookDialog implements OnInit {
  public checkoutBookForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<CheckoutBookDialog>) {
    this.checkoutBookForm = new FormGroup({
      checkedOutBy: new FormControl(null, [Validators.required]),
      willReturn: new FormControl(false, [Validators.required]),
    });
  }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
