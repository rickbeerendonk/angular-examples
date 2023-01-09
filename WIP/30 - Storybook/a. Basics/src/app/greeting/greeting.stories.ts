import { Story, Meta } from '@storybook/angular/types-6-0';
import { GreetingComponent } from './greeting.component';

export default {
  title: 'Group1/Greeting',
  component: GreetingComponent,
  argTypes: {
    name: { control: 'input' }
  }
} as Meta;

const Template: Story<GreetingComponent> = (args: GreetingComponent) => ({
  props: args
});

export const WithName = Template.bind({});
WithName.args = {
  name: 'Angular'
};

export const WithoutName = Template.bind({});
WithoutName.args = {
  name: ''
};
