import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMTabContentComponent } from './tab-content.component';

describe('SMTabContentComponent', () => {
  let component: SMTabContentComponent;
  let fixture: ComponentFixture<SMTabContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMTabContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
