import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../core/interfaces';
import { CarService } from '../core/services';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  car: Car = {} as Car
  id: number = -1

  constructor(private carService: CarService, 
              private router: Router,
              private routerActivated: ActivatedRoute) { }
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
    this.id = this.routerActivated.snapshot.params['id']
    this.car = this.carService.findById(this.id)
  }

  edit(): void{
    if( !this.carForm.valid ) return
    this.carService.uptade(this.car, this.id)

    this.router.navigate(['/'])
  }
}