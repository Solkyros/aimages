import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
@Input () sideNavStatus: boolean = false;
sideNavItems = [
  {
    id: 0,
    name: 'Home',
    icon: 'fa-solid fa-house'
  },
  {
    id: 1,
    name: 'Upload',
    icon: 'fa-solid fa-upload'
  },
  {
    id: 2,
    name: 'Privacy',
    icon: 'fa-solid fa-lock'
  },
  {
    id: 3,
    name: 'About',
    icon: 'fa-solid fa-circle-info'
  },
  {
    id: 4,
    name: 'Contact',
    icon: 'fa-solid fa-phone'
  }
];

}
