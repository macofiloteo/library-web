import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const locationOne = ['Exactus Office', 'Owner’s Home'];
const locationTwo = ['In The Matrix'];

@Component({
  selector: 'edit-book-dialog',
  templateUrl: './edit-book.dialog.html',
  styleUrls: ['./edit-book.dialog.scss'],
})
export class EditBookDialog implements OnInit {
  public editBookForm: FormGroup;
  public statuses: Array<string>;
  public locations: Array<string>;
  constructor(
    public dialogRef: MatDialogRef<EditBookDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {
    this.editBookForm = new FormGroup({
      author: new FormControl(this.data.author, [Validators.required]),
      title: new FormControl(this.data.title, [Validators.required]),
      location: new FormControl(this.data.location, [Validators.required]),
      owner: new FormControl(this.data.owner, [Validators.required]),
      status: new FormControl(this.data.status, [Validators.required]),
    });

    if (this.data.status === 'Digital Copy') {
      this.locations = locationTwo;
    } else {
      this.locations = locationOne;
    }
    this.statuses = ['Available', 'Damaged', 'Digital Copy'];
  }

  ngOnInit(): void {
    this.editBookForm.controls['status'].valueChanges.subscribe((value) => {
      if (value === 'Digital Copy') {
        this.locations = locationTwo;
        this.editBookForm.controls['location'].setValue('In The Matrix');
      } else {
        this.locations = locationOne;
        this.editBookForm.controls['location'].setValue('Exactus Office');
      }
      console.log(this.editBookForm.value);
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
