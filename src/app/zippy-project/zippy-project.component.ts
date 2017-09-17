import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy-project.component.html',
  styleUrls: ['./zippy-project.component.css']
})
export class ZippyProjectComponent {
  @Input() title;
  down = true;
  onExpandClick(){
    this.down = !this.down;
  }
}
