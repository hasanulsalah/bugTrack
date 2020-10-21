import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterbugdetailComponent } from './reporterbugdetail.component';

describe('ReporterbugdetailComponent', () => {
  let component: ReporterbugdetailComponent;
  let fixture: ComponentFixture<ReporterbugdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterbugdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterbugdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
