import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesProjectComponent } from './likes-project.component';

describe('LikesProjectComponent', () => {
  let component: LikesProjectComponent;
  let fixture: ComponentFixture<LikesProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
