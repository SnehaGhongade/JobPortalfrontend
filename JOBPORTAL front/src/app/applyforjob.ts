// export class Applyforjob {
//     appliedJobId!:number;
//     jobSeekerId!: number;
//     jobId!: number;
//     resume!: File
// }


export class Applyforjob {
    appliedJobId?: number;
    jobSeekerId?: number;
    jobId?: number;
    resume?: File | null; // Allow null for initial form state
    isApplied: boolean | undefined;
    companyId?:number;
  }
  