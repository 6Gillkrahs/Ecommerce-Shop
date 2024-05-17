import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CsTieredMenuComponent } from './cs-tiered-menu.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CsTieredMenuComponent
  ],
  imports: [
    CommonModule,
    TieredMenuModule,
    ButtonModule
  ],
  exports: [CsTieredMenuComponent]
})
export class CsTieredMenuModule { }
