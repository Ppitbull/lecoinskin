import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrondEndRoutingModule } from './frond-end-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './views/landing/landing.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { SwipperModule } from './components/swipper/swipper.module';
import { ProductsModule } from './components/products/products.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    PreloaderComponent,
  ],
  imports: [
    CommonModule,
    FrondEndRoutingModule,
    SwipperModule,
    ProductsModule
  ]
})
export class FrondEndModule { }
