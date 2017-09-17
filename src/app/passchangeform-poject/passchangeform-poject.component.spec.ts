import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasschangeformPojectComponent } from './passchangeform-poject.component';

describe('PasschangeformPojectComponent', () => {
  let component: PasschangeformPojectComponent;
  let fixture: ComponentFixture<PasschangeformPojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasschangeformPojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasschangeformPojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
