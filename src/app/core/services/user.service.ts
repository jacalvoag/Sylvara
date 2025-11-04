import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private mockUser: User = {
        id: 1,
        fullName: 'María',
        bio: 'González',
        email: 'ariaria@gmail.com',
        phone: '961232323',
        location: 'La triste suchiapa',
        photoUrl: undefined
    };
    // Este método simula una llamada a la API
    getUserProfile(): Observable<User> {
        return of(this.mockUser).pipe(delay(300));
    }

    // Simula actualizar el perfil del usuario
    updateUserProfile(user: User): Observable<User> {
        this.mockUser = { ...this.mockUser, ...user };
        return of(this.mockUser).pipe(delay(500));
    }
}