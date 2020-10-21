import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportersignupComponent } from './reportersignup.component';

describe('ReportersignupComponent', () => {
  let component: ReportersignupComponent;
  let fixture: ComponentFixture<ReportersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
