import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ManufacturerDto,CreateManufacturerDto} from '@proxy/manufacturers/dtos'
import {ManufacturerService} from '@proxy/manufacturers'
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-manu',
  templateUrl: './add-manu.component.html',
  styleUrl: './add-manu.component.scss'
})
export class AddManuComponent implements OnInit{

  @Input() visible : boolean;

  @Output() appClose : EventEmitter<any> = new EventEmitter();

  visibility : boolean = false;

  isActive : boolean = false;

  isLoading : boolean ;

  manufacturer : CreateManufacturerDto;


  formGroup = new FormGroup({
    name : new FormControl(),
    country : new FormControl(),
    isActive : new FormControl (),
    visibility : new FormControl()
  });

  

  ngOnInit(): void {
    this.createForm()
  }

  constructor(
    private fb : FormBuilder,
    private readonly manufacturerService: ManufacturerService,
    private readonly messageService : MessageService
  ){
  }

  createForm(){
    this.formGroup = this.fb.group({
      name: [null,Validators.required],
      country : [null,Validators.required],
      isActive : [this.isActive,Validators.required],
      visibility : [this.visibility,Validators.required]
    })
  }

  save(){
    this.isLoading = true;

    this.manufacturer ={
      name: this.formGroup.value.name,
      country: this.formGroup.value.country,
      isActive: this.formGroup.value.isActive,
      visibility: this.formGroup.value.visibility
    }

    this.manufacturerService.create(this.manufacturer).subscribe({
      next: ()=>{
        setTimeout(() => {
          this.isLoading = false;
          this.visible = false;
          this.messageService.add({severity:"success",summary:"Success",detail:"You have added successfully!"})
        }, 1000);    
      }
    })
  }

}
