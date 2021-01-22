import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoinComponent } from './moin/moin.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, MoinComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const moin = createCustomElement(MoinComponent, { injector });
    customElements.define('hi-ho', moin);
  }
}
