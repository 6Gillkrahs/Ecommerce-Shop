import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductDto } from '@proxy/products/dtos'
import { ProductService } from '@proxy/products'
import { ProductAttributeDto } from '@proxy/attributes/dtos'
import { ProductAttributeService } from '@proxy/attributes'
import { PagedAndSortedResultRequestDto } from '@abp/ng.core';


@Component({
  selector: 'app-detail-pro',
  templateUrl: './detail-pro.component.html',
  styleUrl: './detail-pro.component.scss'
})
export class DetailProComponent implements OnInit{

  @Input() visible : boolean;

  @Input() product : ProductDto;

  @Output() appClose : EventEmitter<any> = new EventEmitter()

  productAttributes: ProductAttributeDto[] = [];

  input: PagedAndSortedResultRequestDto;

  isLoading: boolean = false;

  maxResultCount: number = 10;

  skipCount: number = 0;

  totalCount : number;

  ngOnInit(): void {
    this.getProductAttribute();
    console.log()
  }

  constructor(
    private productService : ProductService,
    private readonly productAttributeService: ProductAttributeService
  ) {
    
  }

  getProductAttribute() {
    this.input = {
      maxResultCount: this.maxResultCount,
      skipCount: this.skipCount
    }
    
    this.productAttributeService.getAllProductAttributebyProductIdByProductId(this.product.id).subscribe({
      next: (productAttribute) => {
        this.productAttributes = productAttribute.items
        this.totalCount = productAttribute.totalCount
        console.log(this.productAttributes)
      }
    })
  }

  

}
