// src/app/features/my-project/my-project.component.ts
import { Component, OnInit } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css']
})
export class MyProjectComponent implements OnInit {
  projects: Project[] = [];
  loading = true;
  textError: string = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
        
      },
      error: (err) => {
        console.error('Error cargando proyectos', err);
        this.loading = false;
        this.textError = 'Los datos no se cargaron'
      }
    });
  }
}