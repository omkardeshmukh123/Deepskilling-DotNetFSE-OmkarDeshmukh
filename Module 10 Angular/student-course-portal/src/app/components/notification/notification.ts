import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.html',
  providers: [NotificationService]
})
export class Notification {

  constructor(
    public notification: NotificationService
  ){}

}