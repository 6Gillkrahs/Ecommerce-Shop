import { COOKIE_LANGUAGE_KEY } from '@abp/ng.core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDto } from '@proxy/products/dtos'
import { sizeOptions } from '@proxy/sizes'
import { ColorSizeService } from '@proxy/color-sizes'
import { CreateColorSizeDto } from '@proxy/color-sizes/dtos'
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-sizeproduct',
  templateUrl: './add-sizeproduct.component.html',
  styleUrl: './add-sizeproduct.component.scss'
})
export class AddSizeproductComponent implements OnInit{

  @Input() visible : boolean;

  @Input() product : ProductDto;

  @Output() appClose : EventEmitter<any> = new EventEmitter();

  size = sizeOptions;

  input : CreateColorSizeDto;

  formGroup = new FormGroup({
    size : new FormControl(),
    color: new FormControl(),
    quantity: new FormControl()
  })

  ngOnInit(): void {
    console.log(this.size)
    this.createForm()
  }

  constructor(
    private fb : FormBuilder,
    private sizeService : ColorSizeService,
    private messageService : MessageService
  ) {
    
  }

  createForm(){
    this.formGroup = this.fb.group({
      size: [null,Validators.required],
      color : [null,Validators.required],
      quantity : [null,Validators.required]
    })
  }

  save(){
    console.log(this.formGroup.value)
    this.input = {
      size: this.formGroup.value.size,
      color: this.formGroup.value.color,
      quantity : this.formGroup.value.quantity,
      isActive : true,
      productId : this.product.id
    }
    this.sizeService.create(this.input).subscribe({
      next: () => {
        this.messageService.add({severity:"success",summary:'Success',detail:"You have added successfully!"})
      }
    })
  }

  

}
