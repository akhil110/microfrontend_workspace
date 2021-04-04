import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-statement',
  templateUrl: './detail-statement.component.html',
  styleUrls: ['./detail-statement.component.css']
})
export class DetailStatementComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

  statView() {
    this.router.navigate(['statement/view']);
  }

}
