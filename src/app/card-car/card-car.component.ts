import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../core/interfaces';
import { CarService } from '../core/services';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent implements OnInit {

  @Input()
  carValue: Car = {} as Car 

  constructor(private carService: CarService) { }
  
  ngOnInit(): void {
  }

  delete(): void {
    this.carService.delete(this.carValue.id)
  }
}
