import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from '@abp/ng.core';
import { Message } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    msgs: Message[] = [];

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private service: MessageService
    )    
    { }

    logout(){
        this.authService.logout()
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }

    check(){
        return this.authService.isAuthenticated

    }

    login(){
        const param = {
            username : 'admin',
            password : '1q2w3E*'
        }
        this.authService.login(param);
    }
    
}
