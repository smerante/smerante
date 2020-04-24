import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: SMButtonComponent;
  let fixture: ComponentFixture<SMButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
