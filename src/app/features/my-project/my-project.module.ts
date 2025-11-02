import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Project {
  id: number;
  name: string;
  zones: number;
  status: 'Activo' | 'Terminado';
}

@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-project.module.html',
  styleUrl: './my-project.module.css'
})
export class MyProjectModule {
  projects: Project[] = [];

  addProject(): void {
    console.log('Añadir proyecto');
  }

  openMenu(projectId: number, event: Event): void {
    event.stopPropagation();
    console.log('Abrir menú del proyecto:', projectId);
  }

  openProject(projectId: number): void {
    console.log('Abrir proyecto:', projectId);
  }
}