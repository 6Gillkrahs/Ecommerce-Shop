import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {ManufacturerDto} from '@proxy/manufacturers/dtos'
import { ProductService} from "@proxy/products"
import { ProductDto } from "@proxy/products/dtos"

@Component({
  selector: 'app-detail-manu',
  templateUrl: './detail-manu.component.html',
  styleUrl: './detail-manu.component.scss'
})
export class DetailManuComponent implements OnInit{

  @Input() visible :boolean;

  @Input() manufacturer : ManufacturerDto;

  @Output() appClose : EventEmitter<any> = new EventEmitter();

  products : ProductDto[] = [];

  totalCount : number;


  ngOnInit(): void {
    this.getAllProductByManufacturer()
  }

  constructor(
    private readonly productService : ProductService
  ){

  }

  getAllProductByManufacturer(){
    this.productService.getAllByManufacturerIdByManufacturerId(this.manufacturer.id).subscribe({
      next: (product) => {
        this.products = product.items;
        this.totalCount = product.totalCount
      }
    })
  }

  

}
