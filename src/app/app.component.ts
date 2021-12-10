import { Component, ViewChild } from '@angular/core';
import { TrainingService } from './components/training/training.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'course-app';
  openSive=false;
  
}
