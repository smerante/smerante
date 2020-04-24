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
```css
    /* Global styles */
    @import '~@smerante/components/styles/index';
```