import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {  EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cs-tiered-menu',
  templateUrl: './cs-tiered-menu.component.html',
  styleUrl: './cs-tiered-menu.component.scss'
})
export class CsTieredMenuComponent implements OnInit{

  @Input() items: MenuItem[] = [];

  @Input() pTooltip: any;

  @Input() icon: any = "pi pi-spin pi-cog";

  @Output() buttonItem: EventEmitter<any> = new EventEmitter();

  data: any;

  constructor(){
    
  }

  ngOnInit(): void {
    
  }

  dropdownItemsButton(data) {
    this.items = this.items;
    this.buttonItem.emit(data);
  }

 

}
