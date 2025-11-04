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
  showDeleteModal = signal(false);
  profileForm: FormGroup;
  accountForm: FormGroup;

  constructor(private userService: UserService) {
    this.profileForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      bio: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required])
    });

    this.accountForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(120)])
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

        this.accountForm.patchValue({
          email: user.email,
          age: user.age || ''
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
    }
  }

  onChangePassword(): void {
    const newPassword = this.accountForm.get('newPassword')?.value;
    const confirmPassword = this.accountForm.get('confirmPassword')?.value;

    if (newPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (newPassword && confirmPassword) {
      this.userService.changePassword({ newPassword, confirmPassword }).subscribe({
        next: () => {
          console.log('Contraseña cambiada');
          this.showSuccessMessage.set(true);
          setTimeout(() => this.showSuccessMessage.set(false), 3000);
          this.accountForm.patchValue({ newPassword: '', confirmPassword: '' });
        },
        error: (err) => {
          console.error('Error cambiando contraseña', err);
        }
      });
    }
  }

  onChangeEmail(): void {
    const newEmail = this.accountForm.get('email')?.value;
    if (newEmail) {
      this.userService.changeEmail(newEmail).subscribe({
        next: () => {
          console.log('Email cambiado');
          this.showSuccessMessage.set(true);
          setTimeout(() => this.showSuccessMessage.set(false), 3000);
        },
        error: (err) => {
          console.error('Error cambiando email', err);
        }
      });
    }
  }

  onSaveAccountSettings(): void {
    if (this.accountForm.valid) {
      const age = this.accountForm.get('age')?.value;
      
      this.userService.updateUserProfile({ id: 1, age } as User).subscribe({
        next: () => {
          console.log('Configuración guardada');
          this.showSuccessMessage.set(true);
          setTimeout(() => this.showSuccessMessage.set(false), 3000);
        },
        error: (err) => {
          console.error('Error guardando configuración', err);
        }
      });
    }
  }

  onDeactivateAccount(): void {
    if (confirm('¿Estás seguro que deseas desactivar tu cuenta?')) {
      this.userService.deactivateAccount().subscribe({
        next: () => {
          console.log('Cuenta desactivada');
          alert('Cuenta desactivada exitosamente');
        },
        error: (err) => {
          console.error('Error desactivando cuenta', err);
        }
      });
    }
  }

  onDeleteAccount(): void {
    this.showDeleteModal.set(true);
  }

  confirmDeleteAccount(): void {
    this.userService.deleteAccount().subscribe({
      next: () => {
        console.log('Cuenta eliminada');
        alert('Cuenta eliminada exitosamente');
        this.showDeleteModal.set(false);
      },
      error: (err) => {
        console.error('Error eliminando cuenta', err);
      }
    });
  }

  cancelDeleteAccount(): void {
    this.showDeleteModal.set(false);
  }

  onChangePhoto(): void {
    console.log('Cambiar foto');
  }

  onDeletePhoto(): void {
    console.log('Eliminar foto');
  }
}