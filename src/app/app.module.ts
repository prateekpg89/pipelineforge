import { JenkinsCoreService } from './services/jenkins-core.service';
import { GlobalErrorHandler } from './common/global-error';
import { ErrorHandler, Component } from '@angular/core';
import { PostService } from './services/post.service';
import { AuthorsService } from './services/authors.service';
import { CoursesService } from './services/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { NgcontentpanelComponent } from './ngcontentpanel/ngcontentpanel.component';
import { LikesProjectComponent } from './likes-project/likes-project.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyProjectComponent } from './zippy-project/zippy-project.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormProjectComponent } from './form-project/form-project.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { PasschangeformPojectComponent } from './passchangeform-poject/passchangeform-poject.component';
import { PostsComponent } from './posts/posts.component';
import { StepLadderComponent } from './step-ladder/step-ladder.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { GithubfollowersProjectComponent } from './githubfollowers-project/githubfollowers-project.component';
import { GithubService } from "./services/github.service";
import { RouterComponent } from './router/router.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogArchiveProjectComponent } from './blog-archive-project/blog-archive-project.component';
import { BlogArchiveDetailComponent } from './blog-archive-detail/blog-archive-detail.component';
import { JenkinsStepService } from "./services/jenkins-steps.service";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    TitlecaseComponent,
    NgcontentpanelComponent,
    LikesProjectComponent,
    InputFormatDirective,
    ZippyProjectComponent,
    ContactFormComponent,
    FormProjectComponent,
    SignupFormComponent,
    TopicFormComponent,
    PasschangeformPojectComponent,
    PostsComponent,
    StepLadderComponent,
    SidenavbarComponent,
    GithubfollowersProjectComponent,
    RouterComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    BlogArchiveProjectComponent,
    BlogArchiveDetailComponent
  ],
  imports: [
      MDBBootstrapModule.forRoot(),
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        
        /*RouterModule.forRoot([
          {path: '', component: HomeComponent},
          {path: 'followers', component: GithubfollowersProjectComponent},
          {path: 'posts', component: PostsComponent},
          {path: 'followers/:id', component: GithubProfileComponent},
          {path: '**', component: NotFoundComponent}  
          {path: '', component: BlogArchiveProjectComponent},
          {path: 'archives/:year/:month', component: BlogArchiveDetailComponent},
          {path: '**', component: NotFoundComponent}              
        ])*/
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    CoursesService, 
    AuthorsService, 
    PostService, /*{provide: ErrorHandler, useClass: GlobalErrorHandler},*/ 
    GithubService,
    JenkinsStepService,
    JenkinsCoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
