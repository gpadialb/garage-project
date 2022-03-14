import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Car } from '../core/interfaces';
import { Filter } from '../core/interfaces/filter-interface';
import { CarService } from '../core/services';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output()
  filterEvent: EventEmitter<Array<Car>> = new EventEmitter<Array<Car>>()

  filterValue: Filter = {} as Filter

  filterForm = new FormGroup({
    brand: new FormControl(this.filterValue.brand, []),
    model: new FormControl(this.filterValue.model, []),
    year: new FormControl(this.filterValue.year, []),
    color: new FormControl(this.filterValue.color, []),
    price: new FormControl(this.filterValue.price, [])
  })

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.filterValue.brand = ""
    this.filterValue.model = ""
    this.filterValue.year = 0
    this.filterValue.color = ""
    this.filterValue.price = 0
  }

  filter(): void{
    let cars: Array<Car>
    cars = this.carService.find(this.filterValue)
    this.filterEvent.emit(cars)
  }
}
