import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepLadderComponent } from './step-ladder.component';

describe('StepLadderComponent', () => {
  let component: StepLadderComponent;
  let fixture: ComponentFixture<StepLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
