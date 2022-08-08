import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input()  abc!: number | string;
  @Output() abcChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.abc = Math.min(40, Math.max(8, +this.abc + delta));
    this.abcChange.emit(this.abc);
  }
}
