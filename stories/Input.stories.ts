// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SMInputComponent} from 'components';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
export default {
  title: 'smerante Components/Input',
  component: SMInputComponent,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [SMInputComponent],
      imports: [FormsModule]
    })
  ],
} as Meta;

const Template: Story<SMInputComponent> = (args: SMInputComponent) => ({
  props: args,
  template: `<sm-input field_id="username" label="Username"></sm-input>
  <sm-input type="password" label="Password"></sm-input>`,
});

export const Default = Template.bind(this);
Default.parameters = {
  docs: {
    source: {
      code: `<sm-input field_id="username" label="Username"></sm-input>
<sm-input type="password" label="Password"></sm-input>`
    }
  }
}