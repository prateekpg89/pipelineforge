import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("GithubProfile OnInit"); /*this gets printed everytime as this component is recreated due to different clicks
    but if angular detects that only contents change then it doesn't go through component life cycle hook */

    //this.route.snapshot.paramMap.get('id'); if we are very sure that everytime new component will be rendered then URL can be fetch using this
    //method which expects that unique URL is attached with a component instead of looking for observables.

    this.route.paramMap //even though oninit is called only once here, but as there is change in url parameter, anyone subscribing this observable 
    //can know about the changed params
    .subscribe((params)=> {
      let intId = params.get('id') //+ converts string to int
      console.log(intId);
    })
  }

}
