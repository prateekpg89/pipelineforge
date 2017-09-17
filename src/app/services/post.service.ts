
import { DataService } from './data.service';
import { BadRequest } from './../common/badrequest';
import { NotFoundError } from './../common/notfound-error';
import { ApplicationError } from './../common/application-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService extends DataService{
  //private url ="https://jsonplaceholder.typicode.com/posts";
  constructor(http: Http) {
    super("https://jsonplaceholder.typicode.com/posts", http);
   }
}
