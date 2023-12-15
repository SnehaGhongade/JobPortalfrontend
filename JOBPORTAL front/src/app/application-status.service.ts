
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApplicationStatusService {
//   private applicationStatusSubject: BehaviorSubject<string> = new BehaviorSubject<string>('apply');
//   public applicationStatus$: Observable<string> = this.applicationStatusSubject.asObservable();

//   updateStatus(status: string): void {
//     this.applicationStatusSubject.next(status);
//   }
// }



// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApplicationStatusService {
//   private appliedJobIdSubject = new BehaviorSubject<number | null>(null);
//   appliedJobId$ = this.appliedJobIdSubject.asObservable();

//   updateStatus(jobId: number): void {
//     this.appliedJobIdSubject.next(jobId);
//   }
// }

// application-status.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStatusService {
  private appliedJobIdsSubject = new BehaviorSubject<number[]>([]);
  appliedJobIds$ = this.appliedJobIdsSubject.asObservable();

  updateStatus(jobId: number): void {
    const appliedJobIds = this.appliedJobIdsSubject.value;
    if (!appliedJobIds.includes(jobId)) {
      this.appliedJobIdsSubject.next([...appliedJobIds, jobId]);
    }
  }
}

