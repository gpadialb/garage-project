import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { AddCarComponent } from './add-car/add-car.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CardCarComponent } from './card-car/card-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    AddCarComponent,
    HeaderComponent,
    HomeComponent,
    CardCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
