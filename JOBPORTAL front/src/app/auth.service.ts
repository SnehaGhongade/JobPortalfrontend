// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private currentUserSubject: BehaviorSubject<any>;
//   public currentUser: Observable<any>;

//   constructor(private http: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
//     this.currentUser = this.currentUserSubject.asObservable();
//   }

//   public get currentUserValue(): any {
//     return this.currentUserSubject.value;
//   }

//   login(email: string, password: string) {
//     return this.http.get<any>('http://localhost:5189/api/JobSeekers').pipe(
//       map((users) => {
//         const user = users.find((a: any) => a.email === email && a.password === password);
//         if (user) {
//           localStorage.setItem('currentUser', JSON.stringify(user));
//           this.currentUserSubject.next(user);
//         }
//         return user;
//       })
//     );
//   }

//   logout() {
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
//   }
  

// getUserDetails(): any {
//     return this.currentUserValue;
//   }
  
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.get<any>('http://localhost:5189/api/JobSeekers').pipe(
      map((users) => {
        const user = users.find((a: any) => a.email === email && a.password === password);
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  

getUserDetails(): any {
    return this.currentUserValue;
  }
  
}
