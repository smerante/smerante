import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMCheckboxComponentWrapper } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: SMCheckboxComponentWrapper;
  let fixture: ComponentFixture<SMCheckboxComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMCheckboxComponentWrapper ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMCheckboxComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
