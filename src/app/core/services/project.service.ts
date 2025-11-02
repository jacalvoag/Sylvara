import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {


    private mockProjects: Project[] = [
        { id: 1, name: 'Maíz Primavera 2025', zones: 12, status: 'Activo' },
        { id: 2, name: 'Tomate Invernadero', zones: 8, status: 'Activo' },
        { id: 3, name: 'Frijol Secano 2024', zones: 20, status: 'Terminado' },
        { id: 4, name: 'Café Altura', zones: 15, status: 'Activo' },
    ];

    getProjects(): Observable<Project[]> {
        return of(this.mockProjects).pipe(
        delay(300)
    );
    }

    getProjectById(id: number): Observable<Project | undefined> {
        const project = this.mockProjects.find(p => p.id === id);
        return of(project).pipe(delay(200));
    }
}