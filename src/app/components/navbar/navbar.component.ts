import { Component, OnInit } from '@angular/core';

interface NavItem {
  text: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo = '/assets/bnp.jpg';
 // logo = '/assets/logo_superquiz.png';

  navItems: NavItem[] = [
   { text: 'Accueil', link: 'home' },
    { text: 'Methods', link: 'methods' },
    { text: 'Search', link: 'searchForm' },
   { text: 'Login', link: 'login' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
