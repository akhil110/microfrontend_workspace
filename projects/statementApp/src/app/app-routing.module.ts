import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewStatementComponent } from './view-statement/view-statement.component';
import { DetailStatementComponent } from './detail-statement/detail-statement.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'statement/view', component: ViewStatementComponent },
      { path: 'statement/details', component: DetailStatementComponent },
      { path: '**', component: ViewStatementComponent }
      ], { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
