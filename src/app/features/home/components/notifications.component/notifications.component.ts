import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification } from '../../../../core/models/notification.model';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  loading = true;

  constructor(private notificationService: NotificationService) {}

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
}