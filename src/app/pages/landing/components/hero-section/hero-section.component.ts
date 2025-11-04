// src/app/pages/landing/components/hero-section/hero-section.component.ts

import { Component, Input } from '@angular/core';
import { HeroData } from 'src/app/core/models/data.models'; // Asume un modelo de datos

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  // Puedes usar @Input() para recibir datos del componente padre o inyectar un servicio
  // Ejemplo de datos duros que deberías reemplazar con tus propios textos e imagen:
  data: HeroData = {
    title: 'La Solución que tu Negocio Necesita',
    subtitle: 'Simplifica tus procesos y aumenta tu productividad hoy mismo.',
    ctaButtonText: '¡Comienza Ahora!',
    imageUrl: 'assets/images/hero-image.png'
  };

  onCtaClick() {
    console.log('Botón CTA presionado');
    // Lógica para redirigir, abrir un modal, etc.
  }
}

// Ejemplo de Interfaz (modelo de datos en src/app/core/models/data.models.ts)
export interface HeroData {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  imageUrl: string;
}