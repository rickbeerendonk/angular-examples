/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'subpage',
  templateUrl: './subpage.component.html'
})
export class SubpageComponent implements OnInit, OnDestroy {
  id!: number;

  subscriberParams!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscriberParams = this.route.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id')!; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.subscriberParams.unsubscribe();
  }
}
