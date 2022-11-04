import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './MainComponent/header/header.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { FooterComponent } from './MainComponent/footer/footer.component';
import { AboutUsComponent } from './MainComponent/about-us/about-us.component';
import { ServicesComponent } from './MainComponent/services/services.component';
import { ContactComponent } from './MainComponent/contact/contact.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
