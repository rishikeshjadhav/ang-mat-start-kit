import { Component, OnInit } from '@angular/core';
import { SideNavMenuItem } from '../../models/sidenav-menu-item';
import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  title: string;

  menuItems: SideNavMenuItem[] = [
    {
      routePath: '',
      routeTitle: 'Home',
      iconName: 'home',
      className: 'active',
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

  constructor(private constantsService: ConstantsService) {
    this.title = constantsService.APPTITLE;
  }

  ngOnInit() {
  }

  logout() {
    window.location.reload();
  }

}
