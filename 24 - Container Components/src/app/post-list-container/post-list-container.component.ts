/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { Post } from '../types/types';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'post-list-container',
  templateUrl: './post-list-container.component.html'
})
export class PostListContainerComponent {
  constructor(private postsService: PostsService) {}

  posts: Array<Post> = this.postsService.getPosts();
}
