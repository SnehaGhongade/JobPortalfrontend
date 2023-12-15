
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http: HttpClient) { }

  addInterview(interviewData: any): Observable<any> {
    return this.http.post('http://localhost:5189/api/interviews/schedule', interviewData);
  }

  getInterviews() {
    return [];
  }
}
