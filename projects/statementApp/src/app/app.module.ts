import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewStatementComponent } from './view-statement/view-statement.component';
import { DetailStatementComponent } from './detail-statement/detail-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewStatementComponent,
    DetailStatementComponent
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
    const statementApp = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('statement-app', statementApp);
  }
}
