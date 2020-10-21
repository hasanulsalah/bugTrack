import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertcommentComponent } from './expertcomment.component';

describe('ExpertcommentComponent', () => {
  let component: ExpertcommentComponent;
  let fixture: ComponentFixture<ExpertcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
