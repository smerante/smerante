import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMTabsComponent } from './tabs.component';

describe('SMTabsComponent', () => {
  let component: SMTabsComponent;
  let fixture: ComponentFixture<SMTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
