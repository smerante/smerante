import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMToggleComponentWrapper } from './toggle.component';

describe('SMToggleComponentWrapper', () => {
  let component: SMToggleComponentWrapper;
  let fixture: ComponentFixture<SMToggleComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMToggleComponentWrapper ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMToggleComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
