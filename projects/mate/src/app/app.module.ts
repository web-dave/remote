import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';

import { MoinComponent } from './moin/moin.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [MoinComponent],
  imports: [BrowserModule],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const moin = createCustomElement(MoinComponent, { injector });
    customElements.define('hi-ho', moin);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {}
}
