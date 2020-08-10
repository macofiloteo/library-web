import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss'],
})
export class CardBookComponent implements OnInit {
  @Input() book;
  constructor() {}

  ngOnInit(): void {}
}
