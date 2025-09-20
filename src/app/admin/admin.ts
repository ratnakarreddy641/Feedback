import { Component } from '@angular/core';
import { FeedbackService } from '../feedback-service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [DatePipe, CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  username: string = '';
  password: string = '';
  isLoggedIn = false;
  feedbacks: any[] = [];
  error: string = '';

  constructor(private feedbackService: FeedbackService) {}

  login() {
    this.feedbackService.adminLogin({ username: this.username, password: this.password })
      .subscribe({
        next: () => {
          this.isLoggedIn = true;
          this.loadFeedbacks();
        },
        error: () => {
          this.error = "Invalid credentials!";
        }
      });
  }

  loadFeedbacks() {
    this.feedbackService.getAllFeedback().subscribe(res => this.feedbacks = res);
  }
}
