// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {
  SMModalComponent, SMRadioButton, SMRadioGroupComponent, SMButtonComponent, SMCheckboxComponent, SMCheckboxComponentWrapper, SMInputComponent, SMModalModule
} from 'components';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
export default {
  title: 'smerante Components/Modal',
  component: SMModalComponent
  ,
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [SMButtonComponent, SMInputComponent, SMRadioButton, SMRadioGroupComponent, SMCheckboxComponent, SMCheckboxComponentWrapper],
      imports: [SMModalModule, FormsModule],
    })
  ],
} as Meta;

const Template: Story<SMModalComponent
> = (args: SMModalComponent
) => ({
  props: args,
  template: `<sm-button (click)="modal.open();">Open Modal</sm-button>
<sm-modal #modal>
  <sm-modal-header>Sign Up Modal Example</sm-modal-header>
  <sm-modal-body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <sm-input label="User name" field_id="modalName" aria-label="Please enter your user name to register" ></sm-input>
        </div>
        <div class="col-sm-6">
          <sm-input label="User name" field_id="modalPW" type="password"
            aria-label="Please enter your password to register" ></sm-input>
        </div>
      </div>

      <sm-radio-group groupLabel="Please select the type of label you like">
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
      </sm-radio-group>

      <div class="row">
        <div class="col-sm-12 pt-3 pb-3">
          <sm-checkbox label="Agree to terms and conditions" field_id="modalCheckbox">
            <input sm-checkbox field_id="modalCheckbox" type="checkbox"
              aria-label="Please check here to agree to terms and conditions" />
          </sm-checkbox>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-5">
          <sm-button class="modalButton" (click)="modal.close();">Save</sm-button>
        </div>
        <div class="col-sm-5">
          <sm-button class="modalButton" (click)="modal.close();">Cancel</sm-button>
        </div>
      </div>
    </div>
  </sm-modal-body>
  <sm-modal-footer style="min-height: 32px">
    <div class="container" style="padding: 16px 0px">
      <div class="row">
        <div class="col-sm-8 text-center">
          <a class="card-link" target="_blank" href="https://github.com/smerante/">GitHub</a>
          <a class="card-link" target="_blank" href="https://bitbucket.org/smmer95/">Bitbucket</a>
          <a class="card-link" target="_blank" href="https://www.linkedin.com/in/sm-merante/">Linked In</a>
        </div>
        <div class="col-sm-2 text-center">
          <span class="date">05-11-2021</span>
        </div>
      </div>
    </div>
  </sm-modal-footer>
</sm-modal>`,
});

export const Default = Template.bind(this);
Default.parameters = {
  docs: {
    source: {
      code: `<sm-button (click)="modal.open();">Open Modal</sm-button>
<sm-modal #modal>
  <sm-modal-header>Sign Up Modal Example</sm-modal-header>
  <sm-modal-body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <sm-input label="User name" field_id="modalName" aria-label="Please enter your user name to register" ></sm-input>
        </div>
        <div class="col-sm-6">
          <sm-input label="User name" field_id="modalPW" type="password"
            aria-label="Please enter your password to register" ></sm-input>
        </div>
      </div>

      <sm-radio-group groupLabel="Please select the type of label you like">
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
      </sm-radio-group>

      <div class="row">
        <div class="col-sm-12 pt-3 pb-3">
          <sm-checkbox label="Agree to terms and conditions" field_id="modalCheckbox">
            <input sm-checkbox field_id="modalCheckbox" type="checkbox"
              aria-label="Please check here to agree to terms and conditions" />
          </sm-checkbox>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-5">
          <sm-button class="modalButton" (click)="modal.close();">Save</sm-button>
        </div>
        <div class="col-sm-5">
          <sm-button class="modalButton" (click)="modal.close();">Cancel</sm-button>
        </div>
      </div>
    </div>
  </sm-modal-body>
  <sm-modal-footer style="min-height: 32px">
    <div class="container" style="padding: 16px 0px">
      <div class="row">
        <div class="col-sm-8 text-center">
          <a class="card-link" target="_blank" href="https://github.com/smerante/">GitHub</a>
          <a class="card-link" target="_blank" href="https://bitbucket.org/smmer95/">Bitbucket</a>
          <a class="card-link" target="_blank" href="https://www.linkedin.com/in/sm-merante/">Linked In</a>
        </div>
        <div class="col-sm-2 text-center">
          <span class="date">05-11-2021</span>
        </div>
      </div>
    </div>
  </sm-modal-footer>
</sm-modal>`
    }
  }
}