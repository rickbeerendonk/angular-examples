import { Story, Meta } from '@storybook/angular';
import { GreetingComponent } from './greeting.component';

export default {
  title: 'Components/Greeting',
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
