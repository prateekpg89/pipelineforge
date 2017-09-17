import { ActivatedRoute } from '@angular/router';
import { ApplicationError } from './../common/application-error';
import { NotFoundError } from './../common/notfound-error';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';// used to map one observable to other in flatten way

@Component({
  selector: 'githubfollowers-project',
  templateUrl: './githubfollowers-project.component.html',
  styleUrls: ['./githubfollowers-project.component.css']
})
export class GithubfollowersProjectComponent implements OnInit {
  private followers=[];
  constructor(private githubService: GithubService, private route: ActivatedRoute) { }

  ngOnInit() {
    /* if we need to combine two observables to process further, we can use factory method combineLatest from observable to create new observable
    out of all available observables and subscribe to new one */
    /* Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combineObs =>{
        let id = combineObs[0].get('id'); //parammap observable to fetch required params
        let page = combineObs[1].get('page'); //queryparam observable to fetch optional params
        this.githubService.getAll().subscribe(followers=>this.followers=followers,
          (error: Response) => {
          if(error instanceof NotFoundError){
            alert ('Resource not found');
          }else{
            throw error;
          }
        });
    }); */
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).switchMap(combinedObs=>{//maps obserables from previous call to compatible observable (but in flatten way) for next step so as to remove 
      //nested subscribe call required for end results.
      let id = combinedObs[0].get('id');
      let page = combinedObs[1].get('page');
      return this.githubService.getAll();
    }).subscribe(followers=>this.followers=followers,
        (error: Response) => {
          if(error instanceof NotFoundError){
            alert ('Resource not found');
          }else{
            throw error;
          }
        }
      );
  }
}
