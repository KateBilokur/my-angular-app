import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(
    data: { email: string; password: string }
  ): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>('/login', data).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.accessToken);
      })
    );
  }

  register(data: { email: string; password: string }): Observable<any> {
    return this.http.post('/register', data);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
