/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { PostListContainerComponent } from './post-list-container/post-list-container.component';

@Component({
  selector: 'app',
  imports: [PostListContainerComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
