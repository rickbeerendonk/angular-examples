import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Page2Component } from '../page2/page2.component';

@Injectable({
  providedIn: 'root'
})
export class ChangeGuard implements CanDeactivate<Page2Component> {
  canDeactivate(
    component: Page2Component,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('ChangeGuard#canActivate called');
    return confirm('Do you want to leave?');
  }
}
