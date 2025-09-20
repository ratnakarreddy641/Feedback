import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../feedback-service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-feedback',
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class Feedback {
  userId: string = '';
  name: string = '';
  feedback: string = '';

  feedbackOptions = ['Excellent', 'Good', 'Average'];

  constructor(private route: ActivatedRoute, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
  }

  submitFeedback() {
    if (!this.name || !this.feedback) {
      Swal.fire('Error', 'Please fill all fields', 'error');
      return;
    }
    this.feedbackService.submitFeedback({ userId: this.userId, name: this.name, feedback: this.feedback })
      .subscribe(res => Swal.fire('Success', res.message, 'success').then(() => {
        this.name = '';
        this.feedback = '';
      }));
  }

}
