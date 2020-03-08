import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialImports } from './material-imports';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    materialImports
  ],
  exports: [
    CommonModule,
    FormsModule,
    materialImports
  ]
})
export class SharedModule { }
