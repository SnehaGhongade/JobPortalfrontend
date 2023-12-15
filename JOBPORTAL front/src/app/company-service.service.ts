import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private loggedInCompany: any; 

  setLoggedInCompany(company: any) {
    this.loggedInCompany = company;
  }

  getLoggedInCompanyId(): string | null {
    return this.loggedInCompany ? this.loggedInCompany.companyId : null;
  }

  getLoggedInCompany(): any {
    return this.loggedInCompany;
  }
}

