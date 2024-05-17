import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@abp/ng.account';
import { SearchbarComponent } from './searchbar.component';

const routes: Routes = [
  { 
    path: '', 
    component: SearchbarComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchbarRoutingModule { }
