import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationModule implements OnInit {
  activeSection = signal<'perfil' | 'ajuste'>('perfil');
  showSuccessMessage = signal(false);
  loading = signal(true);

  profileForm: FormGroup;

  constructor(private userService: UserService) {
    this.profileForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      bio: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.userService.getUserProfile().subscribe({
      next: (user) => {
        this.profileForm.patchValue({
          fullName: user.fullName,
          bio: user.bio,
          email: user.email,
          phone: user.phone,
          location: user.location
        });
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error cargando perfil de usuario', err);
        this.loading.set(false);
      }
    });
  }

  setActiveSection(section: 'perfil' | 'ajuste'): void {
    this.activeSection.set(section);
  }

  onSaveChanges(): void {
    if (this.profileForm.valid) {
      const updatedUser: User = {
        id: 1,
        ...this.profileForm.value
      };

      this.userService.updateUserProfile(updatedUser).subscribe({
        next: (user) => {
          console.log('Cambios guardados:', user);
          this.showSuccessMessage.set(true);
          setTimeout(() => this.showSuccessMessage.set(false), 3000);
        },
        error: (err) => {
          console.error('Error guardando cambios', err);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

  onChangePhoto(): void {
    console.log('Cambiar foto');
    // Implementar lógica para cambiar foto
  }

  onDeletePhoto(): void {
    console.log('Eliminar foto');
    // Implementar lógica para eliminar foto
  }
}