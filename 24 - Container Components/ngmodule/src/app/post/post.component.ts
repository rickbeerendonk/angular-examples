/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Component, Input } from '@angular/core';

import { Post } from '../types/types';

@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})
export class PostComponent {
  @Input() post: Post;
}
