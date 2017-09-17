import { FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent{
  @Input('heading') heading;
  isActive=false;
  currentSelectionIndex=null;
  projectName="";
  projects = [
    {
      projectURL : 'Coverity_Win',
      projectName: 'Shuksan/Coverity_Win'
    },
    {
      projectURL: 'Coverity_Mac',
      projectName: 'Shuksan/Coverity_Mac'
    },
    {
      projectURL: 'NB_Win_Rel_x64',
      projectName: 'Shuksan/Nighty builds/NB_Win_Rel_x64'
    },
    {
      projectURL: 'SDK',
      projectName: 'Shuksan/Nighty builds/SDK'
    },    
  ]

  onToggle(){
    this.isActive = !this.isActive;
  }

  onClick(i, childObj){
    this.currentSelectionIndex = i;
    this.projectName=this.projects[i].projectName;
    /* ......
     call for build details for selection
     ..........
     */
    childObj.loadStepDetails();
  }
}
