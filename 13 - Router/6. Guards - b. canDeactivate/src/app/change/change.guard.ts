/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Page2Component } from '../page2/page2.component';

export function changeGuard(component: Page2Component) {
  if (component.hasUnsavedChanges) {
    return confirm('You have unsaved changes. Do you want to leave?');
  }
  return true;
}
