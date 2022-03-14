import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from '../core/interfaces';
import { CarService } from '../core/services';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car = {} as Car
  
  constructor(private carService: CarService, 
              private router: Router) { }
  carForm = new FormGroup({
    brand: new FormControl(this.car.brand, [
      Validators.required
    ]),
    model: new FormControl(this.car.model, [
      Validators.required
    ]),
    year: new FormControl(this.car.year, [
      Validators.required
    ]),
    color: new FormControl(this.car.color, [
      Validators.required
    ]),
    price: new FormControl(this.car.price, [
      Validators.required
    ])
  })
  ngOnInit(): void {
  }
  save(): void{
    if( !this.carForm.valid ) return
    this.carService.save(this.car) 
    this.router.navigate(['/'])
  }
}
