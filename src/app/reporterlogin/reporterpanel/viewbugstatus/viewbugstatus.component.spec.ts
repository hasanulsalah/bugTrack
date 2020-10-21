import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbugstatusComponent } from './viewbugstatus.component';

describe('ViewbugstatusComponent', () => {
  let component: ViewbugstatusComponent;
  let fixture: ComponentFixture<ViewbugstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbugstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbugstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
