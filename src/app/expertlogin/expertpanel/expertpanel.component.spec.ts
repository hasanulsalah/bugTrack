import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertpanelComponent } from './expertpanel.component';

describe('ExpertpanelComponent', () => {
  let component: ExpertpanelComponent;
  let fixture: ComponentFixture<ExpertpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
