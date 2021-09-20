import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  constructor() { }
   ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var product = $(".product-slider");
        product.owlCarousel({
          autoplay: false,
          smartSpeed: 1000,
          nav: true,
          dots: false,
          margin: 0,          
        });
  }

}
