import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.scss'],
})
export class CardCommentComponent implements OnInit {
  @Input() comment;
  constructor() {}

  ngOnInit(): void {
    console.log(this.comment);
  }
}
