import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyProjectComponent } from './zippy-project.component';

describe('ZippyProjectComponent', () => {
  let component: ZippyProjectComponent;
  let fixture: ComponentFixture<ZippyProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
