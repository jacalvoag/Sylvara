// src/app/pages/landing/landing.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  // Si usas componentes standalone, no necesitas módulo. Asumo modulos.
})
export class LandingComponent {
  // Aquí podrías definir data global si fuera necesario, pero lo ideal es inyectarla
  // en los componentes hijos o usar modelos de datos (interfaces).
}