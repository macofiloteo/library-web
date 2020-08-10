import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-comment-dialog',
  templateUrl: './add-comment.dialog.html',
  styleUrls: ['./add-comment.dialog.scss'],
})
export class AddCommentDialog implements OnInit {
  public addCommentForm: FormGroup;
  public statuses: Array<string>;
  constructor(
    public dialogRef: MatDialogRef<AddCommentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addCommentForm = new FormGroup({
      content: new FormControl(null, [Validators.required]),
      user: new FormControl(null, [Validators.required]),
      book: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.addCommentForm.controls.book.setValue(this.data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
