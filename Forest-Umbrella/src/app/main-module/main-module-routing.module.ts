import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { AboutUsComponent } from './MainComponent/about-us/about-us.component';
import { ContactComponent } from './MainComponent/contact/contact.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { ServicesComponent } from './MainComponent/services/services.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,children:[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"service",component:ServicesComponent},
  {path:"about",component:AboutUsComponent},
  {path:"contact",component:ContactComponent}

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
