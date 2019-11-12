import { Injectable } from "@angular/core";
import { Driver } from "../models/driver";
import { DRIVERS } from "src/app/mocks/mock-drivers";

@Injectable({
  providedIn: "root"
})
export class DriverService {
  constructor() {}
  getDriver(id: number): Driver {
    return DRIVERS[id];
  }
}
