import { AfterViewInit, Component, OnInit } from '@angular/core';
// import Swiper from 'swiper';
declare var Swiper:any;

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss']
})
export class SwipperComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    
    let mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
    console.log(mySwiper)
  }

  ngOnInit(): void {
  }

}
