import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStatementComponent } from './detail-statement.component';

describe('DetailStatementComponent', () => {
  let component: DetailStatementComponent;
  let fixture: ComponentFixture<DetailStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
