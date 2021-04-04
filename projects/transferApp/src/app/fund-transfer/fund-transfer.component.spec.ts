import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransferComponent } from './fund-transfer.component';

describe('FundTransferComponent', () => {
  let component: FundTransferComponent;
  let fixture: ComponentFixture<FundTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
