import { Story, Meta } from '@storybook/angular/types-6-0';
import {
  SMToggleComponent, SMInputComponent, SMToggleComponentWrapper
} from 'components';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
export default {
  title: 'smerante Components/Toggle',
  component: SMToggleComponentWrapper
  ,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [SMToggleComponent, SMInputComponent, SMToggleComponentWrapper],
      imports: [FormsModule]
    })
  ],
} as Meta;

const Template: Story<SMToggleComponentWrapper
> = (args: SMToggleComponentWrapper
) => ({
  props: args,
  template: ` <sm-toggle label="Lock Credit Card" field_id="toggle1">
  <input sm-toggle id="toggle1" type="checkbox" role="switch" aria-label="Lock credit card toggle switch" />
</sm-toggle>`,
});

export const Default = Template.bind(this);
Default.parameters = {
  docs: {
    source: {
      code: ` <sm-toggle label="Lock Credit Card" field_id="toggle1">
  <input sm-toggle id="toggle1" type="checkbox" role="switch" aria-label="Lock credit card toggle switch" />
</sm-toggle>`
    }
  }
}
