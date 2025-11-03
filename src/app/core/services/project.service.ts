import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {


    private mockProjects: Project[] = [
        { id: 1, name: 'Rancho Cuba Libre', zones: 12, status: 'Activo', 
            description: 'Proyecto de la materia de Análisis de Especies de 4 semestre. Predio de aproximadamente 1680 metros cuadrados divididos en 4 zonas de estudio.', 
            zone:[
                {
                    idZone: 1,
                    zoneName: 'Parcela El Roble',
                    zoneNumber: 1,
                    squareFootage: '420m2'
                }
            ]},
        { id: 2, name: 'Tomate Invernadero', zones: 8, status: 'Terminado', 
            description: 'Proyecto de la materia de Análisis de Especies de 4 semestre. Predio de aproximadamente 1680 metros cuadrados divididos en 4 zonas de estudio.', 
            zone:[
                {
                    idZone: 2,
                    zoneName: 'Parcela El Roble',
                    zoneNumber: 2,
                    squareFootage: '420m2'

                },
                {
                    idZone: 3,
                    zoneName: 'Parcela El Roble',
                    zoneNumber: 2,
                    squareFootage: '420m2'

                }
                
            ] },
        { id: 3, name: 'Frijol Secano 2024', zones: 20, status: 'Activo', 
            description: 'Proyecto de la materia de Análisis de Especies de 4 semestre. Predio de aproximadamente 1680 metros cuadrados divididos en 4 zonas de estudio.', 
            zone:[
                {
                    idZone: 4,
                    zoneName: 'Parcela El Roble',
                    zoneNumber: 2,
                    squareFootage: '420m2'

                }
                
            ] },
        { id: 4, name: 'Café Altura', zones: 15, status: 'Activo', 
            description: 'Proyecto de la materia de Análisis de Especies de 4 semestre. Predio de aproximadamente 1680 metros cuadrados divididos en 4 zonas de estudio.', 
            zone:[
                {
                    idZone: 5,
                    zoneName: 'Parcela El Roble',
                    zoneNumber: 2,
                    squareFootage: '420m2'

                }
                
            ] },
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