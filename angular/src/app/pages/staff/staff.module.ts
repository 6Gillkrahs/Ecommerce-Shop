import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { CsTieredMenuModule } from '../../shared/components/cs-tiered-menu/cs-tiered-menu.module';
import { SharedModule } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    StaffComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StaffRoutingModule,
    TabViewModule,
    TableModule,
    CsTieredMenuModule,
    ToolbarModule,
    ButtonModule,
    BreadcrumbModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class StaffModule { }
