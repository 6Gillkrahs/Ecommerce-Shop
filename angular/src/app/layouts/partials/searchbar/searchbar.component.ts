import { AuthService, ConfigStateService } from '@abp/ng.core';
import { CurrentUserComponent } from '@abp/ng.theme.basic';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MessageService} from 'primeng/api'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
  providers:[MessageService]
})
export class SearchbarComponent implements OnInit{

  ngOnInit(): void {
    
  }

  constructor(
    private authService: AuthService,
    private config : ConfigStateService,
    // private notificationService: NotificationService,
    private toastr : ToastrService,
    private messageService : MessageService
  ){

  }

  check(){
    return this.authService.isAuthenticated;
  }

  logout(){
    // this.toastr.error('An error occurred', 'Error');
    this.authService.logout();
    
  }

  showError(): void {
    this.messageService.add({severity:'warn',summary:'Error',detail:'message content'})
  }

  login(){
    const credentials = { username: 'ads', password: '1q2w3E*' };
    this.authService.login(credentials); 
    
  }

  getnameuser(){
    const currentUser = this.config.getOne("currentUser")
    return currentUser.userName
  }

}
