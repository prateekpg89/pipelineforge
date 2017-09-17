import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentpanelComponent } from './ngcontentpanel.component';

describe('NgcontentpanelComponent', () => {
  let component: NgcontentpanelComponent;
  let fixture: ComponentFixture<NgcontentpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontentpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
