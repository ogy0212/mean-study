import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  newPost = 'no content';
  enteredValue: string;

  constructor() { }

  ngOnInit() {
  }

  onAddPost(): void {
    this.newPost = this.enteredValue;
    this.enteredValue = '';
  }

}
