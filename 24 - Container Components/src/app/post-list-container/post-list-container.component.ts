/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Component, inject, signal } from '@angular/core';

import { Post } from '../types/types';
import { PostsService } from '../services/posts.service';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'post-list-container',
  imports: [PostListComponent],
  templateUrl: './post-list-container.component.html'
})
export class PostListContainerComponent {
  private readonly postsService = inject(PostsService);
  posts = signal<Array<Post>>([]);

  constructor() {
    this.posts.set(this.postsService.getPosts());
  }
}
