import { Component, OnInit } from '@angular/core';

import { CategoryDto, CategoryGetListInput } from '@proxy/categories/dtos'
import { CategoryService } from '@proxy/categories'
import { ManufacturerDto, ManufacturerGetInput } from '@proxy/manufacturers/dtos'
import { ManufacturerService } from '@proxy/manufacturers'
import { sizeOptions } from '@proxy/sizes'
import { ProductDto } from '@proxy/products/dtos'
import { ProductService } from '@proxy/products'
import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { ProductAttributeDto } from "@proxy/attributes/dtos";
import { ProductAttributeService } from "@proxy/attributes";
import { AttributeDto } from "@proxy/attributes/dtos";
import { AttributeService } from "@proxy/attributes";
import { ColorSizeDto } from "@proxy/color-sizes/dtos";
import {ColorSizeService } from "@proxy/color-sizes";



interface Product {
  id: string,
  price: string,
  attributes: { 
    id: string; 
    attributeName: string;
     value: string 
  }[] ,
}

interface Arr{
  id: string;
  name:string;
  value : string;
}


@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.scss'
})
export class ListproductComponent implements OnInit {
  categories: CategoryDto[] = [];

  manufacturers: ManufacturerDto[] = [];

  products: ProductDto[] = [];

  attributes : AttributeDto[] = [];

  productAttributes : ProductAttributeDto[] = [];

  allProducts : Product[] = [];

  colors : ColorSizeDto[] = [];

  inputCategory: CategoryGetListInput;

  inputManufacturer: ManufacturerGetInput;

  inputProduct : PagedAndSortedResultRequestDto;

  totalCount: number;

  maxResultCount: number = 10;

  SkipCount: number = 0;

  size = sizeOptions;


   ngOnInit(): void {
    this.getcategories();
    this.getManufacturer();
    this.getProducts();
    this.getColors();
  }

  constructor(
    private readonly categoryService: CategoryService,
    private readonly manufacturerService: ManufacturerService,
    private readonly productService: ProductService,
    private readonly productAttributeService : ProductAttributeService,
    private readonly attributeService : AttributeService,
    private readonly colorService : ColorSizeService

  ) {

  }

  getColors(){
    const input = {
      maxResultCount: 10,
      SkipCount : 0
    };

    this.colorService.getList(input).subscribe({
      next: (res) => {
        this.colors = res.items 
        console.log(this.colors)
      }
    })
  }

  getcategories() {
    this.inputCategory = {
      maxResultCount: this.maxResultCount,
      skipCount: this.SkipCount
    }

    this.categoryService.getList(this.inputCategory).subscribe({
      next: (category) => {
        this.categories = category.items;
      }
    })
  }

  getManufacturer() {
    this.inputManufacturer = {
      maxResultCount: this.maxResultCount,
      skipCount: this.SkipCount
    }

    this.manufacturerService.getList(this.inputManufacturer).subscribe({
      next: (manufacturer) => {
        this.manufacturers = manufacturer.items
      }
    })
  }

  getProducts() {
    this.inputProduct = {
      maxResultCount : this.maxResultCount,
      skipCount : this.SkipCount
    }

    this.productService.getList(this.inputProduct).subscribe({
      next: (product) => {
        this.products = product.items
        this.totalCount = product.totalCount;
        this.getProductAttributes()
      }
    })
    
  }


  getProductAttributes(){
    const input = {
      maxResultCount: 10,
      SkipCount : 0
    };
    
    this.productAttributeService.getList(input).subscribe({
      next : (res) => {
        this.productAttributes = res.items
        this.getall()
        
      }
    })
  }
  

  getAttributes(){
    const input = {
      maxResultCount: 10,
      SkipCount : 0
    };
    
    this.attributeService.getList(input).subscribe({
      next : (res) => {
        this.attributes = res.items
      }
    })
  }



  getall(){    
    for (const product of this.products) {
      const productAttributes = this.productAttributes.filter(
        (pa) => pa.productId === product.id
      ).map((pa) => ({
        id: pa.id,
        attributeName: pa.attributeName,
        value: pa.value,
      }));
      this.allProducts.push({
        id: product.id,
        price: "20", 
        attributes: productAttributes,
      });
    }
    console.log(this.allProducts)
  }


}
