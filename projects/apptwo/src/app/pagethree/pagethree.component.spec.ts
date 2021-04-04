import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagethreeComponent } from './pagethree.component';

describe('PagethreeComponent', () => {
  let component: PagethreeComponent;
  let fixture: ComponentFixture<PagethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
