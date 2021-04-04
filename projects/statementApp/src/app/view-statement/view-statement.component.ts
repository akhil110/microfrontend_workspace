import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.css']
})
export class ViewStatementComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

  statDetails() {
    this.router.navigate(['statement/details']);
  }

}
