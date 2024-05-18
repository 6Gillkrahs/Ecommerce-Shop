import { Component, OnInit } from '@angular/core';
import { ProductDto } from '@proxy/products/dtos'
import { ProductService } from '@proxy/products'
import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { ConfirmationService } from 'primeng/api';
import { ProductAttributeDto } from '@proxy/attributes/dtos'
import { ProductAttributeService } from '@proxy/attributes'



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [ConfirmationService]
})
export class ProductComponent implements OnInit {

  products: ProductDto[] = [];

  productAttributes: ProductAttributeDto[] = [];

  input: PagedAndSortedResultRequestDto;

  inputProductAttribute: PagedAndSortedResultRequestDto;

  maxResultCount: number = 10;

  skipCount: number = 0;

  maxResultCountForAttribute: number = 10;

  skipCountForAttribute: number = 0;

  totalCount: number;

  isLoading: boolean = false;

  actionItems: any[] = [];

  addModel: boolean = false;

  viewModel :  boolean = false;

  selectedProduct : ProductDto;


  ngOnInit(): void {
    this.getProducts();
  }

  constructor(
    private readonly productService: ProductService,
    private readonly comfirmService : ConfirmationService
  ) {
  }

  getProducts() {
    this.input = {
      maxResultCount: this.maxResultCount,
      skipCount: this.skipCount
    }

    this.productService.getList(this.input).subscribe({
      next: (product) => {
        this.products = product.items
        this.totalCount = product.totalCount
        console.log(this.products)
      }
    })

  }

  

  onPageChange(event) {
    this.skipCount = event.page * this.maxResultCount;
    this.maxResultCount = event.rows;
    console.log(event);
    this.getProducts();
  }

  dropdownItemButton(product: ProductDto) {
    this.actionItems = [
      {
        label: "View",
        icon: 'pi pi-eye',
        command: () => {
          this.onView(product);
        }
      },
      {
        label: "Add items",
        icon: "pi pi-plus-circle",
        command : () => {
          this.openadd(product)
        }
      },
      {
        label: 'Edit',
        icon: 'pi pi-id-card',
        command: () => {
          // this.onEdit(product)
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-user-minus',
        command: () => {
          this.onDelete(product)
        }
      }
    ]

  }

  openNew(){
    this.addModel = true;
  }

  openadd(product : ProductDto){

  }



  onView(product: ProductDto) {
    this.viewModel = true;
    this.selectedProduct = product;
  }

  onDelete(product :  ProductDto){
    this.comfirmService.confirm({
      header:"Warning",
      message: "You want to delete " + product.code + " from database? " ,
      accept: ()=>{
        this.delete(product)
      }
    })
    
  }

  delete(product: ProductDto){
    this.productService.delete(product.id).subscribe({
      next: () => {
        this.getProducts()
      }
    })
  }

}
