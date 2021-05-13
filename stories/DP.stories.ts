// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DatePickerCalendarComponent, SMDatePickerModule} from 'components';
import { moduleMetadata } from '@storybook/angular';
export default {
  title: 'smerante Components/Date Picker',
  component: DatePickerCalendarComponent,
  argTypes: {
    date: {control: 'date'},
  },
  decorators: [
    moduleMetadata({
      imports:[SMDatePickerModule]
    })
  ],
} as Meta;

const Template: Story<DatePickerCalendarComponent> = (args: DatePickerCalendarComponent) => ({
  props: args,
  template: `<sm-date-picker [range]="${args.range}" [date]="${args.date}"></sm-date-picker>`,
});

export const Default = Template.bind(this);
Default.parameters = {
  docs: { 
    source: {
      code: `<sm-date-picker></sm-date-picker>`
    }
  }
} 
export const Range = Template.bind(this);
Range.args = {
  range: true
}
Range.parameters = {
  docs: { 
    source: {
      code: `<sm-date-picker [range]="true"></sm-date-picker>`
    }
  }
} 