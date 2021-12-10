import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training/stop-training.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress=0;
  timer:any;
  constructor(private dialog:MatDialog,private trainingService:TrainingService) { }

  ngOnInit(): void {
    this.settimer();
  }
  stopTraining(){
    clearInterval(this.timer); 
    const dialogRef =this.dialog.open(StopTrainingComponent,{
      width:'250px',
      data:{
        progress:this.progress
      }
    });
    dialogRef.afterClosed().subscribe(
      (result)=>{
        if(result){
          this.trainingService.cancelExercise(this.progress);
          }else{
          this.settimer();
        }
      }
    )
  }
  continueTraining(){
    this.settimer();    

  }
  settimer(){
    const step=this.trainingService.getRunningExercise().duration ||0;
    this.timer = setInterval(()=>{
      if(this.progress>=100){
        this.trainingService.completedExercise();       
        clearInterval(this.timer); 
      }else{
      this.progress=this.progress+1;}
    },step/100*1000)

  }
}
