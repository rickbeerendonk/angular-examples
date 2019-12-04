import { storiesOf } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs';

import { GreetingComponent } from '../app/greeting/greeting.component';

storiesOf('GreetingComponent', module)
  .addDecorator(withKnobs)
  .add('without name', () => ({
    component: GreetingComponent,
    props: {
      name: ''
    },
    info: {
      text: `
            Component won't show "Hello !" when there is no name, but instead doesn't show *anything* at all.
          `
    }
  }))
  .add('with name', () => ({
    component: GreetingComponent,
    props: {
      name: 'Storybook'
    }
  }))
  .add('knobs', () => ({
    component: GreetingComponent,
    props: {
      name: text('Name', 'Storybook')
    }
  }));
