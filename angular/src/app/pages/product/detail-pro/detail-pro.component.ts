import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductDto } from '@proxy/products/dtos'
import { ProductService } from '@proxy/products'
import { ProductAttributeDto } from '@proxy/attributes/dtos'
import { ProductAttributeService } from '@proxy/attributes'
import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { ProductTagService } from '@proxy/tags';
import { TagDto } from '@proxy/tags/dtos';


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

  tags : TagDto[] = [];

  ngOnInit(): void {
    this.getProductAttribute();
    this.gettags()
    console.log()
  }

  constructor(
    private productService : ProductService,
    private readonly productAttributeService: ProductAttributeService,
    private readonly productTagService: ProductTagService
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

  gettags(){
    this.productTagService.getProductTagsByProductId(this.product.id).subscribe({
      next: (tags) => {
        this.tags = tags.items
      }
    })
  }

  

}
