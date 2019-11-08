import { Injectable } from "@angular/core";
import { Car } from "../models/car";
import { CARS } from "../mocks/mock-cars";

@Injectable({
  providedIn: "root"
})
export class CarService {
  constructor() {}
  getCar(id: number): Car {
    return CARS[id];
  }
}
