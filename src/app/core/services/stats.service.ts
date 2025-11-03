import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GeneralStats } from '../models/stats.model';

@Injectable({
    providedIn: 'root'
})
export class StatsService {
    private mockStats: GeneralStats = {
        totalProjects: 23,
        projectsThisMonth: 5,
        totalAnalysis: 11,
        analysisThisMonth: 6
    };

    // Este método simula una llamada a la API
    // Para conectar con API real, cambias por: this.http.get<GeneralStats>(`${apiUrl}/stats`)
    getGeneralStats(): Observable<GeneralStats> {
        return of(this.mockStats).pipe(delay(300));
    }
}