import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedbugsComponent } from './assignedbugs.component';

describe('AssignedbugsComponent', () => {
  let component: AssignedbugsComponent;
  let fixture: ComponentFixture<AssignedbugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedbugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedbugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
