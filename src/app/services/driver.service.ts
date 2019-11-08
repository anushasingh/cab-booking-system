import { Injectable } from "@angular/core";
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
