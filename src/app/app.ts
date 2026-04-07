import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tateti } from './tateti/tateti';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tateti],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tateti');
}
