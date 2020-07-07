import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMModalComponent } from './modal.component';

describe('SMModalComponent', () => {
  let component: SMModalComponent;
  let fixture: ComponentFixture<SMModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
