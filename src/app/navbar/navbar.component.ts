import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faCalendarAlt = faCalendarAlt;
  faTimes = faTimes;
  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
