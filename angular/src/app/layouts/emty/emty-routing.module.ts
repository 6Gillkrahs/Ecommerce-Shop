import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmtyComponent } from './emty.component';

const routes: Routes = [{ path: '', component: EmtyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmtyRoutingModule { }
