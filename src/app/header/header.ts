import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  name_site = 'Сучасна музика'
  logo_site: string = '/assets/logo/logo.png'
}
