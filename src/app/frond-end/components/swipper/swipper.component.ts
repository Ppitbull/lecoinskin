import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SwipperItemComponent } from './swipper-item/swipper-item.component';

declare var Swiper:any;


@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss']
})
export class SwipperComponent implements OnInit, AfterViewInit {

  @ViewChildren(SwipperItemComponent) swipperItem:QueryList<SwipperComponent>;
  constructor() { }

  ngAfterViewInit(): void {   
    
    let mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: true,
      effect: 'fade',
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
    })
    // document.querySelectorAll("app-swipper-item").forEach((item)=>item.classList.add('swiper-slide'))
  }

  ngOnInit(): void {
  }

}
