import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  imports: [CommonModule, RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('Geolocation');

  mostrarLayout = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      if (url.includes('/dashboard/iniciar-sesion') || url.includes('/dashboard/registro')) {
        this.mostrarLayout = false;
      } else {
        this.mostrarLayout = true;
      }
    });
  }
}
