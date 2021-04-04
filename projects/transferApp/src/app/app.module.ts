import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';

@NgModule({
  declarations: [
    AppComponent,
    FundTransferComponent,
    AddPayeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent
  ]
})

export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const transferApp = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('transfer-app', transferApp);
  }
}
