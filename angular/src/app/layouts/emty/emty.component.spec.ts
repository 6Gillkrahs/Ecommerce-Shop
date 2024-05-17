import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmtyComponent } from './emty.component';

describe('EmtyComponent', () => {
  let component: EmtyComponent;
  let fixture: ComponentFixture<EmtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmtyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
