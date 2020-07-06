import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDemoComponent } from './toggle-demo.component';

describe('ToggleDemoComponent', () => {
  let component: ToggleDemoComponent;
  let fixture: ComponentFixture<ToggleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
