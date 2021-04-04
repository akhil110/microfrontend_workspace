import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {

  ce_changeHead() {
    const data = {
      action: 'This heading was changed'
    };

    const event = new CustomEvent('ce_subApp', { detail: data });
    window.dispatchEvent(event);
  }
}
