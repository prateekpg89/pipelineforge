import { JenkinsStepService } from './../services/jenkins-steps.service';
import { CommonConfig } from './../common/config';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'step-ladder',
  templateUrl: './step-ladder.component.html',
  styleUrls: ['./step-ladder.component.css']
})
export class StepLadderComponent implements OnInit{
  @Input('project-name') projectName;
  stepDetails=[];
  buildNo;
  currentindex;
  currentStatus;
  isLoaded="home";

  constructor(private jenkinsService: JenkinsStepService){}

  ngOnInit(){

  }

  toggle(index: number){
    let url = CommonConfig.getConfigs().docRoot+"/rest/api/steps";
    if(this.stepDetails[index].pausePlaySate == 'PAUSED'){
      this.stepDetails[index].pausePlaySate='';
      this.stepDetails[index].stepStatus='--';
    }else if(this.stepDetails[index].pausePlaySate == ''){
      this.stepDetails[index].pausePlaySate='PAUSED';
      this.stepDetails[index].stepStatus='PAUSED';      
    }
    //TODO: Update DB for status of play/paused
    this.jenkinsService.update(
      url, 
      {
        "id": this.stepDetails[index].stepId
      },
      {
        "flag": this.stepDetails[index].pausePlaySate
      }
    ).subscribe(response=>{
      if(response.code!="200"){
        console.log(response.status);
      }
    },error=>{

    });
  }

  loadStepDetails(){
    let url = CommonConfig.getConfigs().docRoot+"/rest/api/steps/";
    this.isLoaded = "no";
    this.jenkinsService.getSteps(url).map((response)=>response.data[0].steps).subscribe((response: Array<any>) => {
      this.isLoaded="yes";
      this.stepDetails.splice(0, this.stepDetails.length);
      let nextIdLength = 0;
      let pausePlaySate;
      let isParallel;
      let parallelCount=0;
      response.forEach(element => {
        isParallel=false;
        if(element.stepName=="Parallel"){
          nextIdLength = element.stepNextId.length;
          parallelCount = nextIdLength;
        }
        if(element.stepState!="FINISHED" && element.stepState!="DISABLED"){
          pausePlaySate=element.stepStatus;
        }
        if(nextIdLength>0 && element.stepName!="Parallel"){
          isParallel=true;
          pausePlaySate=null;
          nextIdLength--;
        }
        console.log(nextIdLength);
        this.stepDetails.push({
          'stepName' : element.stepName,
          'stepId' : element.stepId,
          'stepState' : element.stepState,//to mark if step is disabled
          'stepStatus' : (element.stepStatus==""?'--':element.stepStatus),
          'stepDuration' : this.millisToMinutesAndSeconds(element.stepDurationInMillis),
          'pausePlaySate': pausePlaySate, //UI only content
          'isParallel': isParallel, //UI only content
          'stepUICount': (element.stepName=="Parallel"?element.stepId:element.stepId-parallelCount)//UI only content
        });
      });
    });
  }

  private millisToMinutesAndSeconds(millis) {
    var hours = Math.floor(millis/3600000);
    var minutes = Math.floor((millis%3600000)/60000);
    var seconds = Math.round(((millis%3600000)%60000)/1000);
    var timeStr="";
    if(seconds==60){
      minutes++;
      if(minutes==60){
        hours++;
        timeStr = (hours<10?"0":"")+hours+":00"+":00";
      }else{
        timeStr = (hours<10?"0":"")+hours+":"+(minutes<10?"0":"")+minutes+":00";
      }
    }else{
      timeStr = (hours<10?"0":"")+hours+":"+(minutes<10?"0":"")+minutes+":"+(seconds<10?"0":"")+seconds;
    }
    return timeStr;
  }  
}
