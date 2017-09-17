import { CoursesService } from './../services/courses.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  //courses=["course1", "course2", "course3"];
  //showing loading on event
  courses;
  //component property used for property binding
  title = "Angular workshop"; 
  isFooActive = true;
  colSpan = 2;
  email="sample@gmail.com";

  //***********favorite project code */
  //isFavourite=true;

  // making favourite behavior a component API by making it attribute bind compliant, alias name as argument is optional
  @Input('is-favorite') isFavourite:boolean;
  // making favourite behavior a component API by making it event bind compliant, alias name as argument is optional
  @Output() change=new EventEmitter();

  //ngSwitch
  viewMode;
  content="final";

  onSave($event){
    console.log("Save clicked!!.");
    console.log($event);
  }
  onKeyPress($event){
    /* below is lenghty way of filtering event, angular has better way
    if($event.keyCode==13)
    console.log("Enter key pressed!!"); */
    
    /*filtering event: for understanding what happened here, see index.html
    console.log("Enter key pressed");*/

    /*code to get input value, nothing fancy
    console.log($event.target.value);*/
    
    /*Above code can be simplified as below, to know about what is going on please refer to index.html
    console.log(email);*/
    
    console.log(this.email);
  }
  onFavouriteClicked(){
    this.isFavourite=!this.isFavourite;
    //this.change.emit();
    this.change.emit(this.isFavourite); //passing data to event handlers
  }
  
  onChangeContent(){
    this.content="updated";
  }

  /*it mimics the loading of contents fetched from network, it is costly operation as it always try to render the DOM no matter whether
  content is same or not because angular bu default tracks DOM by memory object id and every time this id changes whenever DOM gets change 
  event triggered.*/

  loadCourses(){
    this.courses=["course1", "course2", "course3"];
  }

  //function called by trackBy property of ngFor to change the default implementation of trackBy for DOM objects from memory id to 
  //course id. Which instructs angular to not re-render the DOM if for that id content is not changed. 
  trackCourse(index, course){
    return course? course.id: undefined;
  }

  constructor(service: CoursesService) {/*We could have used new operator but this couples component and services tightly whereas
    injecting in constructor decouples the component class from service class implementation and 
    various overheads involved. We are saying here to angular to create object for us. This is called as dependency injection.*/
    //this.courses = service.getCourses();

    
  }
  ngOnInit() {
  }

}
