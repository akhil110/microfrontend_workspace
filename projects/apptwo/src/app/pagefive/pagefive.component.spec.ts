import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefiveComponent } from './pagefive.component';

describe('PagefiveComponent', () => {
  let component: PagefiveComponent;
  let fixture: ComponentFixture<PagefiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagefiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
