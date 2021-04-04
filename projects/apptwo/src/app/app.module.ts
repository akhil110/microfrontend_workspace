import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagefourComponent } from './pagefour/pagefour.component';
import { PagefiveComponent } from './pagefive/pagefive.component';
import { NopageComponent } from './nopage/nopage.component';


@NgModule({
  declarations: [
    AppComponent,
    PagethreeComponent,
    PagefourComponent,
    PagefiveComponent,
    NopageComponent
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
    const appTwo = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-two', appTwo);
  }
}
