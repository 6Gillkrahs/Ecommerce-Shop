import { SideMenuApplicationLayoutComponent } from '@abp/ng.theme.lepton-x/layouts';
import { Component, OnInit } from '@angular/core';
import {CategoryDto ,CategoryGetListInput} from '@proxy/categories/dtos'
import {CategoryService} from '@proxy/categories'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  categorys : CategoryDto[] = [];

  totalcount : number;

  skipCount = 0;

  maxResultCount = 10;

  filter : CategoryGetListInput;

  
  

  ngOnInit(): void {
    this.getListCategory();
  }

  constructor(
    private readonly categoryService : CategoryService
  ){

  }

  getListCategory(){
    this.filter ={
      skipCount : this.skipCount,
      maxResultCount :this.maxResultCount,
    }
    this.categoryService.getList(this.filter).subscribe((res)=>{
      this.categorys =res.items;
      this.totalcount = res.totalCount
      // console.log(this.categorys)
    })
  }

  
  

}
