import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { NopageComponent } from './nopage/nopage.component';

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
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
    const appOne = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-one', appOne);
  }
}
