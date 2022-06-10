import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostListService } from './services/post-list.service';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, PostComponent, CommentsComponent],
  bootstrap: [AppComponent],
  providers: [PostListService],
})
export class AppModule {}
