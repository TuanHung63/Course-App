import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CurrentTrainingComponent } from './components/training/current-training/current-training.component';
import { PastTrainingComponent } from './components/training/past-training/past-training.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { TrainingComponent } from './components/training/training.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/module/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './components/training/stop-training/stop-training.component';
import { AuthService } from './components/auth/auth.service';
import { TrainingService } from './components/training/training.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,    
    WelcomeComponent,
    CurrentTrainingComponent,
    PastTrainingComponent,
    NewTrainingComponent,
    TrainingComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [AuthService,TrainingService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
