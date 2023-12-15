import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterviewStatusService {
  private interviewStatusMap = new Map<string, boolean>();
  private isInterviewScheduledSource = new BehaviorSubject<boolean>(false);
  isInterviewScheduled$ = this.isInterviewScheduledSource.asObservable();

  // interview-status.service.ts

setInterviewScheduledStatus(jobSeekerId: string, status: boolean) {
  this.interviewStatusMap.set(jobSeekerId, status);
  this.isInterviewScheduledSource.next(status);
  console.log(`Interview status set for ${jobSeekerId}: ${status}`);
  console.log('Interview Status Map:', this.interviewStatusMap);
}

getInterviewScheduledStatus(jobSeekerId: string): boolean {
  const status = this.interviewStatusMap.get(jobSeekerId) || false;
  console.log(`Interview status retrieved for ${jobSeekerId}: ${status}`);
  console.log('Interview Status Map:', this.interviewStatusMap);
  return status;
}

}
