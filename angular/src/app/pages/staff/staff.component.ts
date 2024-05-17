import { Component, OnInit } from '@angular/core';
import {  UserMenuService } from '@abp/ng.theme.shared';
import type { GetIdentityUsersInput, IdentityRoleDto, IdentityUserCreateDto, IdentityUserDto, IdentityUserUpdateDto, IdentityUserUpdateRolesDto } from '@proxy/volo/abp/identity/models';
import {UserManagementService} from '@proxy/user-manage-ment'
import {UserData} from 'src/app/shared/UserManager/model/usermanager.model'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';




@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss',
  providers: [ConfirmationService]
})
export class StaffComponent implements OnInit{
  users : IdentityUserDto[] = [];

  user :  IdentityUserDto;

  totalCount : number;

  roles : IdentityRoleDto[] =  [];

  role : IdentityRoleDto;

  input : GetIdentityUsersInput;

  updateRole : IdentityUserUpdateRolesDto;

  updateuser : IdentityUserUpdateDto;

  skipCount = 0;

  maxResultCount = 10;

  filter = 'name';

  isLoading: boolean = false;

  isLoadingButton : boolean = false;

  actionItems: any[] = [];

  displayUserContainer : boolean = false;

  userDetailData : UserData;

  selectedUser : any[] = [];

  // formGrou: FormGroup;
  formGrou = new FormGroup({
    username : new FormControl(),
    name: new FormControl(),  
    phone: new FormControl(),
    email: new FormControl(),
    surname: new FormControl(),
    createAt: new FormControl(),
    role: new FormControl(),  
  })

  



  ngOnInit(): void {
    this.getusers();
    this.createFormBuild();   
  }

  constructor(
    private usermanagementService : UserManagementService,
    private fb: FormBuilder,
    private messageService :MessageService,
    private comfirmationService :ConfirmationService
  ){
    
  }

  get f() { return this.formGrou.controls; }

  getusers(){
    this.isLoading = true;

    this.input = {
      skipCount : this.skipCount,
      maxResultCount : this.maxResultCount
    }
    this.usermanagementService.getList(this.input).subscribe({
      next: (user) => {     
        this.isLoading =false;
        this.users = this.getall(user.items);
        this.totalCount = user.totalCount;
      }
    })
  }

  getall(users) {  
    for (const user of users) {
      this.usermanagementService.getRoles(user.id).subscribe((res) => {  
        user.role = res.items[0]?.name; 
      });
    }
    return users;
  }

  onPageChange(event) {
    this.skipCount = event.page * this.maxResultCount;
    this.maxResultCount = event.rows;
    console.log(event);
    this.getusers();
  }

  dropdownItemButton(user){
    if(user.role == "Admin"){
      this.actionItems =[
        {
          label:"View",
          icon : 'pi pi-eye',
          command: () => { this.onView(user)}
        }
      ]
    }else{
      this.actionItems =[
        {
          label:"View",
          icon : 'pi pi-eye',
          command: () => { this.onView(user)}
        },
        {
          label:"Change Per",
          icon : 'pi pi-id-card',
          command: () => { this.onChanges(user)}
        },
        {
          label:"Delete",
          icon : 'pi pi-user-minus',
          command: () => { this.confirmDelete(user)}
        },
  
      ]
    }
    
    
  }

  async getuser(data){  
    if(data.id){
      this.isLoading = true;
      const roles = await this.usermanagementService.getRoles(data.id).toPromise(); 
      const role = roles.items[0];
      this.usermanagementService.get(data.id).subscribe({
        next: (user) => {       
          this.isLoading = false;          
          this.formGrou.setValue({
            username: user.userName,
            name : user.name,
            phone : user.phoneNumber,
            surname : user.surname,
            email : user.email,
            createAt : user.creationTime,
            role: role.name
          })
        }
      })
    }  
  }

  onView(user){
    this.displayUserContainer =true;
    const data = {
      header : "Detail",
      active: "view",
      id: user.id
    };
    this.userDetailData = data
    this.getuser(data)
  }

  closeUserContainer(event) {
    if (event) {
      this.getusers();
      this.displayUserContainer = false;
    } else {
      this.displayUserContainer = false;
    }
  }

  createFormBuild(){
    this.formGrou = this.fb.group({
      username: [this.user, [Validators.required]],
      name: [null, [Validators.required]],
      surname: [null, Validators.required],
      phone: [null],
      email: [null],
      role: [null],
      createAt: [null],
    });
  }

  onChanges(user){
    this.isLoading = true;
    if(user.role == "Client"){
      this.updateRole = {
        roleNames : ["Staff"]
      }
      this.usermanagementService.updateRoles(user.id,this.updateRole).subscribe(()=>{
        this.messageService.add({severity:'success',summary:"Success",detail:"You have changed successfully"})
        this.getusers();
        this.isLoading = false;
      })
    }else{
      this.updateRole = {
        roleNames : ["Client"]
      }
      this.usermanagementService.updateRoles(user.id,this.updateRole).subscribe((res)=>{
        this.messageService.add({severity:'success',summary:"Success",detail:"You have changed successfully"})
        this.getusers();
        this.isLoading = false;
      })
    }
  
    
  }

  confirmDelete(user){
    this.comfirmationService.confirm({
      message: "Are You Sure?",
      accept : () =>{
        console.log("hello")
        this.delete(user)
      },
    });
  }

  delete(user){
    if(user.id){
      this.usermanagementService.delete(user.id).subscribe({
        next: ()=>{
          this.messageService.add({severity:"success",summary:"success",detail:"You have deleted successfully"})
          this.getusers()
        },
        error: ()=>{
          this.messageService.add({severity:"error",summary:"error",detail:"You have falded"})
        }
        
      })
    }else{
      this.messageService.add({severity:"error",summary:"error",detail:"You have falded"})
    }
  }

  

  

  

}
