import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMCardsComponent } from './card.component';

describe('SMCardsComponent', () => {
  let component: SMCardsComponent;
  let fixture: ComponentFixture<SMCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
