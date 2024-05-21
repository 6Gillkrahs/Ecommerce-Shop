import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductAttributeDto } from "@proxy/attributes/dtos";
import { ProductAttributeService } from "@proxy/attributes";
import { ProductDto } from '@proxy/products/dtos'
import { ProductService } from '@proxy/products'
import { ColorSizeDto } from "@proxy/color-sizes/dtos";
import {ColorSizeService } from "@proxy/color-sizes";
import { sizeOptions } from '@proxy/sizes'

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent implements OnInit{

  productAttributes : ProductAttributeDto[] = [];

  productId : string;

  product : ProductDto;

  color : ColorSizeDto[] = [];

  size = sizeOptions;

  colorProduct : string[]= [];
  
  sizeProduct : number[] = [];


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });
    this.getProductAttributes();
    this.getProduct();
    this.getColor();
    // console.log(this.size)
  }

  constructor(
    private route: ActivatedRoute,
    private readonly productAttributeService : ProductAttributeService,
    private readonly productService : ProductService,
    private readonly colorSizeService : ColorSizeService
  ) {}

  getProductAttributes(){   
    this.productAttributeService.getAllProductAttributebyProductIdByProductId(this.productId).subscribe({
      next : (res) => {
        this.productAttributes = res.items;
        console.log(this.productAttributes)
      }
    })
  }

  getColor(){
    this.colorSizeService.getColorSizesByProductIdByProductId(this.productId).subscribe({
      next : (res) => {
        this.color = res;
        console.log(this.color)
        this.color.forEach((item) => {
          if(this.colorProduct.includes(item.color)){
            return;
          }
          this.colorProduct.push(item.color)
        })
        this.color.forEach((item) => {
          if(this.sizeProduct.includes(item.size)){
            return;
          }
          this.sizeProduct.push(item.size)
        })
        console.log(this.colorProduct)
        console.log(this.sizeProduct)
      }
    })
  }

  getProduct(){
    this.productService.get(this.productId).subscribe({
      next : (res) => {
        this.product = res;
        console.log(this.product)
      }
    })
  }

  getSizeToView(size : number){
    return this.size.find(x => x.value == size).key; 
  }


}
