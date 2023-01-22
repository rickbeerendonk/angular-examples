import { Story, Meta } from '@storybook/angular';
import { EditComponent } from './edit.component';

export default {
  title: 'Components/Edit',
  component: EditComponent,
  argTypes: {
    value: { control: 'input' }
  }
} as Meta;

const Template: Story<EditComponent> = (args: EditComponent) => ({
  props: args
});

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'Angular'
};
