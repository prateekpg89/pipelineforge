import { Observable } from 'rxjs/Observable';
import { JenkinsCoreService } from './jenkins-core.service';
import { DataService } from './data.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/from';
import { Injectable } from '@angular/core';

@Injectable()
export class JenkinsStepService extends JenkinsCoreService{
  constructor(http: Http, private jenkinsCoreService:JenkinsCoreService) {
    super(http);
  }
  
  getSteps(URL: string){
    return this.jenkinsCoreService.getAll(URL);
  }
}
