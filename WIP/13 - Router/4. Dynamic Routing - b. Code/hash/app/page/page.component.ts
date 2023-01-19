/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit, OnDestroy {
  id: number;

  subscriberParams: Subscription;

  constructor(private route: ActivatedRoute) {
    //console.log('constructor');
  }

  ngOnInit() {
    // Is called after the @Input() properties are set.
    // We can do this in the constructor, if we don't use @Input() properties:
    this.subscriberParams = this.route.paramMap.subscribe(paramMap => {
      //console.log('new id:', paramMap.get('id'));
      this.id = +paramMap.get('id'); // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.subscriberParams.unsubscribe();
  }
}
