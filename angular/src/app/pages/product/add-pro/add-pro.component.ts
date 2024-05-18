import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductDto, CategoryLookupDto, CreateUpdateProduct } from '@proxy/products/dtos'

import { ProductService } from '@proxy/products'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { CategoryDto } from '@proxy/categories/dtos'
import { CategoryService } from '@proxy/categories'
import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { ManufacturerDto, ManufacturerGetInput } from '@proxy/manufacturers/dtos'
import { ManufacturerService } from '@proxy/manufacturers'
import { MessageService } from 'primeng/api';
import { ProductAttributeService } from '@proxy/attributes'
import { CreateProductAttribute } from "@proxy/attributes/dtos"




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

  createProductAttribute: CreateProductAttribute;

  createProduct: CreateUpdateProduct;

  productId: string;
  nameId: string = '733f199c-8f6d-dc7c-edbd-3a125959affa';
  descId : string = '36446411-0cae-812e-71b2-3a129c45eaaf'


  formGroup = new FormGroup({
    name: new FormControl(),
    categoryId: new FormControl(),
    sku: new FormControl(),
    manufacturerId: new FormControl(),
    desc : new FormControl()
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
    private messageService: MessageService,
    private readonly productAttributeService: ProductAttributeService
  ) {

  }

  buildForm() {
    this.formGroup = this.fb.group({
      name: [null, Validators.required],
      categoryId: [null, Validators.required],
      sku: [null, Validators.required],
      manufacturerId: [null, Validators.required],
      desc: [null,Validators.required]
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

  async save() {
    this.createProduct = {
      manufacturerId: this.formGroup.value.manufacturerId,
      productType: "n",
      sku: this.formGroup.value.sku,
      sortOrder: 1,
      visibility: true,
      isActive: true,
      categoryId: this.formGroup.value.categoryId
    }

    try {
      var product = await this.productService.create(this.createProduct).toPromise();

      for (let item in this.formGroup.value) {
        if (item == "name") {
          this.createProductAttribute = {
            productId: product.id,
            attributeId: this.nameId,
            value: this.formGroup.value.name
          }
          await this.productAttributeService.create(this.createProductAttribute).toPromise();
        }
        if (item == "desc") {
          this.createProductAttribute = {
            productId: product.id,
            attributeId: this.descId,
            value: this.formGroup.value.desc
          }
          await this.productAttributeService.create(this.createProductAttribute).toPromise();
        }
      }

      this.messageService.add({ severity: "success", summary: "Success", detail: "ok" });
    } catch (error) {
      console.error(error);
      // Xử lý lỗi nếu cần thiết
    }
  }

  uploadedFiles: any[] = [];
  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
