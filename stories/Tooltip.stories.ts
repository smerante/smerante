import { Story, Meta } from '@storybook/angular/types-6-0';
import {
  SMTooltipComponent
} from 'components';
import { moduleMetadata } from '@storybook/angular';
export default {
  title: 'smerante Components/Tooltip',
  component: SMTooltipComponent
  ,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [SMTooltipComponent]
    })
  ],
} as Meta;

const Template: Story<SMTooltipComponent
> = (args: SMTooltipComponent
) => ({
  props: args,
  template: `
<div style="margin-bottom: 128px"> </div> 
<sm-tooltip tooltipLabel="Default tooltip" tooltipAriaLabel="This is a default tooltip">
  Lorem ipsum dolor sit amet
</sm-tooltip>
<sm-tooltip tooltipAriaLabel="This is a tooltip with a long wrapping label"
  tooltipLabel="Super long long long long long long wrapping label">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore
</sm-tooltip>`,
});

export const Default = Template.bind(this);
Default.parameters = {
  docs: {
    source: {
      code: `<sm-tooltip tooltipLabel="Default tooltip" tooltipAriaLabel="This is a default tooltip">
  Lorem ipsum dolor sit amet
</sm-tooltip>
<sm-tooltip tooltipAriaLabel="This is a tooltip with a long wrapping label"
  tooltipLabel="Super long long long long long long wrapping label">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore
</sm-tooltip>`
    }
  }
}
