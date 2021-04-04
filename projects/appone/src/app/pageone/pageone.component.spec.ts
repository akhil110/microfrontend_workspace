import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageoneComponent } from './pageone.component';

describe('PageoneComponent', () => {
  let component: PageoneComponent;
  let fixture: ComponentFixture<PageoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
