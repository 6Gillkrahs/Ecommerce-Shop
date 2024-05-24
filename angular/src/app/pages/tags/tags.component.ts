import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { TagDto } from '@proxy/tags/dtos'
import { TagService } from '@proxy/tags'
import { ConfirmationService ,MessageService} from 'primeng/api';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
  providers: [ConfirmationService]
})
export class TagsComponent implements OnInit {

  tags : TagDto[] = [];

  maxResultCount: number = 10;

  skipCount: number = 0;

  isLoading : boolean = false;

  selectedTag : TagDto ;

  showModel : boolean = false;

  selectedTags! : TagDto[] | null;

  constructor(
    private tagService : TagService,
    private confirmationService : ConfirmationService,
    private messageService : MessageService
  ) { }

  ngOnInit(): void {
    this.gettags()
  }

  gettags() {
    const input = {
      maxResultCount: this.maxResultCount,
      skipCount: this.skipCount
    }
    this.tagService.getList(input).subscribe({
      next: (tags) => {
        this.tags = tags.items
      }
    })
  }

  onPageChange(event){
    this.skipCount = event.first;   
    this.gettags();
  }

  itemAction :any[] = []
  dropdownItemButton(tags: TagDto){
    this.itemAction = [
      {
        label : 'Edit',
        icon: 'pi pi-pen-to-square',
        command: () => {
          this.onEdit(tags)
        }
      },
      {
        label : 'Delete',
        icon : 'pi pi-trash',
        command : () => {
          this.onDelete(tags)
        }
      }
    ]
  }

  onEdit(tags : TagDto){
    this.selectedTag = tags;
    this.showModel = true;
  }

  onAdd(){
    this.selectedTag = {} as TagDto;
    this.showModel = true;
  }

  onDelete(tags : TagDto){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this tag?',
      accept: () => {
        this.deleteTag(tags);
      }
    })
  }

  deleteTag(tags : TagDto){
    this.tagService.delete(tags.id).subscribe({
      next: () => {
        this.showSuccessMessage('Tag deleted successfully');
        this.gettags();
      }
    })   
  }

  showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  deleteSelectedTags(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete the selected tags?',
      accept: () => {
        for(let i = 0; i < this.selectedTags.length; i++){
          this.deleteTag(this.selectedTags[i])
        }     
      }
    })
  }

}
