import { Component, Input, OnDestroy, OnInit, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit, OnDestroy {
  public heading = 'Another Heading';

  constructor(private cd: ChangeDetectorRef) {
  }

  @Input() public authToken: string;

  ngOnInit() {
    window.addEventListener('ce_subApp', this.customEventListenerFunction.bind(this), true);
  }

  customEventListenerFunction(event) {
    this.heading = event.detail.action;
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('ce_subApp', this.customEventListenerFunction, true);
  }

}
