import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArchiveDetailComponent } from './blog-archive-detail.component';

describe('BlogArchiveDetailComponent', () => {
  let component: BlogArchiveDetailComponent;
  let fixture: ComponentFixture<BlogArchiveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArchiveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArchiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
