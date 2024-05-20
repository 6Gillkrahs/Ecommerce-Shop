import { Component, OnInit } from '@angular/core';

import { CategoryDto, CategoryGetListInput } from '@proxy/categories/dtos'
import { CategoryService } from '@proxy/categories'
import { ManufacturerDto, ManufacturerGetInput } from '@proxy/manufacturers/dtos'
import { ManufacturerService } from '@proxy/manufacturers'
import { sizeOptions } from '@proxy/sizes'
import { ProductDto } from '@proxy/products/dtos'
import { ProductService } from '@proxy/products'
import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.scss'
})
export class ListproductComponent implements OnInit {
  categories: CategoryDto[] = [];

  manufacturers: ManufacturerDto[] = [];

  products: ProductDto[] = [];

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
  }

  constructor(
    private readonly categoryService: CategoryService,
    private readonly manufacturerService: ManufacturerService,
    private readonly productService: ProductService,
  ) {

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
      }
    })
  }


}
