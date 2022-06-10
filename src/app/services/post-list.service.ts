import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostListService {
  private postById = `https://jsonplaceholder.typicode.com/comments?postId=`;
  private post = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(this.post);
  }

  getPostId(id: string) {
    return this.http.get([this.postById, id].join(''));
  }
}
