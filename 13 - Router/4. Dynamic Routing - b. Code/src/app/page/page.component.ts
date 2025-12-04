/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit, OnDestroy {
  id!: number;

  paramsSubscription!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id')!; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
