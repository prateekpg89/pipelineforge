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
export class DataService {
    constructor(private url: string,private http: Http) { }
  
  getAll(){
    return this.http.get(this.url).map(response => response.json()).catch(this.handleError);
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource)).map(response => response.json()).catch(this.handleError);
  }

  update(originalResource, changeInResource){
    return this.http.patch(this.url+'/'+originalResource.id, JSON.stringify(changeInResource)).map(response => response.json()).catch(this.handleError);
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
