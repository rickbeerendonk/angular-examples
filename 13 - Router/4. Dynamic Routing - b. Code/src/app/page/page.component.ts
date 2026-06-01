/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  id!: number;

  paramsSubscription!: Subscription;

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id')!; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
