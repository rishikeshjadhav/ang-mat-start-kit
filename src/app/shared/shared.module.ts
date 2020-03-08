import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialImports } from './material-imports';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialImports
  ],
  exports: [
    materialImports
  ]
})
export class SharedModule { }
