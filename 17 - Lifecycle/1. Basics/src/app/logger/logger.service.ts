/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private sanitizeHTML(html: string) {
    const temp = document.createElement('div');
    temp.textContent = html;
    return temp.innerHTML;
  }

  private getDOM() {
    const elem = document.querySelector('app');
    return elem ? this.sanitizeHTML(elem.innerHTML) : null;
  }

  private eventNo = 1;

  public logEvent(hook: string, props: any, state: any) {
    const tbody = document.querySelector('#result tbody');
    if (tbody) {
      tbody.innerHTML += `
        <tr>
          <td>${this.eventNo++}</td>
          <td>${hook}</td>
          <td>${JSON.stringify(props)}</td>
          <td>${JSON.stringify(state)}</td>
          <td>${this.getDOM()}</td>
        </tr>
      `;
    }
  }
}
