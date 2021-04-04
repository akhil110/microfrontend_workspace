import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'sideApp/home', component: HomeComponent },
      { path: 'sideApp/details', component: DetailsComponent }
      ], { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
