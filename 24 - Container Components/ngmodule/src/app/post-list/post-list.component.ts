/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Component, Input } from '@angular/core';

import { Post } from '../types/types';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {
  @Input() posts: Array<Post>;
}
