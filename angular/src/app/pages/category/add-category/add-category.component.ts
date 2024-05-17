import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CategoryDto,CategoryGetListInput} from '@proxy/categories/dtos'
import {CategoryService} from '@proxy/categories'
import { ConfirmationService, MessageService } from 'primeng/api';
import { CreateCategoryDto } from '../../../proxy/categories/dtos/models';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss',
  providers: [ConfirmationService]
})
export class AddCategoryComponent implements OnInit{
  
  @Input() display : boolean ;

  @Input() IdRoot : string;

  @Input() isLoading: boolean = false;

  @Output() appClose : EventEmitter<any> = new EventEmitter();


  visibility : boolean;

  isActive : boolean;

  input : CreateCategoryDto;

  sort : number;

  seo : string;

  formGroup = new FormGroup({
    name : new FormControl(),
    sortOrder : new FormControl(),
    parentId : new FormControl(),
    seoMD : new FormControl(),
    visibility : new FormControl(),
    isActive: new FormControl(),
  })

  ngOnInit(): void {
    this.createFormBuild()
  }

  constructor(
    private fb : FormBuilder,
    private categoryService : CategoryService,
    private messageService : MessageService,
  ){}

  createFormBuild(){
    this.formGroup = this.fb.group({
      name: [this.sort,Validators.required],
      sortOrder : [null,Validators.required],
      parentId : [this.IdRoot,Validators.required],
      isActive : [this.isActive,Validators.required],
      visibility : [this.visibility,Validators.required],
      seoMD : [this.seo,Validators.required],
    })
    console.log(this.formGroup.value)
  }



  save(){
    this.isLoading = true;
    this.input = {
      name : this.formGroup.value.name,
      isActive : this.formGroup.value.isActive,
      sortOrder : this.formGroup.value.sortOrder,
      visibility : this.formGroup.value.visibility,
      parentId : this.formGroup.value.parentId,
      seoMetaDecription : this.formGroup.value.seoMD,
    }
    this.categoryService.create(this.input).subscribe(()=>{
      setTimeout(() => {    
        this.isLoading = false;
        this.display =false;
        this.messageService.add({severity:"success",summary:"Success",detail:"You have saved successfully!"})
      }, 2000);
    })  
  }

}
