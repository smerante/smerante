# Reusable common components library

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