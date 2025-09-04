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
<!--    TODO: 右上角的購物車/搜尋 還有有下角的回到最上面-->
    <app-header />
    <div class="grid grid-cols-[1fr_56rem] gap-4 max-w-6xl mx-auto">
      <app-sidenav />
      <app-hero-section />
    </div>
    <app-footer />
  `,
  styles: ``,
})
export class App {}
