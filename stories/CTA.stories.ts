// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SMButtonComponent } from 'components';
import { moduleMetadata } from '@storybook/angular';
export default {
  title: 'smerante Components/CTA',
  component: SMButtonComponent,
  argTypes: {
    content: {control: 'text'},
    field_id: { control: 'text' },
    type: {control: {type: 'select', labels: {secondary: 'secondary', tertiary: 'tertiary'}}},
  },
  args: {
  content: "Click Me"
  },
  decorators: [
    moduleMetadata({
      declarations: [SMButtonComponent],
    })
  ],
} as Meta;

const Template: Story<SMButtonComponent> = (args: any) => ({
  props: args,
  template: `<sm-button type="${args.type}">${args.content}</sm-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  field_id: 'primary-CTA',
  type: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  field_id: 'secondary-CTA',
  type: 'secondary'
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  field_id: 'tertiary-CTA',
  type: 'tertiary'
};
