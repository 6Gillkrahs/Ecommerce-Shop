import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component'
import { AdminComponent } from './layouts/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'account',
        loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
      },
      {
        path: 'identity',
        loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
      },
      {
        path: 'tenant-management',
        loadChildren: () =>
          import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
      },
      {
        path: 'setting-management',
        loadChildren: () =>
          import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
      },
      {
        path: 'staff',
        loadChildren: () =>
          import('./pages/staff/staff.module').then(m => m.StaffModule)
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./pages/category/category.module').then(m => m.CategoryModule)
      },
      { path: 'manufacturer',
        loadChildren: () => 
          import('./pages/manufacturer/manufacturer.module').then(m => m.ManufacturerModule) },
        { path: 'product', 
        loadChildren: () => 
          import('./pages/product/product.module').then(m => m.ProductModule) },


      { path: 'emty', loadChildren: () => import('./layouts/emty/emty.module').then(m => m.EmtyModule) }
    ],

  },


 
  




  // {
  //   path: 'staff', 
  //   component:AdminComponent,
  //   loadChildren: () => 
  //     import('./pages/staff/staff.module').then(m => m.StaffModule)
  // },

  // { path: 'staff', loadChildren: () => import('./pages/staff/staff.module').then(m => m.StaffModule) },




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }