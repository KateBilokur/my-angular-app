import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  name_site = 'Сучасна музика';
  logo_site: string = '/assets/logo/logo.png';

    constructor(
      private authService: AuthService,
      private router: Router
    ) {}

    isAuthenticated(): boolean {
      return this.authService.isAuthenticated();
    }

    logout(): void {
      this.authService.logout();
      this.router.navigate(['/']);
    }
}
