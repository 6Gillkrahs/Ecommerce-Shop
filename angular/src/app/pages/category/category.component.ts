import { Component, OnInit } from '@angular/core';
import {CategoryDto,CategoryGetListInput,UpdateCategoryDto} from '@proxy/categories/dtos'
import {CategoryService} from '@proxy/categories'
import { ConfirmationService, MessageService, TreeNode } from 'primeng/api';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  providers:[ConfirmationService]
})
export class CategoryComponent implements OnInit{
  // categories : CategoryDto[] = [];
  categories! : TreeNode[];

  totalCount : number;

  input : CategoryGetListInput;

  category : CategoryDto;

  idRoot : string;

  maxResultCount: 100;

  isLoading = false;

  addmodel = false;

  editmodel =false;

  ngOnInit(): void {
    this.getcategories()
  }

  constructor(
    private categoryService:CategoryService,
    private comfirmationService :ConfirmationService,
    private messageService :MessageService
  ){
  }

  getcategories(){
    this.input = {
      maxResultCount : this.maxResultCount
    }
    this.categoryService.getList(this.input).subscribe((res)=>{
      let root = this.convertListToTree(res.items);
      this.categories = root.children;
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

  showAddModal(category : CategoryDto){
    this.addmodel = true;
    this.category = category;
    if(category == null){
      this.idRoot = "00000000-0000-0000-0000-000000000000"
    }else{
      this.idRoot = category.id
    }  
  }


  showEditModal(category : CategoryDto){
    this.editmodel = true;
    this.category = category;
    console.log(category)
    if(category == null){
      this.idRoot = "00000000-0000-0000-0000-000000000000"
    }else{
      this.idRoot = category.id
    }  
  }



  deleteMenu(category : CategoryDto){
    this.comfirmationService.confirm({
      message:"Are you sure that you want to delete?",
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      accept:()=>{
        this.delete(category)
      }
    })
  }

  delete(category : CategoryDto){
    this.categoryService.delete(category.id).subscribe(()=>{
      this.getcategories()
      this.messageService.add({
        severity:"success",
        summary:"Success",
        detail:"You deleted successfully!"
      })
    })
  }




}
