import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{component: HomeComponent, path:""}, 
                        {component:AddCarComponent, path:"add"},
                        {component:EditCarComponent, path:"edit/:id"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
