import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-swipper-item',
  templateUrl: './swipper-item.component.html',
  styleUrls: ['./swipper-item.component.scss'],
  host:{
    '[class.swiper-slide]':'true'
  }
})
export class SwipperItemComponent implements OnInit,AfterViewInit {
  @Input() linkText:String="Shop Now"
  @Input() bgImg="assets/img/slider/slider-02.jpg"
  @Input() itemCategory:String='simple organic'
  @Input() link="#/"
  @Input() itemName=""
  @Input() itemDetail=""
  constructor(private host:ElementRef) { }
  

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.host.nativeElement.querySelector('.slider-content-area').style.backgroundImage=`url(${this.bgImg})`
  //   const bgSelector = $("[data-bg-img]");
  //   bgSelector.each(function (index, elem) {
  //     let element = $(elem),
  //       bgSource = element.data('bg-img');
  //     element.css('background-image', 'url(' + bgSource + ')');
  // });
  }

}
