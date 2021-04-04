import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class AppComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.router.initialNavigation();
    this.router.navigate(['transfer/funds']);
  }
}
