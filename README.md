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
  $sm-primary: #027fe6;
  $sm-primary-hover: #006dc7;
  $sm-primary-focus: #0058a0;
  $sm-primary-active: #004c8a;
  $sm-secondary: #ffffff;
  $sm-secondary-hover: #006dc7;
  $sm-secondary-focus: #0058a0;
  $sm-secondary-active: #004c8a;
  $text-primary: #ffffff;
  $text-secondary: #027fe6;
  $border-primary: #888888;

  $border-sm: 1px solid;

  $sp-xxs: 4px;
  $sp-xs: 8px;
  $sp-sm: 16px;
  $sp-b: 24px;

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
```






