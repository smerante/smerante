import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSideNavComponent } from './side-nav.component';

describe('SMSideNavComponent', () => {
  let component: SMSideNavComponent;
  let fixture: ComponentFixture<SMSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
