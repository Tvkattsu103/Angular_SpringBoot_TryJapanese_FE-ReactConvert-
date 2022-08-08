import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemTopicComponent } from './list-item-topic.component';

describe('ListItemTopicComponent', () => {
  let component: ListItemTopicComponent;
  let fixture: ComponentFixture<ListItemTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
