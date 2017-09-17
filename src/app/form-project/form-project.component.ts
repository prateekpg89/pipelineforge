import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css']
})
export class FormProjectComponent {
  categories=[
    {id: 1, name: "Development"},
    {id: 2, name: "Production"}
  ];
  test(obj){
    console.log(obj);
  }
}
