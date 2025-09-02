import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';
import { HeroSection } from './main/hero-section';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidenav, HeroSection, Footer],
  template: `
    <app-header />
    <div class="grid grid-cols-[1fr_56rem] max-w-6xl mx-auto">
      <app-sidenav />
      <app-hero-section />
    </div>
    <app-footer />
  `,
  styles: ``,
})
export class App {}
