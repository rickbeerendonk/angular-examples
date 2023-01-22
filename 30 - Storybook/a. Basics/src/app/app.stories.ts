import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { EditComponent } from './edit/edit.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AppComponent } from './app.component';

export default {
  title: 'Containers/App',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [EditComponent, GreetingComponent],
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {};
