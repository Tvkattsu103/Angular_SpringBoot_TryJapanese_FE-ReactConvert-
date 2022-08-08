import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTopicComponent } from './item-topic.component';

describe('ItemTopicComponent', () => {
  let component: ItemTopicComponent;
  let fixture: ComponentFixture<ItemTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
