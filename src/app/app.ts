import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioPages } from './portfolio-pages/portfolio-pages';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PortfolioPages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
