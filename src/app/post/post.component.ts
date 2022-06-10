import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostListService } from '../services/post-list.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() id!: string;
  @Input() body!: string;

  comment: string;
  cid!: string;
  list: any = [];

  @Output() clickPost: EventEmitter<any> = new EventEmitter();

  constructor(private postService: PostListService) {}

  ngOnInit() {}

  onClicking() {
    this.clickPost.emit(this.id);
    this.comment = this.id;
    this.postService.getPostId(this.id).subscribe((data) => {
      this.list = data;
    });
  }
}
