import { Component } from '@angular/core';
import { FeedbackService } from '../feedback-service';
import { QRCodeComponent } from 'angularx-qrcode';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [QRCodeComponent, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 qrData: string = '';
  userId: string = '';

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.feedbackService.getQr().subscribe(res => {
      this.qrData = res.qrData;
      this.userId = res.userId;
    });
  }
}
