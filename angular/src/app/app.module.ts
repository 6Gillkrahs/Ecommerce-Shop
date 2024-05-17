import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { InternetConnectionStatusComponent, ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { AbpOAuthModule } from '@abp/ng.oauth';
import { ThemeLeptonXModule } from '@abp/ng.theme.lepton-x';
import { SideMenuLayoutModule } from '@abp/ng.theme.lepton-x/layouts';
import { AccountLayoutModule } from '@abp/ng.theme.lepton-x/account';
import { AdminComponent } from './layouts/admin/admin.component';
import { AdminModule } from './layouts/admin/admin.module';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import {AppLayoutModule} from './layout/app.layout.module'
import {UserManagementService} from '@proxy/user-manage-ment'
import { DialogModule } from 'primeng/dialog';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppLayoutModule,
    DialogModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    AbpOAuthModule.forRoot(),
    ThemeSharedModule.forRoot(),
    
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    
    
    FeatureManagementModule.forRoot(),
    InternetConnectionStatusComponent,
    // ThemeLeptonXModule.forRoot(),
    SideMenuLayoutModule.forRoot(),
    AccountLayoutModule.forRoot(),
    ToastrModule.forRoot(),
    ToastModule,

    // AdminModule,
    // PremainModule
  ],
  declarations: [AppComponent],
  providers: [APP_ROUTE_PROVIDER,MessageService,UserManagementService],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
