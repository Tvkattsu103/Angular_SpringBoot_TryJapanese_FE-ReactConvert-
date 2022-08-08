import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  auth = {
    isLoggedIn : true,
    username: 'Tuan',
  }
  imageSrc = 'assets/img/navbrand.jpg';
  imageAlt = 'navbrand';
  constructor() {}

  ngOnInit(): void {}
}
