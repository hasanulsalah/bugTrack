import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigexpertComponent } from './configexpert.component';

describe('ConfigexpertComponent', () => {
  let component: ConfigexpertComponent;
  let fixture: ComponentFixture<ConfigexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
