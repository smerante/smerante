import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMToggleComponent } from './toggle.component';

describe('SMToggleComponent', () => {
  let component: SMToggleComponent;
  let fixture: ComponentFixture<SMToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
