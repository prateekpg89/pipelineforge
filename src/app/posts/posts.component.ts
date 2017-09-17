import { GlobalErrorHandler } from './../common/global-error';
import { BadRequest } from './../common/badrequest';
import { NotFoundError } from './../common/notfound-error';
import { ApplicationError } from './../common/application-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts=[];
  
  data;
  constructor(private httpPostService: PostService) {}

  ngOnInit(){
    this.httpPostService.getAll().subscribe(posts => this.posts=posts
    ,(error: ApplicationError)=>{
      if(error instanceof NotFoundError){
        alert('Resource not found');
      }else{
        throw error;
      }
    });
  }

  createPost(input:HTMLInputElement){
    //let post:any = {title: input.value}; one way to add attributes on the fly.
    let post = {title: input.value};
    this.posts.splice(0,0,post);//optimistic approach
    input.value='';

    this.httpPostService.create(post).subscribe(id =>{
      //console.log(response.json());
      //post.id = response.json().id; with any data type we can 
      post['id'] = id;
      //this.posts.splice(0,0,post); pessimistic approach
      console.log(id);
    },(error: ApplicationError)=>{
      this.posts.splice(0,1);

      if(error instanceof BadRequest){
        //this.form.setErrors(error); in case we wanna attach error directly to form
        alert('Bad input request');
      }else{
        throw error; //thorwing as normal error not as Observable as there is no further consumer which is expecting observable
      }
    })
  }


  updatePost(originalPost){
    let post = {isRead: true};
    this.httpPostService.update(originalPost, post).subscribe(updatedpost=> console.log(updatedpost)
    ,(error: ApplicationError)=>{
      if(error instanceof BadRequest){
        //this.form.setErrors(error); in case we wanna attach error directly to form
        alert('Bad input request');
      }else{
        throw error;
      }
    }); //path method is used to just send changed data, unlike in post method where we need to send all data. 
    
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.httpPostService.delete(post).subscribe(()=>{
     // console.log(response);
      /* let index = this.posts.indexOf(post);
      this.posts.splice(index,1); */
    },(error: ApplicationError)=>{
      this.posts.splice(index,0,post);

      if(error instanceof NotFoundError){
        //this.form.setErrors(error); in case we wanna attach error directly to form
        alert('Resource not found');
      }else{
        throw error;
      }
    }); //path method is used to just send changed data, unlike in post method where we need to send all data. 
    
  }

}
