import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  host:{
    '[class.item]':'true'
  }
})
export class ProductItemComponent implements OnInit {

  @Input() img:String="assets/img/shop/01.jpg"
  @Input() secondImg:String=""
  @Input() price:string="0"
  @Input() productName=""
  constructor() { }

  ngOnInit(): void {
  }

}
