import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubfollowersProjectComponent } from './githubfollowers-project.component';

describe('GithubfollowersProjectComponent', () => {
  let component: GithubfollowersProjectComponent;
  let fixture: ComponentFixture<GithubfollowersProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubfollowersProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubfollowersProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
