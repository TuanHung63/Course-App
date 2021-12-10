import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private availableExercises:Exercise[]=[
    {id:'crunches',name:"Crunches",duration:5,calories:8},
    {id:'touch-toes',name:"Touch Toes",duration:20,calories:10},
    {id:'side-lunges',name:"Side Lunges",duration:120,calories:15},

  ];
  private exercises:Exercise[]=[];
  private runningExercise?:Exercise|null;
  exerciseChanged= new Subject<Exercise>();

  constructor() { }
  getAvailableExercises(){
    return this.availableExercises.slice();
  }
  startExercise(selectedId:string){
    this.runningExercise=this.availableExercises.find(
      ex=>ex.id===selectedId      
    );    
    this.exerciseChanged.next(this.runningExercise);

  }
  getRunningExercise(){
    return {...this.runningExercise};
  }
  completedExercise(){
    if(this.runningExercise){
    this.exercises.push({...this.runningExercise,date:new Date(),status:'completed'});
  };
    this.runningExercise=null;
    this.exerciseChanged.next(undefined);

  }
  cancelExercise(progress:number){
    if(this.runningExercise){
      this.exercises.push({...this.runningExercise,date:new Date(),status:'cancelled',
      duration:this.runningExercise.duration*(progress/100),
      calories:this.runningExercise.calories*(progress/100),
    
    });
    };
      this.runningExercise=null;
      this.exerciseChanged.next(undefined);

  }
  getCompletedorCancelledExercise(){
    return this.exercises.slice();
    }
}
