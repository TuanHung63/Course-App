import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/components/auth/auth.service';
import { TrainingService } from 'src/app/components/training/training.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuth:boolean|null=false;
  authSubscription!:Subscription;
  @Output() sidenavToggle= new EventEmitter<void>();
  constructor(private authService:AuthService,private a:TrainingService) { }

  ngOnInit(): void {
    this.authSubscription=this.authService.authChange.subscribe(
      (authStatus:boolean)=>{
        this.isAuth=authStatus

      }
    )
  }
  onToggleSidenav(){
    this.sidenavToggle.emit();

  }
  onLogout(){
    this.authService.logout();
  }
  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }
  

}
