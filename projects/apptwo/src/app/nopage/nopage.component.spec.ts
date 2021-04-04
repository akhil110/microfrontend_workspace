import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopageComponent } from './nopage.component';

describe('NopageComponent', () => {
  let component: NopageComponent;
  let fixture: ComponentFixture<NopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
