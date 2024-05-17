import { Component, OnInit } from '@angular/core';
import {ManufacturerDto,ManufacturerGetInput} from '@proxy/manufacturers/dtos'
import {ManufacturerService} from '@proxy/manufacturers'
import { ConfirmationService ,MessageService} from 'primeng/api';




@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrl: './manufacturer.component.scss',
  providers: [ConfirmationService]
})
export class ManufacturerComponent implements OnInit{

  manufacturers : ManufacturerDto[] = [];

  input : ManufacturerGetInput;

  maxResultCount = 10;

  totalItems : number;

  isLoading : boolean = false;

  skipCount : number = 0;

  actionItems : any[] = [];

  detailModal : boolean = false;

  addModal : boolean = false;

  editModal : boolean = false;

  selectedManufacturer: ManufacturerDto;



  ngOnInit(): void {
    this.getManufacturers();
  }


  constructor(
    private manufacturerService : ManufacturerService,
    private comfirmService : ConfirmationService,
    private messageService : MessageService,
  ){

  }

  getManufacturers(){
    this.isLoading =true;

    this.input = {
      maxResultCount : this.maxResultCount,
      skipCount : this.skipCount
    }

    this.manufacturerService.getList(this.input).subscribe({
      next: (manufacturer) => {
        this.isLoading =false;
        this.manufacturers = manufacturer.items;
        this.totalItems = manufacturer.totalCount
        // console.log(this.manufacturers)
      }
    })
  }

  onPageChange(event){
    this.skipCount = event.page * this.maxResultCount;
    this.maxResultCount = event.rows;
    console.log(event);
    this.getManufacturers();
  }

  dropdownItemButton(manufacturer ){
    this.actionItems = [
      {
        label: "View",
        icon : 'pi pi-eye',
        command :() =>{
          this.onView(manufacturer);
        } 
      },
      {
        label : 'Edit',
        icon: 'pi pi-id-card',
        command: () => {
          this.onEdit(manufacturer)
        }
      },
      {
        label : 'Delete',
        icon : 'pi pi-user-minus',
        command : () => {
          this.onDelete(manufacturer)
        }
      }
    ]
  }

  onView(manufacturer: ManufacturerDto){
    this.detailModal = true;
    this.selectedManufacturer = manufacturer;
  }

  onAdd(){
    this.addModal = true;
  }

  onEdit(manufacturer : ManufacturerDto){
    this.selectedManufacturer = manufacturer;
    this.editModal = true;
  }

  onDelete(manufacturer : ManufacturerDto){
    this.comfirmService.confirm({
      header:"Manufacturer Delete",
      accept:()=>{
        this.delete(manufacturer)
      }
    })
  }

  delete(manufacturer : ManufacturerDto){
    this.manufacturerService.delete(manufacturer.id).subscribe({
      next:()=>{
        this.getManufacturers()
        this.messageService.add({severity:"success",summary:"success",detail:"You have deleted successfully!"})       
      }
    })
  }

  deleteSelectedProducts(){

  }

  

}
