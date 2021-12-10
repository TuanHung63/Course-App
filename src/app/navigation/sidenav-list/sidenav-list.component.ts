import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit ,OnDestroy {
  isAuth:boolean|null=false;
  authSubscription!:Subscription;
  @Output() closeToggle= new EventEmitter<void>();
  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
    this.authSubscription=this.authService.authChange.subscribe(
      (authStatus:boolean)=>{
        this.isAuth=authStatus

      }
    )
  }
  onClose(){
    this.closeToggle.emit();
  }
  onLogout(){
    this.onClose();
    this.authService.logout();
  }
  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

}
