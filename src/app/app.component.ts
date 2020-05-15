import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../app/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Awtomobile Frontend";
  cars;

  budget = 10600;
  km = 10000;
  years = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  search() {
    this.apiService
      .search(this.budget, this.km, this.years)
      .subscribe((data) => {
        this.cars = data;
      });
  }
}
