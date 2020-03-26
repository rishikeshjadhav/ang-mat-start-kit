import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { materialImports } from './material-imports';
import { SharedRoutingModule } from './shared-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavBarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavigationComponent,
    SidebarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    materialImports,
    SharedRoutingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    materialImports,
    SharedRoutingModule,
    // Components
    NavigationComponent
  ]
})
export class SharedModule { }
