import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public search(budget, km, years) {
    return this.httpClient.post(`https://pacific-dawn-38139.herokuapp.com/search`, [{
      "budget": budget,
      "km": km,
      "years": years,
    }]);
  }

  public getAllVehicles() {
    return this.httpClient.get(`https://pacific-dawn-38139.herokuapp.com/vehicles`);
  }
}
