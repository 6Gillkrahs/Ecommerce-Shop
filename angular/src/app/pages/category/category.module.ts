import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
  declarations: [
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    TreeTableModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    ToggleButtonModule,
    InputNumberModule,
    ToastModule,
    InputTextareaModule,
    ConfirmDialogModule
  ]
})
export class CategoryModule { }
