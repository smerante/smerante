import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: SMInputComponent;
  let fixture: ComponentFixture<SMInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
