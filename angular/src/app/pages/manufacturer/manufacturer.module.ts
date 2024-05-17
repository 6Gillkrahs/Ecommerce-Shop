import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturerRoutingModule } from './manufacturer-routing.module';
import { ManufacturerComponent } from './manufacturer.component';
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
import { AddManuComponent } from './add-manu/add-manu.component';
import { DetailManuComponent } from './detail-manu/detail-manu.component';
import { EditManuComponent } from './edit-manu/edit-manu.component';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [
    ManufacturerComponent,
    AddManuComponent,
    DetailManuComponent,
    EditManuComponent
  ],
  imports: [
    CommonModule,
    ManufacturerRoutingModule,
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
    ConfirmDialogModule,
    ToggleButtonModule
  ]
})
export class ManufacturerModule { }
