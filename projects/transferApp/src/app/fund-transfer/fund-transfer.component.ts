import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

  payee() {
    this.router.navigate(['transfer/payee']);
  }

}
