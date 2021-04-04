import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefourComponent } from './pagefour.component';

describe('PagefourComponent', () => {
  let component: PagefourComponent;
  let fixture: ComponentFixture<PagefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
