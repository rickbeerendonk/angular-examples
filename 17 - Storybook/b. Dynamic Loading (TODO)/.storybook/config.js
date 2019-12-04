import { addDecorator, configure } from '@storybook/angular';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
 
// TODO: Throws runtime error
//addDecorator(withInfo);

addDecorator(withKnobs);

// automatically import all files ending in *.stories.ts
const req = require.context('../src/', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
