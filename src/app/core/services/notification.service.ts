import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Notification } from '../models/notification.model';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private mockNotifications: Notification[] = [
        {
            id: 1,
            type: 'collaboration',
            message: 'Fuiste agregado al proyecto colaborativo "Estudio Sierra Verde".',
            date: new Date()
        },
        {
            id: 2,
            type: 'report',
            message: 'Se generó el reporte de biodiversidad del predio "El Robledal".',
            date: new Date()
        },
        {
            id: 3,
            type: 'collaboration',
            message: 'Fuiste agregado al proyecto colaborativo "Estudio Sierra Verde".',
            date: new Date()
        }
    ];

    // Este método simula una llamada a la API
    // Para conectar con API real, cambias por: this.http.get<Notification[]>(`${apiUrl}/notifications`)
    getNotifications(): Observable<Notification[]> {
        return of(this.mockNotifications).pipe(delay(500));
    }
}