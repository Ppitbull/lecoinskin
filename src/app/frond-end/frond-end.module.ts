import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrondEndRoutingModule } from './frond-end-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './views/landing/landing.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { SwipperCustomModule} from './components/swipper/swipper-custom.module';
import { ProductsModule } from './components/products/products.module';
import { ContactComponent } from './components/contact/contact.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { NewLetterFormComponent } from './components/new-letter-form/new-letter-form.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    PreloaderComponent,
    ContactComponent,
    SocialLinkComponent,
    NewLetterFormComponent,
  ],
  imports: [
    CommonModule,
    FrondEndRoutingModule,
    SwipperCustomModule,
    ProductsModule
  ]
})
export class FrondEndModule { }
