import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMTabComponent } from './tab.component';

describe('TabComponent', () => {
  let component: SMTabComponent;
  let fixture: ComponentFixture<SMTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
