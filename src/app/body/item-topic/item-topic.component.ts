import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BodyComponent } from './../body.component';

@Component({
  selector: 'app-item-topic',
  templateUrl: './item-topic.component.html',
  styleUrls: ['./item-topic.component.css']
})
export class ItemTopicComponent implements OnInit, OnChanges {
  @Input() title?: string;
  @Input() href?: string;
  @Input() active?: string;

  constructor() {
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
