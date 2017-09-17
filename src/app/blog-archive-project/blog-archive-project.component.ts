import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-archive-project',
  templateUrl: './blog-archive-project.component.html',
  styleUrls: ['./blog-archive-project.component.css']
})
export class BlogArchiveProjectComponent implements OnInit {
  archives = [
    {year: 2017, month: 1},
    {year: 2017, month: 2},
    {year: 2017, month: 3}
  ];
  constructor() { }

  ngOnInit() {
  }

}
