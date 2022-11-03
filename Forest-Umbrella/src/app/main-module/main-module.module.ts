import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './MainComponent/header/header.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
