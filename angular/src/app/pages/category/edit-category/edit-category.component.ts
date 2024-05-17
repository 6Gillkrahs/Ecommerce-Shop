import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CategoryDto,CategoryGetListInput} from '@proxy/categories/dtos'
import {CategoryService} from '@proxy/categories'
import { ConfirmationService, MessageService } from 'primeng/api';
import { UpdateCategoryDto} from '../../../proxy/categories/dtos/models';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss',
  providers: [ConfirmationService]
})
export class EditCategoryComponent implements OnInit{
  
  @Input() display : boolean ;

  @Input() IdRoot : string;

  @Input() isLoading: boolean = false;

  @Output() appClose : EventEmitter<any> = new EventEmitter();

  visibility : boolean;

  isActive : boolean;

  input : UpdateCategoryDto;

  sort : number;

  seo : string;

  category : CategoryDto;

  formGroup = new FormGroup({
    name : new FormControl(),
    sortOrder : new FormControl(),
    parentId : new FormControl(),
    seoMD : new FormControl(),
    visibility : new FormControl(),
    isActive: new FormControl(),
    slug: new FormControl()
  })

  ngOnInit(): void {
    this.getCategory()
    this.createFormBuild()
    this.setvalue()
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
      slug : [null,Validators.required]
    })
  }

  setvalue(){
    this.formGroup.setValue({
      name: this.category.name,
      sortOrder : this.category.sortOrder,
      parentId: this.IdRoot,
      isActive: this.category.isActive,
      visibility : this.category.visibility,
      seoMD: this.category.seoMetaDecription,
      slug: this.category.slug
    })
  }

  getCategory(){
    this.categoryService.get(this.IdRoot).subscribe({
      next: (category)  => {
        this.category = category;
        console.log( this.category)
      } 
    })
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
      slug :  this.formGroup.value.slug
    }
    console.log(input)
    this.categoryService.update(this.IdRoot,this.input).subscribe(()=>{
      setTimeout(() => {    
        this.isLoading = false;
        this.display =false;
        this.messageService.add({severity:"success",summary:"Success",detail:"You have edited successfully!"})
      }, 2000);
    })  
  }

}
