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
  imports: [CommonModule],
  standalone: true,
  templateUrl: './my-project.module.html',
  styleUrls: ['./my-project.module.css']
})
export class MyProjectModule {
  projects: Project[] = [
    { id: 1, name: 'Rancho Cuba Libre', zones: 4, status: 'Activo' },
    { id: 2, name: 'Rancho Cuba Libre', zones: 4, status: 'Activo' },
    { id: 3, name: 'Rancho Cuba Libre', zones: 4, status: 'Activo' },
    { id: 4, name: 'Rancho Cuba Libre', zones: 4, status: 'Terminado' }
  ];

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