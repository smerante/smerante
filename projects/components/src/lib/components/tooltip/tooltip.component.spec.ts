import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMTooltipComponent } from './tooltip.component';

describe('SMTooltipComponent', () => {
  let component: SMTooltipComponent;
  let fixture: ComponentFixture<SMTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
