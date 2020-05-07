import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaDemoComponent } from './cta-demo.component';

describe('CtaDemoComponent', () => {
  let component: CtaDemoComponent;
  let fixture: ComponentFixture<CtaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
