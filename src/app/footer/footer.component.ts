import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faWhatsapp = faWhatsapp;

  constructor() { }

  ngOnInit() {
  }

}
