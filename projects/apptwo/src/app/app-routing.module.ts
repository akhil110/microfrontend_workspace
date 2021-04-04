import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagefourComponent } from './pagefour/pagefour.component';
import { PagefiveComponent } from './pagefive/pagefive.component';
import { NopageComponent } from './nopage/nopage.component';

const routes: Routes = [
  { path: 'appTwo/pagethree', component: PagethreeComponent },
  { path: 'appTwo/pagefour', component: PagefourComponent },
  { path: 'appTwo/pagefive', component: PagefiveComponent },
  { path: '', redirectTo: 'appTwo/pagefour', pathMatch: 'full' },
  { path: '**', component: NopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
