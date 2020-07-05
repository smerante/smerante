import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMRadioButton, SMRadioGroupComponent } from './radio.component';

describe('SMRadioButton', () => {
  let component: SMRadioButton;
  let fixture: ComponentFixture<SMRadioButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SMRadioGroupComponent, SMRadioButton],
      providers: [SMRadioGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMRadioButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
