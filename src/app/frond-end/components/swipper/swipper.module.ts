import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipperComponent } from './swipper.component';
import { SwipperItemComponent } from './swipper-item/swipper-item.component';



@NgModule({
  declarations: [
    SwipperComponent,
    SwipperItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SwipperComponent,
    SwipperItemComponent
  ]
})
export class SwipperModule { }
