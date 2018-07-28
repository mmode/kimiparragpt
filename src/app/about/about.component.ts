import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faArrowDown = faArrowDown;

  reviews = [
    {
      img: '../../assets/about.jpg',
      customer: 'Nicola',
      // tslint:disable-next-line:max-line-length
      content: 'Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      img: '../../assets/header.jpg',
      customer: 'Josy',
      content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.'
    },
    {
      img: '../../assets/header2.jpg',
      customer: 'Mark',
      // tslint:disable-next-line:max-line-length
      content: 'in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
