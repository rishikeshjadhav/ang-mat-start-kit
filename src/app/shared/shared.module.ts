import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialImports } from './material-imports';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [NavigationComponent, SidebarComponent],
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
