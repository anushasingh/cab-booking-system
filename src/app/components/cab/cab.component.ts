import { Component, OnInit } from "@angular/core";
import { Cab } from "src/app/models/cab";
import { CabService } from "src/app/services/cab.service";
import { CarService } from "src/app/services/car.service";
import { DriverService } from "src/app/services/driver.service";

@Component({
  selector: "app-cab",
  templateUrl: "./cab.component.html",
  styleUrls: ["./cab.component.scss"]
})
export class CabComponent implements OnInit {
  selectedCab: Cab;
  cabs: Cab[];

  constructor(
    private cabService: CabService,
    private carService: CarService,
    private driverService: DriverService
  ) {}

  ngOnInit() {
    this.getCabs();
  }

  onSelect(cab: Cab): void {
    this.selectedCab = cab;
  }

  getCabs(): void {
    const cabs: Cab[] = this.cabService.getCabs();
    console.log("cabs", cabs);
    console.log("cab 1 car", this.carService.getCar(cabs[0].carId));
    console.log("cab 1 driver", this.driverService.getDriver(cabs[0].driverId));
  }
}
