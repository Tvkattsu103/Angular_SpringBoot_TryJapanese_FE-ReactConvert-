import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  searchTopic = '';
  searchWord = '';
  currentTopicName = 'all';
  currentTopicID = 0;
  fontSizePx = 42;
  abcd = 42;
  topics = [
    {
      id: '1',
      name: 'Tuan',
    },
    {
      id: '2',
      name: 'Vy',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // changeTopic = (event: Event, name: string, id: number) => {
  //   event.preventDefault();
  //   this.currentTopicName = name;
  //   this.currentTopicID = id;
  //   if (id !== 0) {
  //     // findAllWordsByTopic(id, currentPage);
  //   } else {
  //     // setCurrentPage(1);
  //     // findAllWords(currentPage);
  //   }
  // };
}
