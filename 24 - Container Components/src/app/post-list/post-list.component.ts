/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';

import { Post } from '../types/types';
import { PostComponent } from '../post/post.component';

@Component({
  imports: [PostComponent],
  selector: 'post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {
  posts = input.required<Array<Post>>();
}
