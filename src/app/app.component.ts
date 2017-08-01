/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Book Of Life
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>The Book Of Life Game created by crystalarc.</span>
    </footer>
  `
})
export class AppComponent {
  public name = 'Book Of Life';
}
