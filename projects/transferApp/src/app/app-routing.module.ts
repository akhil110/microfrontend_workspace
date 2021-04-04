import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'transfer/funds', component: FundTransferComponent },
      { path: 'transfer/payee', component: AddPayeeComponent },
      { path: '**', component: FundTransferComponent }
      ], { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
