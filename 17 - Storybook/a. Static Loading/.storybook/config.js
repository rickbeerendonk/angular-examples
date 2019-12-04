import { addDecorator, configure } from '@storybook/angular';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
 
// TODO: Throws runtime error
//addDecorator(withInfo);

addDecorator(withKnobs);

function loadStories() {
  require('../stories/index.ts');
  // You can require as many stories as you need.
}

configure(loadStories, module);
