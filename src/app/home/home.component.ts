import { Component, OnInit } from '@angular/core';
import { Car } from '../core/interfaces';
import { CarDataService, CarService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private carService: CarService,
              private carDataService: CarDataService) { }
  
  cars: Array<Car> = new Array<Car>()

  ngOnInit(): void {
    this.cars = this.carService.findAll()
    this.carDataService.carSubject.subscribe( data =>{
      this.cars = data.data
    })
  }

  filter(objFilter: Array<Car>): void{
    this.cars = objFilter
  }
}
