import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

  funds() {
    this.router.navigate(['transfer/funds']);
  }

}
