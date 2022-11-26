/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'subpage',
  templateUrl: './subpage.component.html'
})
export class SubpageComponent implements OnInit, OnDestroy {
  id: number;

  subscriberParams: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscriberParams = this.route.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id'); // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.subscriberParams.unsubscribe();
  }
}
