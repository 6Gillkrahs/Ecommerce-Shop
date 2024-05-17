import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ManufacturerDto,UpdateManufacturerDto} from '@proxy/manufacturers/dtos'
import {ManufacturerService} from '@proxy/manufacturers'
import { MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-manu',
  templateUrl: './edit-manu.component.html',
  styleUrl: './edit-manu.component.scss'
})
export class EditManuComponent implements OnInit{
  @Input() visible : boolean;

  @Input() manufacturer : ManufacturerDto;

  @Output() appClose : EventEmitter<any> = new EventEmitter();

  isLoading : boolean = false;

  updateManufacturer : UpdateManufacturerDto;



  formGroup  = new FormGroup({
    name: new FormControl(),
    country : new FormControl(),
    isActive: new FormControl(),
    visibility  : new FormControl(),
    slug : new FormControl()
  })


  ngOnInit(): void {
    this.createForm()
  }

  constructor(
    private readonly manufacturerService: ManufacturerService,
    private fb : FormBuilder,
    private messageService : MessageService,
  ){}

  createForm(){
    this.formGroup = this.fb.group({
      name: [null || this.manufacturer.name ,Validators.required],
      country: [null || this.manufacturer.country ,Validators.required],
      isActive: [null || this.manufacturer.isActive ,Validators.required],
      visibility: [null || this.manufacturer.visibility ,Validators.required],
      slug: [null || this.manufacturer.slug ,Validators.required]
    })

  }


  save(){
    this.isLoading = true;

    this.updateManufacturer = {
      name: this.formGroup.value.name,
      country: this.formGroup.value.country,
      isActive: this.formGroup.value.isActive,
      visibility: this.formGroup.value.visibility,
      slug: this.formGroup.value.slug,
    }
    this.manufacturerService.update(this.manufacturer.id,this.updateManufacturer).subscribe({
      next: () => {
        setTimeout(() => {
           this.isLoading = false;
           this.visible = false;
           this.messageService.add({severity:"success",summary:"Success",detail:"You have edited successfully!"})
        }, 1000);
      }
    })
  }

  

}
