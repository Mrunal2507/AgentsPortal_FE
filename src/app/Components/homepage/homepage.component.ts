import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  activeLink: string = 'dashboard'; 

  setActiveLink(linkName: string) {
    this.activeLink = linkName;
  }

}
