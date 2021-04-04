import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { NopageComponent } from './nopage/nopage.component';

const routes: Routes = [
  /* { path: 'appOne/pageone', component: PageoneComponent },
  { path: 'appOne/pagetwo', component: PagetwoComponent },
  { path: 'appOne/pagethree', component: PagetwoComponent },
  { path: '', redirectTo: 'appOne/pageone', pathMatch: 'full' },
  { path: '**', component: NopageComponent} */
  { path: 'appOne/pageone', component: PageoneComponent },
  { path: 'appOne/pagetwo', component: PagetwoComponent },
  { path: 'appOne/pagethree', component: PagethreeComponent },
  { path: '', redirectTo: 'appOne/pageone', pathMatch: 'full' },
  { path: '**', component: NopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
