/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId:
    __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit, OnDestroy {
  id: number;

  subscriberParams: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Is called after the @Input() properties are set.
    // We can do this in the constructor, if we don't use @Input() properties:
    this.subscriberParams = this.route.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id'); // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.subscriberParams.unsubscribe();
  }
}
