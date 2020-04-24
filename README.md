# smerante/components: Reusable common components library

### npm package [@smerante/components](https://www.npmjs.com/package/@smerante/components)

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

  /* Import core components styles */
  @import '~@smerante/components/styles/core';
```

## 4. Import the Roboto font family from Google Fonts
```html
<!-- Include this in your root html html head tag-->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
```