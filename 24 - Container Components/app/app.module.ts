/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListContainerComponent } from './post-list-container/post-list-container.component';
import { PostsService } from './services/posts.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PostListContainerComponent
  ],
  bootstrap: [AppComponent],
  providers: [PostsService]
})
export class AppModule {}
