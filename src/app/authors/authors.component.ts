import { AuthorsService } from './../services/authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors;
  title = " Authors";
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
