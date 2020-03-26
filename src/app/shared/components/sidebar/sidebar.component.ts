import { Component, OnInit } from '@angular/core';
import { SideNavMenu } from '../../models/sidenav-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: SideNavMenu[] = [
    {
      routePath: '',
      routeTitle: 'Dashboard',
      iconName: 'dashboard',
      className: '',
      canSkip: false,
    },
    {
      routePath: '',
      routeTitle: 'Components',
      iconName: 'apps',
      className: '',
      canSkip: true,
    },
    {
      routePath: '',
      routeTitle: 'Forms',
      iconName: 'content_paste',
      className: '',
      canSkip: false,
    },
    {
      routePath: '',
      routeTitle: 'Tables',
      iconName: 'grid_on',
      className: '',
      canSkip: false,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  logout() {
    window.location.reload();
  }

}
