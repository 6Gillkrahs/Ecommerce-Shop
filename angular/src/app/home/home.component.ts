import { AuthService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import {CategoryDto ,CategoryGetListInput} from '@proxy/categories/dtos'
import {CategoryService} from '@proxy/categories'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  categorys : CategoryDto[] = [];

  totalcount : number;

  skipCount = 0;

  maxResultCount = 10;

  filter : CategoryGetListInput;
  

  ngOnInit(): void {
  
  }


  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  constructor(
    private authService: AuthService,
    private readonly categoryService : CategoryService
  ) {}

  login() {
    this.authService.navigateToLogin();
  }

  
}
