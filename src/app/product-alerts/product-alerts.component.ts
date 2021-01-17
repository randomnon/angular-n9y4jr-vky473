import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})

//The @Component() definition also exports the class, //ProductAlertsComponent, which handles functionality for the //component.
export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}
