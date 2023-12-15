
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Services } from '../services';
import { ActivatedRoute, Router } from '@angular/router';
import { InterviewStatusService } from '../interview-status.service';
import { InterviewService } from '../interview.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {
  JobData!: any[];

  constructor(
    private services: Services,
    private router: Router,
    private route: ActivatedRoute,
    private interviewStatusService: InterviewStatusService,
    private interview: InterviewService,
    private cdr: ChangeDetectorRef
  ) {}

  isInterviewScheduled(jobSeekerId: string): boolean {
    return this.interviewStatusService.getInterviewScheduledStatus(jobSeekerId);
  }
  navigateToInterview(jobSeekerId: string): void {
    this.router.navigate(['/interview', jobSeekerId]);
  }

  ngOnInit(): void {
    this.getAllData();
    this.route.queryParams.subscribe(params => {
      if (params['interviewDate'] && params['interviewTime']) {
        console.log('Received interview date:', params['interviewDate']);
        console.log('Received interview time:', params['interviewTime']);
      }
    });
  }

  openInterviewForm(job: any): void {
    job.showInterviewForm = !job.showInterviewForm;
  }

  calculateInterviewDateTime(): { interviewDate: string, interviewTime: string } {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const interviewDate = this.formatDate(tomorrow);
    const interviewTime = '10:00';

    return { interviewDate, interviewTime };
  }

  scheduleInterview(job: any): void {
    const { interviewDate, interviewTime } = this.calculateInterviewDateTime();
  
    const index = this.JobData.findIndex((item) => item.jobSeekerId === job.jobSeekerId);
    if (index !== -1) {
      this.JobData[index].interviewDate = interviewDate;
      this.JobData[index].interviewTime = interviewTime;
    }
  
    // Set the interview data in your API or wherever it's stored
    this.services.updateInterviewData(job.jobSeekerId, interviewDate, interviewTime).subscribe({
      next: (res) => {
        console.log('Interview data updated successfully:', res);
  
        // Fetch the latest data after scheduling an interview
        this.getAllData();
  
        this.cdr.detectChanges();
  
        // Update interview status using InterviewStatusService
        this.interviewStatusService.setInterviewScheduledStatus(job.jobSeekerId, true);
      },
      error: (err) => {
        console.error('Error updating interview data:', err);
  
        // Log the detailed error information
        console.error('Detailed error information:', err.error);
  
      },
      complete: () => {
      },
    });
  
    this.navigateToInterview(job.jobSeekerId); 
  }
  
  formatDate(date: Date | null): string {
    if (date === null) {
      return 'N/A';
    }

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new DatePipe('en-US').transform(date, 'dd-MM-yyyy', 'UTC') || 'N/A';
  }

  getAllData() {
    this.services.getpostData().subscribe({
      next: (res) => {
        console.log('Received data from the service:', res);
        this.JobData = res;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
    
  }
}