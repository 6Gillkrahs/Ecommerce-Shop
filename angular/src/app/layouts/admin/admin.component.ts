import { Component } from '@angular/core';
import {MessageService} from 'primeng/api'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  providers:[MessageService]
})
export class AdminComponent {
  constructor(
    private messageService : MessageService
  ){

  }
}
