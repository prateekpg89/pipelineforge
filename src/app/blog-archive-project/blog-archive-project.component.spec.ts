import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArchiveProjectComponent } from './blog-archive-project.component';

describe('BlogArchiveProjectComponent', () => {
  let component: BlogArchiveProjectComponent;
  let fixture: ComponentFixture<BlogArchiveProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArchiveProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArchiveProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
