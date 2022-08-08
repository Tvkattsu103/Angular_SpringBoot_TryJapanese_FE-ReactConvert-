import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { BodyComponent } from '../body.component';

@Component({
  selector: 'app-list-item-topic',
  templateUrl: './list-item-topic.component.html',
  styleUrls: ['./list-item-topic.component.css']
})
export class ListItemTopicComponent implements OnInit, OnChanges {
  @Input() topics: any;
  @Input() currentTopicName!: any;
  @Input() abc?: number;
  @Output() currentTopicNameChange = new EventEmitter<string>();
  // private body: BodyComponent;
  // @Input() changeTopic: any
  constructor() {
    // this.body = new BodyComponent();
   }

  ngOnInit(): void {
  }
  // changeTopic(event: Event, name: string, id: number): void {
  //   this.body.changeTopic(event, name, id);
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes")
    // this.currentTopicName = changes['currentTopicName'].currentValue;
  }

  changeTopic2(event: Event, title: string, id: number) {
    console.log(title);
    this.currentTopicName = title;
    this.currentTopicNameChange.emit(this.currentTopicName);
  }
}
