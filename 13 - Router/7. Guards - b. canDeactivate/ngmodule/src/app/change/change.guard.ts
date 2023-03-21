import { Page2Component } from '../page2/page2.component';

export function changeGuard(component: Page2Component) {
  return !component.hasUnsavedChanges || confirm('Do you want to leave?');
}
