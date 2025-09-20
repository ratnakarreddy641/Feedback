import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
   private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getQr(): Observable<any> {
    return this.http.get(`${this.apiUrl}/qr`);
  }

  submitFeedback(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/feedback`, data);
  }

  getAllFeedback(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/feedback`);
  }

  adminLogin(data: any) {
  return this.http.post(`${this.apiUrl}/admin/login`, data);
}

}
