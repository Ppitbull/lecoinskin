import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipperComponent } from './swipper.component';
import { SwipperItemComponent } from './swipper-item/swipper-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SwipperComponent,
    SwipperItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SwipperComponent,
    SwipperItemComponent
  ]
})
export class SwipperCustomModule { }
