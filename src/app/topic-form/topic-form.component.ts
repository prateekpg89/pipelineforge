import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent{
  form = new FormGroup({
    'topics': new FormArray([])//defines form array object(not an array) which will hold data of list item
  })

  onAddTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));//expects form control
    topic.value='';
  }

  onRemove(topic: AbstractControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray
  }
}
