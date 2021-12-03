import { Story, Meta } from '@storybook/angular/types-6-0';
import { EditComponent } from './edit.component';

export default {
  title: 'Group2/Edit',
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
