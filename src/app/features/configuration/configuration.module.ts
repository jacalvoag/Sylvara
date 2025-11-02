import { Component } from "@angular/core";

@Component({
  selector: 'app-configuration',  // Cambié de 'app-home' a 'app-configuration'
  standalone: true,  // Agregar
  templateUrl: './configuration.module.html',
  styleUrls: ['./configuration.module.css']
})
export class ConfigurationModule { }