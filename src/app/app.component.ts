import { Component, OnInit } from '@angular/core';
import { PostListService } from './services/post-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  post: any = [];
  id!: string;

  list: any = [];

  constructor(private postService: PostListService) {}

  ngOnInit() {
    this.postService.getPost().subscribe((data) => {
      this.post = data;
    });
  }
  onDisplay(data: any) {
    console.log(data);
  }
}
