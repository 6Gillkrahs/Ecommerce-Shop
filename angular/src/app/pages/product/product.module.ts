import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { CsTieredMenuModule } from '../../shared/components/cs-tiered-menu/cs-tiered-menu.module';
import { ToolbarModule } from 'primeng/toolbar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AddProComponent } from './add-pro/add-pro.component';
import { DetailProComponent } from './detail-pro/detail-pro.component';
import { EditProComponent } from './edit-pro/edit-pro.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { AddSizeproductComponent } from './add-sizeproduct/add-sizeproduct.component';


@NgModule({
  declarations: [
    ProductComponent,
    AddProComponent,
    DetailProComponent,
    EditProComponent,
    AddSizeproductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
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
    CascadeSelectModule,
    DropdownModule,
    FileUploadModule,
    InputNumberModule
  ]
})
export class ProductModule { }
