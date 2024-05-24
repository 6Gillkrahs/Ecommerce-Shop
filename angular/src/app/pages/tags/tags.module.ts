import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
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
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';
import { ShowmodelComponent } from './showmodel/showmodel.component';


@NgModule({
  declarations: [
    TagsComponent,
    ShowmodelComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
    DialogModule,
    ToastModule,
    FloatLabelModule,
    ConfirmDialogModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    CsTieredMenuModule
  ]
})
export class TagsModule { }
