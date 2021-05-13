// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SMCheckboxComponentWrapper, SMCheckboxComponent } from 'components';
import { moduleMetadata } from '@storybook/angular';
export default {
  title: 'smerante Components/Checkbox',
  component: SMCheckboxComponentWrapper,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [SMCheckboxComponentWrapper, SMCheckboxComponent]
    })
  ],
} as Meta;

const Template: Story<SMCheckboxComponentWrapper> = (args: SMCheckboxComponentWrapper) => ({
  props: args,
  template: `<sm-checkbox label="Agree to terms and conditions" field_id="modalCheckbox">
<input sm-checkbox id="modalCheckbox" type="checkbox"
  aria-label="Please check here to agree to terms and conditions" />
</sm-checkbox>
<div style="max-width: 300px">
<sm-checkbox label="This is a super long wrapping label to show placement of checkbox and label when text wraps"
  field_id="checkbox2">
  <input sm-checkbox id="checkbox2" type="checkbox"
    aria-label="Please check here to agree to terms and conditions" />
</sm-checkbox>
</div>
<sm-checkbox label="I am a disabled checkbox" field_id="checkbox3">
<input sm-checkbox id="checkbox3" disabled="true" type="checkbox"
  aria-label="Please check here to agree to terms and conditions" />
</sm-checkbox>`,
});

export const Default = Template.bind(this);
Default.parameters = {
  docs: {
    source: {
      code: `<sm-checkbox label="Agree to terms and conditions" field_id="modalCheckbox">
  <input sm-checkbox id="modalCheckbox" type="checkbox"
    aria-label="Please check here to agree to terms and conditions" />
</sm-checkbox>
<sm-checkbox label="This is a super long wrapping label to show placement of checkbox and label when text wraps"
  field_id="checkbox2">
  <input sm-checkbox id="checkbox2" type="checkbox"
    aria-label="Please check here to agree to terms and conditions" />
</sm-checkbox>
<sm-checkbox label="I am a disabled checkbox" field_id="checkbox3">
  <input sm-checkbox id="checkbox3" disabled="true"
    type="checkbox"
    aria-label="Please check here to agree to terms and conditions" />
</sm-checkbox>`
    }
  }
}