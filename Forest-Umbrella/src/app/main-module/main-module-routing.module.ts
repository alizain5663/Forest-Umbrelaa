import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { HomeComponent } from './MainComponent/home/home.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,children:[
  {path:"",component:HomeComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
