import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterviewStatusService } from '../interview-status.service';
import { InterviewService } from '../interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css'],
})
export class InterviewComponent implements OnInit {
  jobSeekerId: string | undefined;
  interviewDate: Date = new Date();
  interviewTime: string = '';
  interviewLocation: string = '';
  minInterviewDate: string | undefined;
  minInterviewTime: string | undefined;
  maxInterviewTime: string | undefined;
  isInterviewScheduled: boolean = false;
  jobId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private interviewStatusService: InterviewStatusService,
    private interviewService: InterviewService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.jobSeekerId = params['jobSeekerId'];
      this.jobId = params['jobId'];

      console.log('Job Seeker ID:', this.jobSeekerId);
      console.log('Job ID:', this.jobId);
    });

    this.minInterviewDate = this.formatDate(new Date());
    this.minInterviewTime = '09:00';
    this.maxInterviewTime = '18:00';
  }

  submitInterview(): void {
    const currentDate = new Date();
    if (this.interviewDate && this.interviewDate < currentDate) {
      alert('Please select a future date for the interview.');
      return;
    }

    const selectedTime = this.interviewTime!;
    if (!this.isTimeInRange(selectedTime, '09:00', '18:00')) {
      alert('Please select a time between 9 am and 6 pm.');
      return;
    }

    const interviewData = {
      jobSeekerId: this.jobSeekerId,
      interviewDate: this.formatDate(this.interviewDate),
      interviewTime: this.interviewTime,
      interviewLocation: this.interviewLocation,
    };

    

this.interviewService.addInterview(interviewData).subscribe(
  (response) => {
    console.log('Interview submitted successfully:', response);

    this.interviewStatusService.setInterviewScheduledStatus(
      this.jobSeekerId!,
      true
    );

    alert('Interview scheduled successfully!');

    this.router.navigate(['/applicant_list']);

    console.log('Job Seeker ID:', this.jobSeekerId);
    console.log('Interview Date:', this.interviewDate);
    console.log('Interview Time:', this.interviewTime);
  },


      (error) => {
        console.error('Error submitting interview:', error);
        console.error('Full error object:', error);

        if (error.error) {
          console.error('Error response from the backend:', error.error);
        }

        alert('Error scheduling interview. Please try again.');
      }
    );
  }

  private formatDate(date: Date): string {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  private isTimeInRange(time: string, startTime: string, endTime: string): boolean {
    return time >= startTime && time <= endTime;
  }
}
