import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const locationOne = ['Exactus Office', 'Owner’s Home'];
const locationTwo = ['In The Matrix'];
@Component({
  selector: 'add-book-dialog',
  templateUrl: './add-book.dialog.html',
  styleUrls: ['./add-book.dialog.scss'],
})
export class AddBookDialog implements OnInit {
  public addBookForm: FormGroup;
  public statuses: Array<string>;
  public locations: Array<string>;
  constructor(public dialogRef: MatDialogRef<AddBookDialog>) {
    this.addBookForm = new FormGroup({
      author: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      owner: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
    });

    this.statuses = ['Available', 'Damaged', 'Digital Copy'];
    this.locations = [];
  }

  ngOnInit(): void {
    this.addBookForm.controls['status'].valueChanges.subscribe((value) => {
      if (value === 'Digital Copy') {
        this.locations = locationTwo;
        this.addBookForm.controls['location'].setValue('In The Matrix');
      } else {
        this.locations = locationOne;
        this.addBookForm.controls['location'].setValue('Exactus Office');
      }
      console.log(this.addBookForm.value);
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
