import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddPost(): void {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }

}
