import { BadRequest } from './../common/badrequest';
import { NotFoundError } from './../common/notfound-error';
import { ApplicationError } from './../common/application-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw'
import { Observable } from "rxjs/Observable";

@Injectable()
export class JenkinsCoreService {
    constructor(private http: Http) { }
  
  getAll(URL: string): Observable<any>{
    return this.http.get(URL).map((response) => response.json()).catch(this.handleError);
  }

  create(URL, resource){
    return this.http.post(URL, JSON.stringify(resource)).map(response => response.json()).catch(this.handleError);
  }

  update(URL, originalResource, changeInResource){
    return this.http.patch(URL+'/'+originalResource.id, JSON.stringify(changeInResource)).map(response => response.json()).catch(this.handleError);
  }

  delete(resource){
      return Observable.throw(new ApplicationError());
    //return this.http.delete(this.url+'/'+resource.id).map(response => response.json()).catch(this.handleError); //we just need to pass signature and not to call it
  }

  private handleError(error: Response){
    if(error.status === 404){
      return Observable.throw(new NotFoundError());
    }

    if(error.status === 400){
      return Observable.throw(new BadRequest(error.json()));
    }
 
    return Observable.throw(new ApplicationError(error));//catch expects fuction with this signature which returns observable
  }
}
