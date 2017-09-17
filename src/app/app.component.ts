import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    isFavourite: true,
    title: 'Angular app'
  };
  //likes project
  tweet = {
    likesCount: 6,
    isLiked: false,
    body: "Here is the body of tweet..."
  };

  isFavoriteSelected(isFavorite){
    console.log("Favorite changed with",isFavorite, "value");
  }
}
