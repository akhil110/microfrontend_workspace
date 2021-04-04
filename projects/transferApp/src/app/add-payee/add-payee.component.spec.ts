import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPayeeComponent } from './add-payee.component';

describe('AddPayeeComponent', () => {
  let component: AddPayeeComponent;
  let fixture: ComponentFixture<AddPayeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPayeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
