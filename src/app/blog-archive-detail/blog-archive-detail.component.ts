import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-blog-archive-detail',
  templateUrl: './blog-archive-detail.component.html',
  styleUrls: ['./blog-archive-detail.component.css']
})
export class BlogArchiveDetailComponent implements OnInit {
  params=[];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.params['year']=params.get('year');
      this.params['month']=params.get('month');
    });
  }

  onViewAll(){
    this.router.navigate(['']);
  }

}
