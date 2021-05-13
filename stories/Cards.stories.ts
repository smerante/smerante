// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SMCardsComponent, SMCardsBodyComponent, SMCardsFooterComponent, SMCardsHeaderComponent } from 'components';
import { moduleMetadata } from '@storybook/angular';
export default {
  title: 'smerante Components/Cards',
  component: SMCardsComponent,
  argTypes: {
    placement: {control: 'text'},
  },
  decorators: [
    moduleMetadata({
      declarations: [SMCardsComponent,
        SMCardsBodyComponent,
        SMCardsFooterComponent,
        SMCardsHeaderComponent],
    })
  ],
} as Meta;

const Template: Story<SMCardsComponent> = (args: SMCardsComponent) => ({
  props: args,
  template: `
  <sm-card placement="${args.placement}" imgSrc="http://robertwimer.com/wp-content/uploads/2018/06/Matrix-Code.jpg">
    <card-header>
      Placement ${args.placement}
    </card-header>
    <card-body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo
        consequat.
      </p>
    </card-body>
    <card-footer>
      <a class="card-link" target="_blank" href="https://github.com/smerante/">GitHub</a>
      <a class="card-link" target="_blank" href="https://bitbucket.org/Sammer95/">Bitbucket</a>
      <a class="card-link" target="_blank" href="https://www.linkedin.com/in/sam-merante/">Linked In</a>
    </card-footer>
  </sm-card>`,
});

export const Default = Template.bind(this);
Default.args = {
  placement: 'Top'
}
Default.parameters = {
  docs: { 
    source: {
      code: `<sm-card placement="top" imgSrc="http://robertwimer.com/wp-content/uploads/2018/06/Matrix-Code.jpg">
  <card-header>
    Placement top
  </card-header>
  <card-body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo
      consequat.
    </p>
  </card-body>
  <card-footer>
    <a class="card-link" target="_blank" href="https://github.com/smerante/">GitHub</a>
    <a class="card-link" target="_blank" href="https://bitbucket.org/Sammer95/">Bitbucket</a>
    <a class="card-link" target="_blank" href="https://www.linkedin.com/in/sam-merante/">Linked In</a>
  </card-footer>
</sm-card>`
    }
  }
}
export const Bottom = Template.bind(this,{placement: 'bottom'});
Bottom.parameters = {
  docs: { 
    source: {
      code: `<sm-card placement="top" imgSrc="http://robertwimer.com/wp-content/uploads/2018/06/Matrix-Code.jpg">
  <card-header>
    Placement top
  </card-header>
  <card-body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo
      consequat.
    </p>
  </card-body>
  <card-footer>
    <a class="card-link" target="_blank" href="https://github.com/smerante/">GitHub</a>
    <a class="card-link" target="_blank" href="https://bitbucket.org/Sammer95/">Bitbucket</a>
    <a class="card-link" target="_blank" href="https://www.linkedin.com/in/sam-merante/">Linked In</a>
  </card-footer>
</sm-card>`
    }
  }
}
export const Left = Template.bind(this,{placement: 'left'});
Left.parameters = {
  docs: { 
    source: {
      code: `<sm-card placement="left" imgSrc="http://robertwimer.com/wp-content/uploads/2018/06/Matrix-Code.jpg">
  <card-header>
    Placement left
  </card-header>
  <card-body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo
      consequat.
    </p>
  </card-body>
  <card-footer>
    <a class="card-link" target="_blank" href="https://github.com/smerante/">GitHub</a>
    <a class="card-link" target="_blank" href="https://bitbucket.org/Sammer95/">Bitbucket</a>
    <a class="card-link" target="_blank" href="https://www.linkedin.com/in/sam-merante/">Linked In</a>
  </card-footer>
</sm-card>`
    }
  }
}
export const Right = Template.bind(this,{placement: 'right'});
Right.parameters = {
  docs: { 
    source: {
      code: `<sm-card placement="right" imgSrc="http://robertwimer.com/wp-content/uploads/2018/06/Matrix-Code.jpg">
  <card-header>
    Placement right
  </card-header>
  <card-body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo
      consequat.
    </p>
  </card-body>
  <card-footer>
    <a class="card-link" target="_blank" href="https://github.com/smerante/">GitHub</a>
    <a class="card-link" target="_blank" href="https://bitbucket.org/Sammer95/">Bitbucket</a>
    <a class="card-link" target="_blank" href="https://www.linkedin.com/in/sam-merante/">Linked In</a>
  </card-footer>
</sm-card>`
    }
  }
}