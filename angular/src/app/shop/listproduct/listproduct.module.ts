import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListproductRoutingModule } from './listproduct-routing.module';
import { ListproductComponent } from './listproduct.component';


@NgModule({
  declarations: [
    ListproductComponent
  ],
  imports: [
    CommonModule,
    ListproductRoutingModule
  ]
})
export class ListproductModule { }
