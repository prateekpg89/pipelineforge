import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes-project.component.html',
  styleUrls: ['./likes-project.component.css']
})
export class LikesProjectComponent implements OnInit{
  @Input() likesCount:number;
  @Input() isActive:boolean;
  property;
  ngOnInit(){
      this.property=this.isActive?"deeppink":"grey";
  }
  
  isLiked(){
    this.likesCount+=this.isActive?-1:1
    this.isActive=!this.isActive;
    this.property=this.isActive?"deeppink":"grey";
  }
}
