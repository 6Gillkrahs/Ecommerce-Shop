import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductDto, CategoryLookupDto } from '@proxy/products/dtos'

import { ProductService } from '@proxy/products'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { CategoryDto } from '@proxy/categories/dtos'
import { CategoryService } from '@proxy/categories'
import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { ManufacturerDto, ManufacturerGetInput } from '@proxy/manufacturers/dtos'
import { ManufacturerService } from '@proxy/manufacturers'
import { MessageService } from 'primeng/api';
// import { UploadEvent } from 'primeng/fileupload';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}


@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrl: './add-pro.component.scss'
})
export class AddProComponent implements OnInit {

  @Input() visible: boolean;

  @Output() appClose: EventEmitter<any> = new EventEmitter();

  isLoading: boolean = false;

  manufacturers: ManufacturerDto[] = [];

  maxResultCount: number = 10;

  categories: CategoryDto[] = [];

  input: PagedAndSortedResultRequestDto;



  formGroup = new FormGroup({
    code: new FormControl(),
    categoryId: new FormControl(),
    attributeId: new FormControl(),
  })


  ngOnInit(): void {
    this.buildForm()
    this.getcategories()
    this.getmanufacturers()
  }

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private manufactureService: ManufacturerService,
    private messageService : MessageService
  ) {

  }

  buildForm() {
    this.formGroup = this.fb.group({
      code: [null, Validators.required],
      categoryId: [null, Validators.required],
      attributeId: [null, Validators.required]
    })
  }

  getcategories() {
    this.input = {
      maxResultCount: this.maxResultCount
    }
    this.categoryService.getList(this.input).subscribe((res) => {
      let root = this.convertListToTree(res.items);
      this.categories = root.children;
      console.log(this.categories)
    }
    )
  }

  getmanufacturers() {
    this.input = {
      maxResultCount: this.maxResultCount
    }
    this.manufactureService.getList(this.input).subscribe((res) => {
      this.manufacturers = res.items
    }
    )
  }

  completeNode(node: any, list: any[]) {
    node.children = list.filter(x => x['parentId'] == node.data.id).sort((a, b) => (a.sortOrder > b.sortOrder) ? 1 : (a.sortOrder < b.sortOrder) ? -1 : 0).map(x => {
      let childNode = {
        data: x,
        children: []
      };
      this.completeNode(childNode, list);
      return childNode;
    });
  }

  convertListToTree<T>(list: T[]) {

    let rootNode = { data: { id: "00000000-0000-0000-0000-000000000000" }, children: [] };
    this.completeNode(rootNode, list);

    return rootNode;
  }

  save() {
    this.input = {
      maxResultCount: 10,
      skipCount: 0

    }

    this.productService.getList(this.input).subscribe({
      next: (category) => {
        this.categories = category.items
      }
    })
  }

  uploadedFiles: any[] = [];
  onUpload(event:UploadEvent) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}



}
