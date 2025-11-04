import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Notification } from '../../../core/models/notification.model';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.css'
})
export class NotificationsPageComponent implements OnInit {
  notifications: Notification[] = [];
  loading = true;

  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.notificationService.getNotifications().subscribe({
      next: (data) => {
        this.notifications = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando notificaciones', err);
        this.loading = false;
      }
    });
  }

  getIconName(type: string): string {
    switch(type) {
      case 'collaboration':
        return 'group_add';
      case 'report':
        return 'description';
      case 'alert':
        return 'warning';
      default:
        return 'info';
    }
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  markAsRead(id: number): void {
    console.log('Marcar como leída:', id);
  }

  deleteNotification(id: number): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }
}