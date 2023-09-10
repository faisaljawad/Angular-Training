import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: string = '';

  constructor(private http: HttpClient) {
  
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  login(credentials: { username: string; password: string }) {
    return this.http.post(
      'https://api.escuelajs.co/api/v1/auth/login',
      credentials
    );
  }

  // Check if the access token is already set
  checkAccessToken(): void {
    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      this.accessToken = storedToken;
    } else {
      // Make the login API call to obtain the access token
      this.login({
        username: 'your-username',
        password: 'your-password',
      }).subscribe(
        (response: any) => {
          if (response.access_token) {
            this.accessToken = response.access_token;
            // Save the access token securely (e.g., in local storage)
            localStorage.setItem('access_token', this.accessToken);
          } else {
            // Handle API response without access token
          }
        },
        (error) => {
          // Handle login error here
        }
      );
    }
  }
}
