import { ReplaceableComponentsService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, PrimeNGConfig ,MessageService} from 'primeng/api';
import { AdminComponent } from './layouts/admin/admin.component';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { LoginComponent } from '@abp/ng.account';
import {AppLayoutComponent} from './layout/app.layout.component'
import { AppConfig, LayoutService } from './layout/service/app.layout.service';
import { EmtyComponent } from './layouts/emty/emty.component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
  providers : [MessageService]
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
  //   this.primengConfig.ripple = true;  
  //   const config: AppConfig = {
  //     ripple: false,                      //toggles ripple on and off
  //     inputStyle: 'outlined',             //default style for input elements
  //     menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
  //     colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
  //     theme: 'lara-light-indigo',         //default component theme for PrimeNG
  //     scale: 14                           //size of the body font size to scale the whole application
  // };
  // this.layoutService.config.set(config);
  }

  constructor(
    private replaceableComponents: ReplaceableComponentsService, 
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
     private layoutService: LayoutService
  ) {
    this.replaceableComponents.add({
      component: EmtyComponent,
      key: eThemeBasicComponents.ApplicationLayout,
    });  
  }

}
