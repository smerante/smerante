// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {
  SMRadioButton, SMRadioGroupComponent
} from 'components';
import { moduleMetadata } from '@storybook/angular';
export default {
  title: 'smerante Components/Radio',
  component: SMRadioGroupComponent
  ,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [SMRadioGroupComponent, SMRadioButton]
    })
  ],
} as Meta;

const Template: Story<SMRadioGroupComponent
> = (args: SMRadioGroupComponent
) => ({
  props: args,
  template: `<sm-radio-group groupLabel="Please select the type of label you like">
  <sm-radio-btn field_id="short" label="Short">
    <input type="radio" field_id="short" name="gender" value="short" />
  </sm-radio-btn>
  <sm-radio-btn field_id="long"
    label="I like super super super super super super super super super super super super long labels">
    <input type="radio" field_id="long" name="gender" value="long" />
  </sm-radio-btn>
  <sm-radio-btn field_id="disabled" label="Disabled labels" [disabled]="true">
    <input type="radio" field_id="disabled" name="gender" disabled value="disabled" />
  </sm-radio-btn>
</sm-radio-group>`,
});

export const Default = Template.bind(this);
Default.parameters = {
  docs: {
    source: {
      code: `<sm-radio-group groupLabel="Please select the type of label you like">
  <sm-radio-btn field_id="short" label="Short">
    <input type="radio" field_id="short" name="gender" value="short" />
  </sm-radio-btn>
  <sm-radio-btn field_id="long"
    label="I like super super super super super super super super super super super super long labels">
    <input type="radio" field_id="long" name="gender" value="long" />
  </sm-radio-btn>
  <sm-radio-btn field_id="disabled" label="Disabled labels" [disabled]="true">
    <input type="radio" field_id="disabled" name="gender" disabled value="disabled" />
  </sm-radio-btn>
</sm-radio-group>`
    }
  }
}