import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Car, DataBody } from "../interfaces";

@Injectable({
    providedIn: 'root'
  })

export class CarDataService {
    constructor(){}
    private _cars: DataBody<Array<Car>> = {} as DataBody<Array<Car>>
    
    public carSubject: Subject<DataBody<Array<Car>>> = new Subject<DataBody<Array<Car>>>()

    get cars(): DataBody<Array<Car>>{
        this._cars.data = new Array<Car>()
        let carStorage = localStorage.getItem('cars')
        if(carStorage !== null){
            this._cars = JSON.parse(carStorage)
        }
        return this._cars;
    }
    
    set cars(value: DataBody<Array<Car>>){
        this._cars = value
        localStorage.setItem('cars', JSON.stringify(value))
        this.carSubject.next(value)
    }
}