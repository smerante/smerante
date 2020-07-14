import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMDrawerComponent } from './drawer.component';

describe('SMDrawerComponent', () => {
  let component: SMDrawerComponent;
  let fixture: ComponentFixture<SMDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
