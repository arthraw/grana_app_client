import { Injectable } from '@angular/core';
import { env } from 'src/environments/env.local';
import { CreateUser } from 'src/app/core/models/user/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Response } from 'src/app/core/models/response/response.model';
import { LoginUser } from 'src/app/core/models/auth/login.model';
import { ResponseMessage } from 'src/app/core/models/response/response_message.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = env.apiUrl + '/user'; 
  
  constructor(private http: HttpClient) {}

  register(user: CreateUser): Observable<Response<string>> {
    return this.http.post<Response<string>>(this.url, user, { withCredentials: true })
  }

  login(user: LoginUser): Observable<Response<string>> {
    return this.http.post<Response<string>>(`${this.url}` + "/login", user, { withCredentials: true });
  }

  logout(): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(`${this.url}`+ "/logout", {}, { withCredentials: true })
  }

  checkAuth(): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(`${this.url}`+ "/auth/check", {}, { withCredentials: true })
  }
  validateEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }
}
