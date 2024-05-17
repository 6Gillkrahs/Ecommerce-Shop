import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmtyRoutingModule } from './emty-routing.module';
import { EmtyComponent } from './emty.component';


@NgModule({
  declarations: [
    EmtyComponent
  ],
  imports: [
    CommonModule,
    EmtyRoutingModule
  ]
})
export class EmtyModule { }
