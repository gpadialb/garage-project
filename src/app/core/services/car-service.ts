import { Injectable } from "@angular/core";
import { Car, DataBody } from "../interfaces";
import { Filter } from "../interfaces/filter-interface";
import { CarDataService } from "./car-data-service";

@Injectable({
    providedIn: 'root'
  })

export class CarService {
  constructor(private carDataService: CarDataService){}

  public save(car:Car): void {
    let cars = this.carDataService.cars
    car.id = cars.data.length
    cars.data.push(car)
    this.carDataService.cars = cars
  }
  public findAll(): Array<Car>{
    return this.carDataService.cars.data
  }
  public findById(id: number): Car{
    let idAux = this.findIndex(this.carDataService.cars.data, id)
    if(idAux > -1){
      return this.carDataService.cars.data[idAux]
    }
    return {} as Car
  }
  public find(objFilter: Filter): Array<Car>{
    return this.carDataService.cars.data.filter(car =>  
      car.brand.toUpperCase() == objFilter.brand.toUpperCase() ||
      car.model.toUpperCase() == objFilter.model.toUpperCase() ||
      car.year == objFilter.year ||
      car.color.toUpperCase() == objFilter.color.toUpperCase() ||
      car.price == objFilter.price
    )
  }
  public uptade(car:Car, id:number): void{
    let cars = this.carDataService.cars
    let idAux = this.findIndex(cars.data, id)
    if(idAux > -1){
      cars.data[id] = car
      this.carDataService.cars = cars
    }
  }
  public delete(id: number): void{
    let carAux: DataBody<Array<Car>> = this.carDataService.cars
    let idAux = this.findIndex(carAux.data, id)
    if(idAux > -1){
      carAux.data.splice(idAux, 1)
      this.carDataService.cars = carAux
    }
  }

  private findIndex(cars: Array<Car>, id: number): number{
    return cars.findIndex(car => car.id == id)
  }
}