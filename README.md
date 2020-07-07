# Reusable common components library
Visit the [component explorer](https://smerante.github.io/smerante/#/input) to see code usage and examples.

## 1. Install the library
    % npm i @smerante/components
    
## 2. Import the Main library module into your app
```js
import { SMComponentsModule } from '@smerante/components';

@NgModule({
  declarations: [],
  imports: [SMComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## 3. Import the main libraries styles into your app's global style sheet
```scss
  /* Global styles */

  /* Import theme*/
  @import '~@smerante/components/styles/theme';
  
  /* Override default theme variables */

  // color: color(primary);
  $colorTokens: (
  primary: #027fe6,
  primary-hover: #006dc7,
  primary-focus: #0058a0,
  primary-active: #004c8a,
  secondary: #ffffff,
  secondary-hover: #006dc7,
  secondary-focus: #0058a0,
  secondary-active: #004c8a,
  text: #6f6f6f,
  text-light: #8d8383,
  text-primary: #ffffff,
  text-secondary: #027fe6,
  border-primary: #6f6f6f,
  background: #ffffff,
  background-2: #cecece,
  pink: #ff7cf8,
  black: #000000,
  white: #ffffff
);

// border: border(sm);
$borderTokens: (
  sm: 1px solid,
  md: 2px solid,
  lg: 3px solid
);

// Spacing -> padding: sp(b)
$spTokens: (
  xxs: 4px,
  xs: 8px,
  sm: 12px,
  m: 16px,
  b: 24px,
  l: 32px,
  xl: 40px,
  xxl: 48px,
  xxxl: 56px,
  huge: 128px,
  giant: 256px
);


  /* Import core components styles */
  @import '~@smerante/components/styles/core';
```

## 4. Import the Roboto font family from Google Fonts
```html
<!-- Include this in your root html html head tag-->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
```

## 5. Start using the components
[Component explorer](https://smerante.github.io/smerante/#/input)
```html
<!-- Buttons -->
<sm-button>Primary</sm-button>
<sm-button type="secondary">Secondary</sm-button>
<sm-button type="tertiary">Tertiary</sm-button>

<!-- Inputs -->
<sm-input label="Username"></sm-input>
<sm-input type="password" label="Password"></sm-input>

<!-- Tabs -->
<sm-tabs>
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
    <sm-input id="username" label="Username"></sm-input>
    <sm-input type="password" label="Password"></sm-input>
    <sm-button id="primary">Tab 1</sm-button>
    <sm-button type="secondary">Tab 1</sm-button>
    <sm-button type="tertiary">Tab 1</sm-button>
  </sm-tab-content>
  <sm-tab-content>
    <span class="text-center">tab content 2</span>
    <sm-button id="primary">Tab 2</sm-button>
    <sm-button type="secondary">Tab 2</sm-button>
    <sm-button type="tertiary">Tab 2</sm-button>
  </sm-tab-content>
  <sm-tab-content>
    <span class="text-center">tab content 3</span>
    <sm-button id="primary">Tab 3</sm-button>
    <sm-button type="secondary">Tab 3</sm-button>
    <sm-button type="tertiary">Tab 3</sm-button>
  </sm-tab-content>
  <sm-tab-content>
    <span class="text-center">tab content 4</span>
    <sm-button id="primary">Tab 4</sm-button>
    <sm-button type="secondary">Tab 4</sm-button>
    <sm-button type="tertiary">Tab 4</sm-button>
  </sm-tab-content>
  <sm-tab-content>
  </sm-tab-content>
</sm-tabs>

<!-- Cards -->
<sm-card placement="top" imgSrc="http://robertwimer.com/wp-content/uploads/2018/06/Matrix-Code.jpg">
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
</sm-card>

<!-- Radios -->
<sm-radio-group groupLabel="Please select the type of label you like">
  <sm-radio-btn id="short" label="Short">
    <input type="radio" id="short" name="gender" value="short" />
  </sm-radio-btn>
  <sm-radio-btn id="long"
    label="I like super super super super super super super super super super super super long labels">
    <input type="radio" id="long" name="gender" value="long" />
  </sm-radio-btn>
  <sm-radio-btn id="disabled" label="Disabled labels" [disabled]="true">
    <input type="radio" id="disabled" name="gender" disabled value="disabled" />
  </sm-radio-btn>
</sm-radio-group>

<!-- Checkbox -->
<sm-checkbox label="Agree to terms and conditions" field_id="modalCheckbox">
  <input sm-checkbox id="modalCheckbox" type="checkbox"
    aria-label="Please check here to agree to terms and conditions" />
</sm-checkbox>

```

For a list of components and usage please visit the [Component explorer](https://smerante.github.io/smerante/#/input).






