import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TagDto } from '../../../proxy/tags/dtos/models';
import { TagService } from '../../../proxy/tags';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-showmodel',
  templateUrl: './showmodel.component.html',
  styleUrl: './showmodel.component.scss'
})
export class ShowmodelComponent  implements OnInit{

  @Input() visible : boolean = false;

  @Input() Tags : TagDto;

  @Output() appClose : EventEmitter<any> = new EventEmitter();

  @Output() tagsChanged = new EventEmitter<any>();

  formGroup = new FormGroup({
    label : new FormControl(),
    slug :  new FormControl(),
  });


  isLoading : boolean = false;


  constructor(
    private f : FormBuilder,
    private tagService : TagService,
    private messageService : MessageService

  ) { }

  ngOnInit(): void {
    this.buildForm()
    this.getValue()
    if(this.Tags == null){
      console.log("object is null")
    }
    console.log(this.tagsChanged)
  }

  getValue(){
    if(this.Tags){
      this.formGroup.patchValue(this.Tags)
    }
  }

  save() {
    if (this.formGroup.invalid) {
      this.showErrorMessage('Form is invalid');
      return;
    }

    this.isLoading = true;
    if (this.Tags.id) {
      this.tagService.update(this.Tags.id, this.formGroup.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.showSuccessMessage('Tag Updated');
          this.tagsChanged.emit();
          this.appClose.emit();
        },
        error: (err) => {
          this.isLoading = false;
          this.showErrorMessage('Error updating tag');
        }
      });
    } else {
      this.tagService.create(this.formGroup.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.showSuccessMessage('Tag Created');
          this.tagsChanged.emit();
          this.appClose.emit();
        },
        error: (err) => {
          this.isLoading = false;
          this.showErrorMessage('Error creating tag');
          
        }
      });
    }
  }

  buildForm(){
    this.formGroup = this.f.group({
      label : [,Validators.required],
      slug : [,Validators.required],
    })
  }

  showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showErrorMessage(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }





  


}
