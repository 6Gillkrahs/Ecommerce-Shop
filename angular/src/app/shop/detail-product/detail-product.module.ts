import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProductRoutingModule } from './detail-product-routing.module';
import { DetailProductComponent } from './detail-product.component';


@NgModule({
  declarations: [
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    DetailProductRoutingModule
  ]
})
export class DetailProductModule { }
