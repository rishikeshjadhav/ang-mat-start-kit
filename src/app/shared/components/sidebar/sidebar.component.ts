import { Component, OnInit } from '@angular/core';
import { SideNavMenuItem } from '../../models/sidenav-menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: SideNavMenuItem[] = [
    {
      routePath: '',
      routeTitle: 'Home',
      iconName: 'home',
      className: '',
      canSkip: false,
      hasBadge: false
    },
    {
      routePath: '',
      routeTitle: 'Components',
      iconName: 'apps',
      className: '',
      canSkip: false,
      hasBadge: true
    },
    {
      routePath: '',
      routeTitle: 'Forms',
      iconName: 'content_paste',
      className: '',
      canSkip: false,
      hasBadge: false
    },
    {
      routePath: '',
      routeTitle: 'Tables',
      iconName: 'grid_on',
      className: '',
      canSkip: false,
      hasBadge: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  logout() {
    window.location.reload();
  }

}
