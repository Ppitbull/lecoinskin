import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrondEndRoutingModule } from './frond-end-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './views/landing/landing.component';
import { PreloaderComponent } from './components/preloader/preloader.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule,
    FrondEndRoutingModule
  ]
})
export class FrondEndModule { }
