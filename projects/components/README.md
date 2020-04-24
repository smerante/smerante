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

  /* Import core components styles */
  @import '~@smerante/components/styles/core';
```