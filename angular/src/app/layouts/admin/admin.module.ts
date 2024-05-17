import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../partials/header/header.component';
import { FooterComponent } from '../partials/footer/footer.component';
import { SearchbarComponent } from '../partials/searchbar/searchbar.component';
import { SharedModule } from '../../shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ToastModule,
    BrowserAnimationsModule,
    ButtonModule,
  ]
})
export class AdminModule { }
