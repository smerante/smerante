// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {
  SMTabsComponent, SMTabContentComponent, SMButtonComponent, SMInputComponent, SMTabComponent
} from 'components';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
export default {
  title: 'smerante Components/Tabs',
  component: SMTabsComponent
  ,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [SMTabsComponent, SMTabComponent, SMTabContentComponent, SMButtonComponent, SMInputComponent],
      imports: [FormsModule]
    })
  ],
} as Meta;

const Template: Story<SMTabsComponent
> = (args: SMTabsComponent
) => ({
  props: args,
  template: `<sm-tabs>
  <sm-tab>
    Tab 1
  </sm-tab>
  <sm-tab>
    Tab 2
  </sm-tab>
  <sm-tab>
    Tab 3
  </sm-tab>
  <sm-tab>
    Tab 4
  </sm-tab>
  <sm-tab-content>
    <span class="text-center">Tab content 1: Really really long long long long long long text</span>
    <sm-input field_id="username" label="Username"></sm-input>
    <sm-input type="password" label="Password"></sm-input>
    <sm-button field_id="primary">Tab 1</sm-button>
    <sm-button type="secondary">Tab 1</sm-button>
    <sm-button type="tertiary">Tab 1</sm-button>
  </sm-tab-content>
  <sm-tab-content>
    <span class="text-center">tab content 2</span>
    <sm-button field_id="primary">Tab 2</sm-button>
    <sm-button type="secondary">Tab 2</sm-button>
    <sm-button type="tertiary">Tab 2</sm-button>
  </sm-tab-content>
  <sm-tab-content>
    <span class="text-center">tab content 3</span>
    <sm-button field_id="primary">Tab 3</sm-button>
    <sm-button type="secondary">Tab 3</sm-button>
    <sm-button type="tertiary">Tab 3</sm-button>
  </sm-tab-content>
  <sm-tab-content>
    <span class="text-center">tab content 4</span>
    <sm-button field_id="primary">Tab 4</sm-button>
    <sm-button type="secondary">Tab 4</sm-button>
    <sm-button type="tertiary">Tab 4</sm-button>
  </sm-tab-content>
</sm-tabs>`,
});

export const Default = Template.bind(this);
Default.parameters = {
  docs: {
    source: {
      code: `<sm-tabs>
  <sm-tab>
    Tab 1
  </sm-tab>
  <sm-tab>
    Tab 2
  </sm-tab>
  <sm-tab>
    Tab 3
  </sm-tab>
  <sm-tab>
    Tab 4
  </sm-tab>
  <sm-tab-content>
    <span class="text-center">Tab content 1: Really really long long long long long long text</span>
    <sm-input field_id="username" label="Username"></sm-input>
    <sm-input type="password" label="Password"></sm-input>
    <sm-button field_id="primary">Tab 1</sm-button>
    <sm-button type="secondary">Tab 1</sm-button>
    <sm-button type="tertiary">Tab 1</sm-button>
  </sm-tab-content>
  <sm-tab-content>
    <span class="text-center">tab content 2</span>
    <sm-button field_id="primary">Tab 2</sm-button>
    <sm-button type="secondary">Tab 2</sm-button>
    <sm-button type="tertiary">Tab 2</sm-button>
  </sm-tab-content>
  <sm-tab-content>
    <span class="text-center">tab content 3</span>
    <sm-button field_id="primary">Tab 3</sm-button>
    <sm-button type="secondary">Tab 3</sm-button>
    <sm-button type="tertiary">Tab 3</sm-button>
  </sm-tab-content>
  <sm-tab-content>
    <span class="text-center">tab content 4</span>
    <sm-button field_id="primary">Tab 4</sm-button>
    <sm-button type="secondary">Tab 4</sm-button>
    <sm-button type="tertiary">Tab 4</sm-button>
  </sm-tab-content>
</sm-tabs>`
    }
  }
}