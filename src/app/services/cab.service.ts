import { Injectable } from "@angular/core";
import { CABS } from "src/app/mocks/mock-cabs";
import { Cab } from "src/app/models/cab";

@Injectable({
  providedIn: "root"
})
export class CabService {
  constructor() {}
  getCabs(): Cab[] {
    return CABS;
  }
}
